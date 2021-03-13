import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://chat.thewidlarzgroup.com/api/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MTc2NDEwNzcsImlhdCI6MTYxNTIyMTg3NywiaXNzIjoiY2hhdGx5IiwianRpIjoiYTIwMzI2NDUtMmRhYi00ZDBlLTkzZmQtYzg0ZDJkZGE4YTZlIiwibmJmIjoxNjE1MjIxODc2LCJzdWIiOiJhZGU5YWFiNy0xNGEzLTQ2ZmMtYWNhMi1kMmZjOTZiYTU3NjkiLCJ0eXAiOiJhY2Nlc3MifQ.Fkf-1DL-DiGuXz3gqpsM9uxyr2oVic0EDAWLL3FO2kgoRUmO5bhRtC5xf3ze1BB9utWMiPfDtlPHRd-8jyiFNg`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
