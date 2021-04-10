'use strict'
var Boom = require('boom')
const Shop = require('../database/models/shop');
module.exports = {
    getShop: async (rep, res, next) => {
        try {
            var id = rep.params.id;
            console.log(id);
            return await Shop.query().findById(id);
        } catch (error) {
            Boom.badRequest('invalid query');
        }
       
    },
};