const server = require("express")();
const bodyParser = require("body-parser");
const { port } = require("./config");
const routes = require('./routes/mail');
const config = require('./config');
require('./dbUtil')(config);

server.use(bodyParser.json());
server.use('/api/v1/database/', routes)
server.listen(port, () => {
  console.log(`listening to database service at ${port}`);
});