import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { split, from } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { resolvers, typeDefs } from "./Resolvers";
import initialState from "./state";

// const httpLink = new HttpLink({
//   uri: `http://localhost:9005/kompaql`,
// });

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:9005/kompaql`,
//   options: {
//     reconnect: true,
//   },
// });

const cache = new InMemoryCache();

// const link = split(
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query);
//     return kind === "OperationDefinition" && operation === "subscription";
//   },
//   wsLink,
//   httpLink
// );

const client = new ApolloClient({
  // link: from([link]),
  cache,
  resolvers,
});

cache.writeData({
  data: initialState,
});

export default client;
