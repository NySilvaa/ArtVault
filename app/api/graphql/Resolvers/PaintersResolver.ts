import { getMongoClient } from "@/libs/Database";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { ObjectId, Db } from "mongodb";
import { ObjectType, Field, ID, Resolver, Query, Int, Mutation, Arg } from "type-graphql";

@ObjectType()
export class PaintersProps {
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
    followers: number
}

@Resolver()
export default class PaintersResolver {
    private async connectDb() {
        const client = await getMongoClient();
        return client.db("artVault");
    }

    private async getCookie(): Promise<string> {
        const cookie = await cookies();
        const idUser = cookie.get("token")?.value;

        if (!idUser) return "";

        const secretKey = process.env.JWT_SECRET;
        if (!secretKey) return "";

        try {
            const secret = new TextEncoder().encode(secretKey);
            const { payload } = await jwtVerify(idUser, secret);
            return payload.id as string;
        } catch {
            return "";
        }
    }

    // Busca e converte os IDs dos artistas que o usuário segue
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

    //  Artistas que o usuário SEGUE (Usando $in)
    @Query(() => [PaintersProps])
    async getArtistFollowed(): Promise<PaintersProps[]> {
        try {
            const id = await this.getCookie();

            // Se o usuário não estiver autenticado, encerra a busca
            if (!id) return [];

            const db = await this.connectDb();
            
            // Reaproveita a função para pegar os IDs
            const artistObjectIds = await this.getFollowedArtistIds(db, id);

            if (artistObjectIds.length === 0) return [];

            const paintersData = await db
                .collection("artists")
                .find({ _id: { $in: artistObjectIds } })
                .project({
                    stage_name: 1,
                    bio: 1,
                    cover_photo: 1,
                    artworks: 1,
                    followers: 1
                })
                .toArray();

            return paintersData.map((painter) => ({
                id: painter._id.toString(),
                stage_name: painter.stage_name ?? "",
                bio: painter.bio ?? "",
                cover_photo: painter.cover_photo ?? "",
                artworks: painter.artworks ?? 0,
                followers: painter.followers ?? 0
            }));

        } catch (error) {
            console.error("Erro ao buscar artistas seguidos:", error);
            return [];
        }
    }


    @Mutation(() => Boolean)
    async InsertArtist(@Arg("idArtist") idArtist: string): Promise<boolean>{
    try {
        const id = await this.getCookie();

        // Se o usuário não estiver autenticado
        if (!id) return false;

        const db = await this.connectDb();
        const collection = db.collection("followed_artists");

        // 1. Verifica se o usuário JÁ SEGUE o artista
        const existingFollow = await collection.findOne({
            user_id: id,
            artist_id: idArtist
        });

        if (existingFollow) {
            // 2. Se já segue, DELETA o registro (Unfollow)
            await collection.deleteOne({ _id: existingFollow._id });
        } else {
            // 3. Se não segue, CRIA o registro (Follow)
            await collection.insertOne({
                user_id: id,
                artist_id: idArtist,
                savedAt: new Date()
            });
        }

        // Retorna true indicando que a ação (follow ou unfollow) foi concluída sem erros
        return true; 
        
    } catch (error) {
        console.error(`Erro ao processar Follow/Unfollow [Artista: ${idArtist}]:`, error);
        return false;
    }
    }

    // TODOS os artistas, EXCLUINDO os que o usuário já segue (Usando $nin)
    @Query(() => [PaintersProps])
    async getPaintersData(): Promise<PaintersProps[]> {
        try {
            const db = await this.connectDb();
            const userId = await this.getCookie();

            // Inicializamos um filtro vazio (traz todos os artistas por padrão)
            let filter: any = {};

            // Se o usuário estiver logado, vamos verificar quem ele já segue
            if (userId) {
                const followedArtistIds = await this.getFollowedArtistIds(db, userId);

                // Se ele já segue algum artista, aplicamos o filtro $nin (Not In)
                if (followedArtistIds.length > 0) {
                    filter = { _id: { $nin: followedArtistIds } };
                }
            }

            // O filtro será aplicado dinamicamente aqui no find()
            const paintersData = await db
                .collection("artists")
                .find(filter)
                .project({
                    stage_name: 1,
                    bio: 1,
                    cover_photo: 1,
                    artworks: 1,
                    followers: 1
                })
                .toArray();

            return paintersData.map((painter) => ({
                id: painter._id.toString(),
                stage_name: painter.stage_name ?? "",
                bio: painter.bio ?? "",
                cover_photo: painter.cover_photo ?? "",
                artworks: painter.artworks ?? 0,
                followers: painter.followers ?? 0
            }));

        } catch (error) {
            console.error("Erro ao buscar todos os artistas:", error);
            return [];
        }
    }
}