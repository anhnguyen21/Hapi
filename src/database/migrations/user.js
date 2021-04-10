 exports.up = function (knex) {
    return knex.schema
        .createTable('shop', (table) => {
            table.increments();
            table.string('name').notNullable();
            table.timestamps(true, true);
        })
        .createTable('user', (table) => {
            table.increments();
            table.string('name').notNullable();
            table.string('email').notNullable().unique();
            table.integer('shopId').references('id').inTable('shop');
            table.timestamps(true, true);
        })
        .createTable('product', (table) => {
            table.increments();
            table.string('name').notNullable();
            table.string('category').notNullable();
            table.integer('shopId').references('id').inTable('shop');
            table.timestamps(true, true);
    });
};
  
exports.down = function (knex) {
return knex.schema
    .dropTableIfExists('user')
    .dropTableIfExists('shop');
};