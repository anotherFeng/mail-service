const axios = require('axios');

const getMails = async () => {
  const mails = (await axios.get('http://localhost:4001/mails')).data.payload;
  return mails;
}

module.exports = {
  Query: {
    mails: () => getMails(),
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