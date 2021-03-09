const blog_model = require('./blog_model')
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

app.get('/', (req, res) => {
  blog_model.getUsers()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/register', (req, res) => {
  blog_model.addNewUser(req.body)
    .then(() => {
      console.log('new user created');
      return res.json({msg: "User added"});
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/userlogin', (req, res) => {
  blog_model.getUserByLogin(req.body)
    .then((data) => {
      console.log('login ', data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));
