const path = require("path");

const basePath = path.join(__dirname, "/packages/");

module.exports = {
  apps : [
    {
      name: 'Gateway',
      script: `${basePath}/gateway/server.js`,
      watch: true,
      env: {
        PORT: 3001,
        SERVICE_DB_PORT: 4001,
        Q_URI: 'amqp://kcrkzyfp:1rGGSYMQaS6blE9PiaksGK964CbblgLJ@chimpanzee.rmq.cloudamqp.com/kcrkzyfp'
      }
    },

    {
      name: 'DB Service',
      script: `${basePath}/database-service/server.js`,
      watch: true,
      env: {
        PORT: 4001
      }
    },

    {
      name: 'Mailing Service',
      script: `${basePath}/mailing-service/index.js`,
      watch: true,
      env: {
        Q_URI: 'amqp://kcrkzyfp:1rGGSYMQaS6blE9PiaksGK964CbblgLJ@chimpanzee.rmq.cloudamqp.com/kcrkzyfp'
      }
    }
  ],
  
};
