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
      date: req.body.date,
      time: req.body.time,
      type: req.body.type,
      location: req.body.location,
      availability: 'false' //WILL ADD req.body.avail 
    })
    .then(data => res.status(200).json(data))
});



app.listen(port, () => console.log(`Listening on localhost:${port}`))
