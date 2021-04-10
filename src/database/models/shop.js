const { Model } = require('objection');

class Shop extends Model {
  static get tableName() {
    return 'shop';
  }
}

module.exports = Shop;