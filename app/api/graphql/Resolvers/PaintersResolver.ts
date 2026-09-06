import { getMongoClient } from "@/libs/Database";
import { ObjectId, Db } from "mongodb";
import { ObjectType, Field, ID, Resolver, Query, Int, Mutation, Arg } from "type-graphql";
import { getOptionalUserId, getRequiredUserId } from "../auth";
import { graphqlError } from "../errors";

@ObjectType()
export class Painter {
    @Field(() => ID)
    id: string;

    @Field()
    stage_name: string;

    @Field()
    bio: string;

    @Field()
    cover_photo: string;

    @Field(() => Int)
    artworks: number;

    @Field(() => Int)
    followers: number;
}

@ObjectType()
export class FollowResult {
    @Field()
    following: boolean; // true = passou a seguir, false = deixou de seguir
}

@ObjectType()
export class Artwork {
    @Field(() => ID)
    id: string;

    @Field()
    title: string;

    @Field()
    image: string;

    @Field(() => ID)
    id_artist: string;

    @Field()
    artist_name: string;
}

@ObjectType()
export class ArtistWithArtworks {
    @Field(() => ID)
    id: string;

    @Field()
    stage_name: string;

    @Field()
    bio: string;

    @Field()
    cover_photo: string;

    @Field(() => [Artwork])
    artworks: Artwork[];
}

const PAINTER_PROJECTION = {
    stage_name: 1,
    bio: 1,
    cover_photo: 1,
    artworks: 1,
    followers: 1,
} as const;

function mapPainter(doc: any): Painter {
    return {
        id: doc._id.toString(),
        stage_name: doc.stage_name ?? "",
        bio: doc.bio ?? "",
        cover_photo: doc.cover_photo ?? "",
        artworks: doc.artworks ?? 0,
        followers: doc.followers ?? 0,
    };
}

function escapeRegex(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

@Resolver()
export class PaintersResolver {
    private async connectDb(): Promise<Db> {
        const client = await getMongoClient();
        return client.db("artVault");
    }

    private async getFollowedArtistIds(db: Db, userId: string): Promise<ObjectId[]> {
        const followedRecords = await db
            .collection("followed_artists")
            .find({ user_id: userId })
            .project({ artist_id: 1 })
            .toArray();

        return followedRecords
            .map((doc) => doc.artist_id)
            .filter((artistId) => ObjectId.isValid(artistId))
            .map((artistId) => new ObjectId(artistId));
    }

    @Query(() => [Painter])
    async getArtistFollowed(
        @Arg("limit", { defaultValue: 50 }) limit: number
    ): Promise<Painter[]> {
        const userId = await getOptionalUserId();
        if (!userId) return []; 

        try {
            const db = await this.connectDb();
            const artistObjectIds = await this.getFollowedArtistIds(db, userId);

            if (artistObjectIds.length === 0) return [];

            const paintersData = await db
                .collection("artists")
                .find({ _id: { $in: artistObjectIds } })
                .project(PAINTER_PROJECTION)
                .limit(Math.min(limit, 100))
                .toArray();

            return paintersData.map(mapPainter);
        } catch (error) {
            console.error("Erro ao buscar artistas seguidos:", error);
            throw graphqlError("Erro ao buscar artistas seguidos.", "INTERNAL_SERVER_ERROR", 500);
        }
    }

    @Mutation(() => FollowResult)
    async toggleFollowArtist(@Arg("idArtist") idArtist: string): Promise<FollowResult> {
        const userId = await getRequiredUserId();

        if (!ObjectId.isValid(idArtist)) {
            throw graphqlError("ID de artista inválido.", "BAD_USER_INPUT", 400);
        }

        const db = await this.connectDb();

        try {
            // Garante que o artista existe antes de permitir seguir
            const artistExists = await db
                .collection("artists")
                .findOne({ _id: new ObjectId(idArtist) }, { projection: { _id: 1 } });

            if (!artistExists) {
                throw graphqlError("Artista não encontrado.", "NOT_FOUND", 404);
            }

            const collection = db.collection("followed_artists");
            const existingFollow = await collection.findOne({
                user_id: userId,
                artist_id: idArtist,
            });

            if (existingFollow) {
                await collection.deleteOne({ _id: existingFollow._id });
                return { following: false };
            }

            await collection.insertOne({
                user_id: userId,
                artist_id: idArtist,
                savedAt: new Date(),
            });
            return { following: true };
        } catch (error) {
            if (error instanceof Error && "extensions" in error) throw error; // já é GraphQLError

            // Índice único (user_id + artist_id) rejeita inserção duplicada em corrida
            if ((error as any)?.code === 11000) {
                throw graphqlError("Ação já processada, tente novamente.", "CONFLICT", 409);
            }

            console.error(`Erro ao processar follow/unfollow [Artista: ${idArtist}]:`, error);
            throw graphqlError("Erro ao processar sua solicitação.", "INTERNAL_SERVER_ERROR", 500);
        }
    }

    @Query(() => [Painter])
    async getPaintersData(
        @Arg("limit", { defaultValue: 50 }) limit: number
    ): Promise<Painter[]> {
        try {
            const db = await this.connectDb();
            const userId = await getOptionalUserId();

            let filter: Record<string, unknown> = {};

            if (userId) {
                const followedArtistIds = await this.getFollowedArtistIds(db, userId);
                if (followedArtistIds.length > 0) {
                    filter = { _id: { $nin: followedArtistIds } };
                }
            }

            const paintersData = await db
                .collection("artists")
                .find(filter)
                .project(PAINTER_PROJECTION)
                .limit(Math.min(limit, 100))
                .toArray();

            return paintersData.map(mapPainter);
        } catch (error) {
            console.error("Erro ao buscar todos os artistas:", error);
            throw graphqlError("Erro ao buscar artistas.", "INTERNAL_SERVER_ERROR", 500);
        }
    }

    @Query(() => [Artwork])
    async searchArtworks(
        @Arg("authorSearch", { nullable: true, defaultValue: "" }) authorSearch: string,
        @Arg("artSearch", { nullable: true, defaultValue: "" }) artSearch: string
    ): Promise<Artwork[]> {
        try {
            const db = await this.connectDb();

            const pipeline: any[] = [
                {
                    $lookup: {
                        from: "artists",
                        localField: "artist_id",
                        foreignField: "_id",
                        as: "artist",
                    },
                },
                { $unwind: "$artist" },
            ];

            const matchConditions: any[] = [];
            if (artSearch?.trim()) {
                matchConditions.push({ title: { $regex: escapeRegex(artSearch.trim()), $options: "i" } });
            }
            if (authorSearch?.trim()) {
                matchConditions.push({ "artist.stage_name": { $regex: escapeRegex(authorSearch.trim()), $options: "i" } });
            }

            if (matchConditions.length > 0) {
                pipeline.push({ $match: { $and: matchConditions } });
            }

            pipeline.push({ $limit: 20 });

            const results = await db.collection("artworks").aggregate(pipeline).toArray();

            return results.map((doc) => ({
                id: doc._id.toString(),
                title: doc.title,
                image: doc.image,
                artist_id: doc.artist._id.toString(),
                artist_name: doc.artist.stage_name,
            }));
        } catch (error) {
            console.error("Erro ao buscar obras:", error);
            throw graphqlError("Erro ao buscar obras.", "INTERNAL_SERVER_ERROR", 500);
        }
    }

    @Query(() => ArtistWithArtworks)
    async getArtistWithArtworks(@Arg("artistId") artistId: string): Promise<ArtistWithArtworks> {
        if (!ObjectId.isValid(artistId)) {
            throw graphqlError("ID de artista inválido.", "BAD_USER_INPUT", 400);
        }

        try {
            const db = await this.connectDb();
            const artist = await db.collection("artists").findOne({ _id: new ObjectId(artistId) });

            if (!artist) {
                throw graphqlError("Artista não encontrado.", "NOT_FOUND", 404);
            }

            const artworks = await db
                .collection("artworks")
                .find({ artist_id: new ObjectId(artistId) })
                .toArray();

            return {
                id: artist._id.toString(),
                stage_name: artist.stage_name ?? "",
                bio: artist.bio ?? "",
                cover_photo: artist.cover_photo ?? "",
                artworks: artworks.map((art) => ({
                    id: art._id.toString(),
                    title: art.title,
                    image: art.image,
                    artist_id: artistId,
                    artist_name: artist.stage_name,
                })),
            };
        } catch (error) {
            if (error instanceof GraphQLError) throw error;
            console.error("Erro ao buscar artista com obras:", error);
            throw graphqlError("Erro ao buscar dados do artista.", "INTERNAL_SERVER_ERROR", 500);
        }
    }
}