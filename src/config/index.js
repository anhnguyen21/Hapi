const { Model } = require('objection');
const knex = require('../models/connect');

Model.knex(knex.knex);


module.exports = {
  Model,
  knex
};