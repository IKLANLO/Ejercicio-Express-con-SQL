const {db} = require('../config/database.js')

const UserController = {
  createTable(req, res) {
    const sql = `CREATE TABLE Users(id INT AUTO_INCREMENT, name VARCHAR(50), last_name VARCHAR(50), PRIMARY KEY(id))`

    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Users table created')
    })
  },

  create(req, res) {
    const sql = `INSERT INTO Users(name, last_name) VALUES ('${req.body.name}', '${req.body.last_name}')`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send('User added')
    })
  },

  update(req, res) {
    let name, last_name
  
    db.query('SELECT * FROM Users', (err, resul) => {
      resul.forEach((user) => {
        if(user.id == req.params.id){
          req.body.name != undefined ? name = req.body.name : name = user.name
          req.body.last_name != undefined ? last_name = req.body.last_name : last_name = user.last_name
        }
      })
    
      const sql = `UPDATE Users SET name = '${name}', last_name = '${last_name}' WHERE id = '${req.params.id}'`
  
      db.query(sql, (err, result) => {
        if(err) throw err
        res.send('Data updated')
      })
    })
  }, 

  getAll(req, res) {
    const sql = `SELECT * FROM Users`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send(result)
    })
  },

  getById(req, res) {
    const sql = `SELECT * FROM Users WHERE id = ${req.params.id}`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send(result)
    })
  },

  deleteById(req, res) {
    const sql = `DELETE FROM Users WHERE id = ${req.params.id}`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send('User deleted')
    })
  }
}


module.exports = UserController