import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { buildSchema } from "type-graphql";
import { NextRequest } from "next/server";

import { UserResolver } from "@/app/api/graphql/Resolvers/UserResolver";
import path from "path";
import PaintersResolver from "./Resolvers/PaintersResolver";

const serverPromise = (async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver, PaintersResolver,],
    validate: false,
    emitSchemaFile: path.resolve(__dirname, "schemas/SchemaGraphQl.gql")
  });

  return new ApolloServer({ schema, });
})();

const handlerPromise = serverPromise.then((server) => 
  startServerAndCreateNextHandler<NextRequest>(server)
);

export async function GET(request: NextRequest) {
  const handler = await handlerPromise;
  return handler(request);
}

export async function POST(request: NextRequest) {
  const handler = await handlerPromise;
  return handler(request);
}