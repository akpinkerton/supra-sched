const express = require('express');
const cors = require("cors");
const knex = require('knex')(require('./knexfile.js')['development']);
const app = express()
const port = 3001;


// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  knex
    .select('*')
    .from('users')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
    console.log("GET req submitted")
});

app.post('/', function(req, res) {
knex('users')
  .insert({name: req.body.name, flight: req.body.flight})
  .then(data => res.status(200).json(data))
});



app.listen(port, () => console.log(`Listening on localhost:${port}`))
