const { PORT } = process.env;
module.exports = {
  port: process.env.PORT || 3001,
  mongoURI: "mongodb://admin:8923135Ab@ds123562.mlab.com:23562/mail-microservice-db"
}