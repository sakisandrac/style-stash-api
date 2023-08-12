/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('user', function (table) {
      table.string('id').primary();
      table.string('name');
      table.string('email');
      table.string('username');
      table.string('password');
      table.timestamps(true, true);
    })

    .createTable('piece', function (table) {
      table.string('id').primary();
      table.text('note');
      table.string('image');
      table.string('user_id')
      table.foreign('user_id')
        .references('user.id');
      table.string('category_id')
      table.timestamps(true, true);
    })

    .createTable('outfit', function (table) {
      table.string('id').primary();
      table.text('note');
      table.string('image');
      table.string('user_id')
      table.foreign('user_id')
        .references('user.id');
      table.timestamps(true, true);
    })

    .createTable('outfit_to_piece', function (table) {
      table.string('id').primary();
      table.string('piece_id')
      table.foreign('piece_id')
        .references('piece.id');
      table.string('outfit_id')
      table.foreign('outfit_id')
        .references('outfit.id');
      table.timestamps(true, true);
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('outfit_to_piece')
  .dropTable('outfit')
  .dropTable('piece')
  .dropTable('user')
};
