// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '123456',
      database: 'postgres',
      charset: 'utf8',
    },
    migrations: {
        // tableName: 'knex_migrations',
        directory: './src/database/migrations',
    },
    seeds: {
        directory: './src/database/seeds',
    },
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
