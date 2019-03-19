require('dotenv').config();
const knex = require('knex');

const dbEnv = process.env.DB_ENV || 'development';

const config = require('../knexfile');

module.exports = knex(config[dbEnv]);