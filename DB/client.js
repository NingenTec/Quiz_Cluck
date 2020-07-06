const knex = require("knex");
const knexConfigs = require("../knexfile");
const client = knex(knexConfigs.development);

module.exports = client;