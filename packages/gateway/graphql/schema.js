const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
  type Query { 
    mails: [Mail]
    mail(id: String!): Mail
  }

  type Mutation {
    mail(input: MailInput): Mail
  }

  type Mail {
    subject: String
    receiver: String
    content: String
    _id: String
  }

  input MailInput {
    subject: String!
    receiver: String!
    content: String!
  }

`;

module.exports = makeExecutableSchema({ typeDefs, resolvers }) 