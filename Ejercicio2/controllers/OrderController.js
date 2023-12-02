const {db} = require('../config/database.js')

const OrderController = {
  createTable(req, res) {
    const sql = `CREATE TABLE Orders(id INT AUTO_INCREMENT, name VARCHAR(50), user_id INT,
    PRIMARY KEY(id), FOREIGN KEY (user_id) REFERENCES Users(id))`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send('Orders table created')
    })
  },

  create(req, res) {
    const sql = `INSERT INTO Orders(name, user_id) VALUES ('${req.body.name}', '${req.body.user_id}')`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send('Order added')
    })
  },

  getAll(req, res) {
    const sql = `SELECT * FROM Orders`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send(result)
    })
  }
}

module.exports = OrderController