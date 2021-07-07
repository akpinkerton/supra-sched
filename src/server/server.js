const express = require('express');
const cors = require("cors");
const knex = require('knex')(require('./knexfile.js')['development']);
const app = express()
const port = 3001;


// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  knex
    .select('*')
    .from('anna')
    .orderBy('startDate', 'ACS')
    .orderBy('startTime', 'ASC')
    .orderBy('endTime', 'ASC')
    .orderBy('endDate', 'ACS')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
  console.log("GET req submitted")
});

app.post('/', function (req, res) {
  knex('anna')
    .insert({
      eventTitle: req.body.event,
      startDate: req.body.startDate,
      startTime: req.body.startTime,
      endDate: req.body.endDate,
      endTime: req.body.endTime,
      type: req.body.type,
      location: req.body.location,
      availability: req.body.availability,
      attendees: req.body.attendees
    })
    .then(data => res.status(200).json(data))
});

app.delete('/', function (req, res) {
  knex('anna')
    .del()
    .where({id : req.body.id})
    .then(data => res.status(200).json(data))
})



app.listen(port, () => console.log(`Listening on localhost:${port}`))
