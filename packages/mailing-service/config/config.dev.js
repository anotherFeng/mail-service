const { MAILJET_API, MAILJET_API_SECRET, Q_URI } = process.env;
module.exports = {
  q: {
    uri: Q_URI || 'test'
  },
  mailjet: {
    apiPublic: MAILJET_API,
    apiSecret: MAILJET_API_SECRET,
  }
};