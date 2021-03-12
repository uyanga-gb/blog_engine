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

const getPosts = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT post.id as postId, post.title, post.postcontent, post.publishedat, blog_user.firstname as authorFirstName, blog_user.lastname as authorLastName FROM post, blog_user WHERE post.authorid = blog_user.id ORDER BY post.publishedat ASC', (error, results) => {
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

const getUser = (username) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM blog_user WHERE email = $1', [username], (error, results) => {
      if (error) {
        reject(error)
      }
      console.log('result ', results)
      return resolve(results.rows);
    })
  })
}

const addNewUser = (newUser) => {
  return new Promise(function (resolve, reject) {
    pool.query('INSERT INTO blog_user (firstname, lastname, email, passwordhash, intro, createdat, updatedat) ' +
      'VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [newUser.firstname, newUser.lastname, newUser.username, newUser.password, newUser.intro, new Date(), new Date()], (error, results) => {
      if (error) {
        reject(error)
      } else if (results) {
        resolve(results.rows);
      }
    })
  })
}

const addNewPost = (newPost) => {
  return new Promise(function (resolve, reject) {
    pool.query('INSERT INTO post (authorid, title, postcontent, createdat, publishedat) ' +
      'VALUES ($1, $2, $3, $4, $5)',
      [newPost.authorId, newPost.title, newPost.content, new Date(), new Date()], (error, results) => {
        if (error) {
          reject(error)
        } else if (results) {
          resolve(results.rows);
        }
      })
  })
}

const addNewPostComment = (newPostComment) => {
  return new Promise(function (resolve, reject) {
    pool.query('INSERT INTO post_comment (postid, title, postcomment, createdat, publishedat) ' +
      'VALUES ($1, $2, $3, $4, $5)',
      [newPostComment.postId, newPostComment.title, newPostComment.postComment, new Date(), new Date()], (error, results) => {
        if (error) {
          reject(error)
        } else if (results) {
          resolve(results.rows);
        }
      })
  })
}

const getPost = (postId) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM post WHERE id = $1', [postId], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

module.exports = {
  getPosts,
  addNewUser,
  getUserByLogin,
  getUser,
  addNewPost,
  addNewPostComment
}
