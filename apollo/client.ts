import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import PhoenixSocket from "./socket";
import { split } from "apollo-link";
import { hasSubscription } from "@jumpn/utils-graphql";

//HTTP Link
const httpLink = createHttpLink({
  uri: "https://chat.thewidlarzgroup.com/api/graphql",
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MTc2NDEwNzcsImlhdCI6MTYxNTIyMTg3NywiaXNzIjoiY2hhdGx5IiwianRpIjoiYTIwMzI2NDUtMmRhYi00ZDBlLTkzZmQtYzg0ZDJkZGE4YTZlIiwibmJmIjoxNjE1MjIxODc2LCJzdWIiOiJhZGU5YWFiNy0xNGEzLTQ2ZmMtYWNhMi1kMmZjOTZiYTU3NjkiLCJ0eXAiOiJhY2Nlc3MifQ.Fkf-1DL-DiGuXz3gqpsM9uxyr2oVic0EDAWLL3FO2kgoRUmO5bhRtC5xf3ze1BB9utWMiPfDtlPHRd-8jyiFNg`,
  },
}));
const authedHttpLink = authLink.concat(httpLink);

//Socket Link
const phoenixSocket = new PhoenixSocket(
  "wss://chat.thewidlarzgroup.com/socket",
  {
    params: () => ({
      token:
        "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MTc2NDEwNzcsImlhdCI6MTYxNTIyMTg3NywiaXNzIjoiY2hhdGx5IiwianRpIjoiYTIwMzI2NDUtMmRhYi00ZDBlLTkzZmQtYzg0ZDJkZGE4YTZlIiwibmJmIjoxNjE1MjIxODc2LCJzdWIiOiJhZGU5YWFiNy0xNGEzLTQ2ZmMtYWNhMi1kMmZjOTZiYTU3NjkiLCJ0eXAiOiJhY2Nlc3MifQ.Fkf-1DL-DiGuXz3gqpsM9uxyr2oVic0EDAWLL3FO2kgoRUmO5bhRtC5xf3ze1BB9utWMiPfDtlPHRd-8jyiFNg",
    }),
  }
);
const absintheSocket = AbsintheSocket.create(phoenixSocket);
const websocketLink = createAbsintheSocketLink(absintheSocket);

//Create Client
const client = new ApolloClient({
  link: split(
    (operation) => hasSubscription(operation.query),
    websocketLink,
    authedHttpLink
  ),
  cache: new InMemoryCache(),
});

export default client;
