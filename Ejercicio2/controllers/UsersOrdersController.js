const {db} = require('../config/database.js')

const UserOrderController = {
  createTable(req, res) {
    const sql = `CREATE TABLE UsersOrders(id int AUTO_INCREMENT, user_id INT, order_id INT, PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES Users(id), FOREIGN KEY(order_id) REFERENCES Orders(id))`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send('UsersOrders table created')
    })
  }
}

module.exports = UserOrderController