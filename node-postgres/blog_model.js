const Pool = require('pg').Pool

// Not recommended for production environment to showing user credentials
// The pool object allows to query into the database that it’s connected to.
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'blog_engine_db',
  password: 'postgres',
  port: 5432,
});

const getUsers = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM blog_user ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const getUserByLogin = (user) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM blog_user WHERE email = $1 AND passwordhash = $2', [user.username, user.password], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const addNewUser = (newUser) => {
  return new Promise(function (resolve, reject) {
    pool.query('INSERT INTO blog_user (firstname, lastname, email, passwordhash, createdat, updatedat, lastlogin, intro, profile) ' +
      'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [newUser.firstname, newUser.lastname, newUser.username, newUser.password, new Date(), new Date(), new Date(), newUser.intro, 'New Profile'], (error, results) => {
      if (error) {
        reject(error)
      } else if (results) {
        resolve(results.rows);
      }
    })
  })
}

module.exports = {
  getUsers,
  addNewUser,
  getUserByLogin
}
