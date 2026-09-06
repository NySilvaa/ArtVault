import { GraphQLError } from "graphql";

export function graphqlError(message: string, code: string, status = 400) {
    return new GraphQLError(message, {
        extensions: { code, http: { status }, userMessage: message },
    });
}