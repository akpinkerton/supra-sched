
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return (knex('users').insert([
        {id: 1, name: 'Anna', flight: 'SCOO'},
        {id: 2, name: 'Roemello', flight: 'SCOV'},
        {id: 3, name: 'Felix', flight: 'SCOX'},
        {id: 4, name: 'Briana', flight: 'SCOO'}
      ]),
      knex('anna').insert([
        {id: 1, eventTitle: 'Lunch', startDate: '2021-07-05', startTime: '1200', endDate:'2021-07-05', endTime:'1300', type: 'event', location: 'office', availability: 'free'},
        {id: 2, eventTitle: 'Break', startDate: '2021-07-07', startTime: '1400', endDate:'2021-07-07', endTime:'1430', type: 'event', location: 'office', availability: 'free'},
        {id: 3, eventTitle: 'Meeting', startDate: '2021-07-10', startTime: '1630', endDate:'2027-07-10', endTime:'1700', type: 'event', location: 'office', availability: 'busy'},
        {id: 4, eventTitle: 'Check Email', startDate: '2021-07-05', startTime: '1200', endDate:'2021-07-05', endTime:'1300', type: 'task', location: 'office', availability: 'free'},
        {id: 5, eventTitle: 'Call Mom', startDate: '2021-07-07', startTime: '1400', endDate:'2021-07-07', endTime:'1430', type: 'task', location: 'office', availability: 'free'},
        {id: 6, eventTitle: 'Water plants', startDate: '2021-07-10', startTime: '1630', endDate:'2027-07-10', endTime:'1700', type: 'task', location: 'office', availability: 'busy'},

      ])
    )});
};
