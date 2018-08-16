const dummyMails = [
  {
    subject: "My first Email",
    receiver: "test@test.com",
    content: "hello world"
  },
  {
    subject: "My second Email",
    receiver: "test@test.com",
    content: "hello world"
  },
  {
    subject: "My third Email",
    receiver: "test@test.com",
    content: "hello world"
  }
]

module.exports = {
  Query: {
    mails: () => dummyMails,
    mail: (root, args, context) => console.log(args, context)
  },
  Mutation: {
    mail: (_, args) => {
      dummyMails[0] = args;
      console.log(args)
      return args;
    }
  }
}