const axios = require('axios');

const getMails = async () => {
  const mails = (await axios.get('http://localhost:4001/api/v1/database/mails')).data.payload;
  return mails;
};

const getMail = async (id) => {
  const mail = (await axios.get(`http://localhost:4001/api/v1/database/mails/${id}`)).data.payload;
  return mail;
};

module.exports = {
  Query: {
    mails: () => getMails(),
    mail: (root, args, context) => getMail(args.id)
  },
  Mutation: {
    mail: (_, args) => {
      dummyMails[0] = args;
      console.log(args)
      return args;
    }
  }
}