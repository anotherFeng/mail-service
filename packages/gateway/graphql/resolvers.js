const axios = require('axios');
const { serviceDatabase: { port } } = require('../config');
const { pushToMessageQ } = require('../Q/connect');

const databaseURL = `http://localhost:${port}`;
const databaseAPI = `/api/v1/database/`; 
const mailEndpoint = `${databaseURL}${databaseAPI}`;

const get = async (path) => {
  return (await axios.get(`${mailEndpoint}/${path}`)).data.payload;
}

const post = async (path, {input}) => {
  return (await axios.post(`${mailEndpoint}/${path}`, {... input})).data.payload;
}

module.exports = {
  Query: {
    mails: () => get('mails'),
    mail: (root, args, context) => get(`mails/${args.id}`)
  },
  Mutation: {
    mail: (_, args) => {
      let result;
      let error;
      try {
        result = post('mails', args)
      } catch (e) {
        error = e;
      }
      pushToMessageQ(JSON.stringify(args));
      return result || error;
    }
  }
}