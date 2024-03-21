const express = require('express');
const app = express();

const compression = require('compression')
const path = require('path');

require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD // this was a hard typo to find in the terminal
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(compression());


app.use(express.static(path.join(__dirname, '../public')));

app.get('/views', function(req,res) {
  res.send("getting around /* get route")

})

/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
final get route since it will override all others, kinda like css rules
!!!!!!!!!!!!!

*/
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(3001);
console.log('Listening on port 3001');
