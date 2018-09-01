const axios = require('axios');
const { serviceDatabase: { port } } = require('../config');

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
      return post('mails', args);
    }
  }
}