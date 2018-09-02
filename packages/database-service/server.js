const server = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { port } = require("./config");
const routes = require('./routes/mailRoutes');
const config = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI);

server.use(bodyParser.json());
server.use('/api/v1/database/', routes)
server.listen(port, () => {
  console.log(`listening to database service at ${port}`);
});