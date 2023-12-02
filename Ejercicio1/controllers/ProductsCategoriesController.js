const db = require('../config/database.js')

const ProdCatController = {
  createTable(req, res) {
    const sqlProductsCategories = `CREATE TABLE ProductsCategories(id int AUTO_INCREMENT, product_id INT, category_id INT, PRIMARY KEY(id), 
    FOREIGN KEY (product_id) REFERENCES Products(id), FOREIGN KEY (category_id) REFERENCES Categories(id))`

    db.query(sqlProductsCategories, (err, result) => {
      if(err) throw err
      res.send('ProductsCategories table created')
    })
  },

  getAll(req, res) {
    const sql = `SELECT title, description, Products.category_id, Categories.name FROM Products
    INNER JOIN Categories ON Products.category_id = Categories.id`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send(result)
    })
  }
}

module.exports = ProdCatController