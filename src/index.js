import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  tupeDefs: gql`
    type Query {
      hello: String
    }
  `,
});
server.listen(4003).then(({ url }) => {
  console.log(`Server Listening on url ${url}`);
});
