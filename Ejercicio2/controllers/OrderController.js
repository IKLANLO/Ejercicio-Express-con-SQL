const {db} = require('../config/database.js')

const OrderController = {
  createTable(req, res) {
    const sql = `CREATE TABLE Orders(id INT AUTO_INCREMENT, name VARCHAR(50),
    PRIMARY KEY(id))`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send('Orders table created')
    })
  }
}

module.exports = OrderController