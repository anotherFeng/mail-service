const { PORT, SERVICE_DB_PORT } = process.env;
module.exports = {
  port: process.env.PORT || 3001,
  serviceDatabase: {
    port: SERVICE_DB_PORT || 4001
  }
}