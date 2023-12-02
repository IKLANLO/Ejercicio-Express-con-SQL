const {db} = require('../config/database.js')

const ProductController = {
  createTable(req, res) {
    const sqlProducts = `CREATE TABLE Products(id int AUTO_INCREMENT, title VARCHAR(50), description VARCHAR(250), category_id INT,
    PRIMARY KEY(id), FOREIGN KEY (category_id) REFERENCES Categories(id))`

    db.query(sqlProducts, (err, result) => {
      if(err) throw err
      res.send('Products table created')
    })
  },

  create(req, res) {
    const sql = `INSERT INTO Products (title, description, category_id) 
    VALUES ('${req.body.title}','${req.body.description}', '${req.body.category_id}')`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send('Product added')
    })
  },

  update(req, res) {
    let title, description, category_id
    db.query('SELECT * FROM Products', (err, resul) => {
      resul.forEach((product) => {
        if(product.id == req.params.id){
          req.body.title != undefined ? title = req.body.title : title = product.title
          req.body.description != undefined ? description = req.body.description : description = product.description
          req.body.category_id != undefined ? category_id = req.body.category_id : category_id = product.category_id
        }
      })
  
      const sql = `UPDATE Products SET title = '${title}', description = '${description}', category_id = ${category_id}
                  WHERE id = '${req.params.id}'`

      db.query(sql, (err, result) => {
        if(err) throw err
        res.send('Data updated')
      })
    })
  },

  getAll(req, res) {
    const sql = `SELECT * FROM Products`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send(result)
    })
  },

  getById(req, res) {
    const sql = `SELECT * FROM Products WHERE id = ${req.params.id}`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send(result)
    })
  },

  getDescent(req, res) {
      const sql = `SELECT * FROM Products ORDER BY id DESC`

      db.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
      })
  },

  getByName(req, res) {
    const sql = `SELECT * FROM Products WHERE title = "${req.params.title}"`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send(result)
    })
  },

  deleteById(req, res) {
    const sql = `DELETE FROM Products WHERE id = ${req.params.id}`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send('Product deleted')
    })
  }
}

module.exports = ProductController