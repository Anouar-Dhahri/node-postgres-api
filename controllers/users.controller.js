import { pool } from '../configs/queries.js'

export const getUsers = async ( req, res, next ) => {
  await pool.query( 'SELECT * FROM users ORDER BY id ASC', ( err, results ) => {
    if ( err ) {
      res.json({
        success: false,
        msg: err
      })
    }
    res.json({
      success: true,
      users: results.rows
    })
  })
}

export const getUserById = async ( req, res, next ) => {
  const id = parseInt(req.params.id)
  await pool.query('SELECT * FROM users WHERE id = $1', [id], (err, results) => {
      if (err) {
        res.json({
          success: false,
          msg: err
        })
      }else {
        res.json({
          success: true,
          user: results.rows
        })
      }
  })
}

export const createUser = async ( req, res, next ) => {
  const { name, email } = req.body;
  await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (err, results) => {
    if (err) {
      res.json({
        success: false,
        msg: err
      })
    }else {
      res.json({
        success: true,
        msg: `User added`
      })
    }
  })
}

export const updateUser = async ( req, res, next ) => {
  const id = req.params.id;
  const { name, email } = req.body;

  await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id], (err, results) => {
    if (err) {
      res.json({
        success: false,
        msg: err
      })
    }else {
      res.json({
        success: true,
        msg: `User modified with ID: ${id}`
      })
    }
  })
}

export const deleteUser = async ( req, res, next ) => {
  const id = req.params.id;

  await pool.query('DELETE FROM users WHERE id = $1', [id], (err, results) => {
    if (err) {
      res.json({
        success: false,
        msg: err
      })
    }else {
      res.json({
        success: true,
        msg: `User deleted with ID: ${id}`
      })
    }
  })
}