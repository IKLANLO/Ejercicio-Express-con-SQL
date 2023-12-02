const {db} = require('../config/database.js')

const UserController = {
  createTable(req, res) {
    const sql = `CREATE TABLE Users(id INT AUTO_INCREMENT, name VARCHAR(50), last_name VARCHAR(50), order_id INT,
    PRIMARY KEY(id), FOREIGN KEY(order_id) REFERENCES Orders(id))`

    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Users table created')
    })
  }
}

module.exports = UserController