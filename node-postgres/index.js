// const blog_model = require('./blog_model')
// const cors = require('cors');
// const express = require('express')
// const app = express()
// const port = 3001
//
// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!');
// })
//
// app.use(express.json())
// app.use(cors());
// // app.use(function (req, res, next) {
// //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
// //   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
// //   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
// //   next();
// // });
//
// app.get('/', (req, res) => {
//   blog_model.getUsers()
//     .then(response => {
//       debugger
//       res.status(200).send(response);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     })
// })
//
//
// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })


const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// GET: Fetch all movies from the database
app.get('/', (req, res) => {
  db.select('*')
    .from('blog_user')
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));
