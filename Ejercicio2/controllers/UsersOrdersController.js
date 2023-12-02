const {db} = require('../config/database.js')

const UserOrderController = {
  createTable(req, res) {
    const sql = `CREATE TABLE UsersOrders(id int AUTO_INCREMENT, user_id INT, order_id INT, PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES Users(id), FOREIGN KEY(order_id) REFERENCES Orders(id))`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send('UsersOrders table created')
    })
  },

  getAll(req, res) {
    const sql = `SELECT Users.id, Users.name AS 'User name', Users.last_name AS 'User last name', 
    Orders.id AS 'Order id', Orders.name AS 'Order name' FROM Users INNER JOIN Orders ON Users.id = Orders.user_id`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send(result)
    })
  }
}

module.exports = UserOrderController