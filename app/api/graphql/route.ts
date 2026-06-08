import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { buildSchema } from "type-graphql";
import { NextRequest } from "next/server";
import path from "path";

import { UserResolver } from "@/app/api/graphql/Resolvers/UserResolver";
import { MongooseResolver } from "./Resolvers/MongooseResolver";

let schema: any;

const getHandler = async () => {
  if (!schema) {
    schema = await buildSchema({
      resolvers: [UserResolver, MongooseResolver],
      emitSchemaFile: path.resolve(__dirname, "graphql/schemas/schemaGraph.gql"),
      validate: false,
    });
  }

  const server = new ApolloServer({
    schema,
  });

  return startServerAndCreateNextHandler<NextRequest>(server);
};

export async function GET(request: NextRequest) {
  const handler = await getHandler();
  return handler(request);
}

export async function POST(request: NextRequest) {
  const handler = await getHandler();
  return handler(request);
}