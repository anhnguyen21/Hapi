'use strict'
var Joi = require('joi');
module.exports = {
    login: {
        name: Joi.required(),
        pass: Joi.required(),
    }
}


