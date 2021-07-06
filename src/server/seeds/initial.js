
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'Anna', flight: 'SCOO'},
        {id: 2, name: 'Roemello', flight: 'SCOV'},
        {id: 3, name: 'Felix', flight: 'SCOX'},
        {id: 4, name: 'Briana', flight: 'SCOO'},
      ]);
    });
};
