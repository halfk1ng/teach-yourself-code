import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.

  const authToken = process.env.HASURA_GRAPHQL_JWT_SECRET;
  const adminSecret = `Megan90591`;

  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: "https://teach-yourself-code-hasura.herokuapp.com/v1/graphql", // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
      headers: {
        authorization: `Bearer ${authToken}`,
        "x-hasura-admin-secret": `${adminSecret}`
      },
      fetch
    }),
    cache: new InMemoryCache().restore(initialState)
  });
}
