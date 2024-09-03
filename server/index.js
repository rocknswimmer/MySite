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
  pool.query('select view_count as views from views where id = 1', (err, data) => {
    if (err) {
      console.log("error getting view count", err);
    }
    res.send(data)
  })

})

app.put('/addview', function(req, res) {
  pool.query('update views set view_count = view_count + 1 where id = 1 returning *', (err, data) => {
    if(err) {
      console.log("error adding view", err);
    }
    res.send(data)
  })
})

app.post('/clicked', function(req,res) {
  const {type,location,viewer}=req.body;
  //pool.query()
  res.send(`info recieved: ${type}, ${location}, ${viewer}`)//delete/ remove instertability after check
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

app.listen(3013);
console.log('Listening on port 3013');
