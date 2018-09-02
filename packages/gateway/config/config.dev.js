const { PORT, SERVICE_DB_PORT, Q_URI } = process.env;
module.exports = {
  port: PORT || 3001,
  serviceDatabase: {
    port: SERVICE_DB_PORT || 4001
  },
  q: {
    uri: Q_URI || 'test'
  }
};