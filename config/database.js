require('dotenv').config();

const createDatabaseUrl = (env) => {
  return `postgres://${env.username}:${env.password}@${env.host}:${env.port}/${env.database}`;
};

module.exports = {
  development: {
    dialect: 'postgres',
    url: createDatabaseUrl({
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT
    })
  },
  test: {
    dialect: 'postgres',
    url: createDatabaseUrl({
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT
    })
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT
  }
};
