const server = require("express")();
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const schema = require("./graphql/schema");
const { port } = require("./config");


server.use(bodyParser.json());
server.use("/graphql", graphqlExpress({ schema }));
server.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql"}));

server.listen(port, () => {
  console.log(`listening to gateway at ${port}`);
});