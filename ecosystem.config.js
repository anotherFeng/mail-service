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
        SERVICE_DB_PORT: 4001
      }
    },

    {
      name: 'DB Service',
      script: `${basePath}/database-service/server.js`,
      watch: true,
      env: {
        PORT: 4001
      }
    }
  ],

  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
};
