const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'accounts';
  }
}

module.exports = User;