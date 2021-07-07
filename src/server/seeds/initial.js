
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
        {id: 1, eventTitle: 'Lunch', startDate: '2021-07-05', startTime: '12:00', endDate:'2021-07-05', endTime:'13:00', type: 'event', location: 'office', availability: 'free', attendees: {Mello:'true', Briana:'true'}},
        {id: 2, eventTitle: 'Break', startDate: '2021-07-07', startTime: '14:00', endDate:'2021-07-07', endTime:'14:30', type: 'event', location: 'office', availability: 'free', attendees: {Felix:'true', Mello:'true'}},
        {id: 3, eventTitle: 'Meeting', startDate: '2021-07-10', startTime: '16:30', endDate:'2027-07-10', endTime:'17:00', type: 'event', location: 'office', availability: 'busy', attendees: {Felix: 'true', Briana:'true'}},
        {id: 4, eventTitle: 'Check Email', startDate: '2021-07-05', startTime: '12:00', endDate:'2021-07-05', endTime:'13:00', type: 'task', location: 'office', availability: 'free'},
        {id: 5, eventTitle: 'Call Mom', startDate: '2021-07-07', startTime: '14:00', endDate:'2021-07-07', endTime:'14:30', type: 'task', location: 'office', availability: 'free'},
        {id: 6, eventTitle: 'Water plants', startDate: '2021-07-10', startTime: '16:30', endDate:'2027-07-10', endTime:'17:00', type: 'task', location: 'office', availability: 'busy'},

      ])
    )});
};
