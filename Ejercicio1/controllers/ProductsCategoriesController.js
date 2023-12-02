const db = require('../config/database.js')

const ProdCatController = {
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