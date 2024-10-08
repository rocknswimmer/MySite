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
      console.log("error getting view count");
    }
    res.send(data)
  })

})

app.get('/tracked', function(req,res) {
  pool.query('select * from clicked', (err, data) => {
    if (err) {
      console.log("error getting view count");
    }
    res.send(data)
  })

})

app.put('/addview', function(req, res) {
  pool.query('update views set view_count = view_count + 1 where id = 1 returning *', (err, data) => {
    if(err) {
      console.log("error adding view");
    }
    res.send(data)
  })
})

app.post('/clicked', function(req,res) {
  const {type,location,viewer}=req.body;
  pool.query('insert into clicked (viewer, view_type, view_location) values ($1, $2, $3)', [viewer,type,location], (err, data) => {
    if(err) {
      console.log('error tracking a click')
    }
    res.send(err?"error tracking click":"click tracked")
  })

})

// Get clicked thoughts (grab all or what do I want)

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
