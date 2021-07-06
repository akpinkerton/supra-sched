
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('flight').notNullable();
  })
  .createTable('anna', table => {
    table.increments('id');
    table.string('eventTitle').notNullable();
    table.string('date').notNullable();
    table.string('time').notNullable();
    table.string('type').notNullable();
    table.string('location').notNullable();
    table.string('availability')
  })
  .createTable('roemello', table => {
    table.increments('id');
    table.string('eventTitle').notNullable();
    table.string('date').notNullable();
    table.string('time').notNullable();
    table.string('type').notNullable();
    table.string('location').notNullable();
    table.sting('availability')
  })
  .createTable('felix', table => {
    table.increments('id');
    table.string('eventTitle').notNullable();
    table.string('date').notNullable();
    table.string('time').notNullable();
    table.string('type').notNullable();
    table.string('location').notNullable();
    table.string('availability')
  })
  .createTable('briana', table => {
    table.increments('id');
    table.string('eventTitle').notNullable();
    table.string('date').notNullable();
    table.string('time').notNullable();
    table.string('type').notNullable();
    table.string('location').notNullable();
    table.string('availability')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('Anna').dropTableIfExists('Roemello').dropTableIfExists('Felix').dropTableIfExists('Briana');
};
