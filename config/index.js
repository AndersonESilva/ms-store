
const dbConfig = require('./database');

// const env = process.env.NODE_ENV || 'development';
const env = 'development';

const dbConfigx = dbConfig[env];

const config = Object.assign({
  env: env,
  db: dbConfigx
});

module.exports = config;
