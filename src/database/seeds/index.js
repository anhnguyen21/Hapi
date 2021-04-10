exports.seed = async function (knex) {
    // truncate all existing tables
    await knex.raw('TRUNCATE TABLE "user" CASCADE');
    await knex.raw('TRUNCATE TABLE shop CASCADE');

    // insert seed data
    await knex('shop').insert([
      {
        id: 1,
        name: 'shop1',
      },
      {
        id: 2,
        name: 'shop2',
      },
    ]);
  
    await knex('user').insert([
      {
        id: 1,
        name: 'user1',
        email: 'user1@test.com',
        shopId: 1,
      },
      {
        id: 2,
        name: 'user2',
        email: 'user2@test.com',
        shopId: 2,
      },
      {
        id: 3,
        name: 'user2',
        email: 'user3@test.com',
        shopId: 1,
      },
    ]);
  };