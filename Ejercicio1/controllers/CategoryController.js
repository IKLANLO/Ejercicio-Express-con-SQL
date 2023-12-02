const db = require('../config/database.js')

const CategoryController = {
  createTable(req, res) {
    const sqlCategories = `CREATE TABLE Categories(id int AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY(id))`

    db.query(sqlCategories, (err, result) => {
      if(err) throw err
      res.send('Categories table created')
    })
  },

  create(req, res) {
    const sql = `INSERT INTO Categories (name) 
    VALUES ('${req.body.name}')`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send('Category added')
    })
  },

  update(req, res) {
    let name
  
    db.query('SELECT * FROM Categories', (err, resul) => {
      resul.forEach((category) => {
        if(category.id == req.params.id){
          req.body.name != undefined ? name = req.body.name : name = category.name
        }
      })
    
      const sql = `UPDATE Categories SET name = '${name}' WHERE id = '${req.params.id}'`
  
      db.query(sql, (err, result) => {
        if(err) throw err
        res.send('Data updated')
      })
    })
  },

  getAll(req, res) {
    const sql = `SELECT * FROM Categories`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send(result)
    })
  },

  getById(req, res) {
    const sql = `SELECT * FROM Categories WHERE id = ${req.params.id}`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send(result)
    })
  }
}

module.exports = CategoryController