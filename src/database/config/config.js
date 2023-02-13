require('dotenv').config({ path: '../../.env' });

const configObject = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres'
};

module.exports = {
  development: configObject,
  test: configObject,
  production: configObject
};
