
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('flight').notNullable();
  })
  .createTable('anna', table => {
    table.increments('id');
    table.string('eventTitle').notNullable();
    table.string('startDate').notNullable();
    table.string('startTime').notNullable();
    table.string('endDate').notNullable();
    table.string('endTime').notNullable();
    table.string('type').notNullable();
    table.string('location').notNullable();
    table.string('availability');
    table.json('attendees')
  })
  .createTable('roemello', table => {
    table.increments('id');
    table.string('eventTitle').notNullable();
    table.string('startDate').notNullable();
    table.string('startTime').notNullable();
    table.string('endDate').notNullable();
    table.string('endTime').notNullable();
    table.string('type').notNullable();
    table.string('location').notNullable();
    table.string('availability');
    table.json('attendees')
  })
  .createTable('felix', table => {
    table.increments('id');
    table.string('eventTitle').notNullable();
    table.string('startDate').notNullable();
    table.string('startTime').notNullable();
    table.string('endDate').notNullable();
    table.string('endTime').notNullable();
    table.string('type').notNullable();
    table.string('location').notNullable();
    table.string('availability');
    table.json('attendees')
  })
  .createTable('briana', table => {
    table.increments('id');
    table.string('eventTitle').notNullable();
    table.string('startDate').notNullable();
    table.string('startTime').notNullable();
    table.string('endDate').notNullable();
    table.string('endTime').notNullable();
    table.string('type').notNullable();
    table.string('location').notNullable();
    table.string('availability');
    table.json('attendees')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('anna').dropTableIfExists('roemello').dropTableIfExists('felix').dropTableIfExists('briana');
};
