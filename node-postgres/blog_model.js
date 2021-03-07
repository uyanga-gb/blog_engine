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


module.exports = {
  getUsers
}
