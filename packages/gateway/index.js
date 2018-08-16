const server = require("express")();
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const { port } = require("./config");

const typeDefs = `
  type Query { hey: String! }
`;

const resolver1 = {
  Query: {
    hey: () => 'hey there'
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolver1
});

server.use(bodyParser.json());
server.use("/graphql", graphqlExpress({ schema }));
server.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql"}));

server.listen(port, () => {
  console.log(`listening to ${port}`);
});