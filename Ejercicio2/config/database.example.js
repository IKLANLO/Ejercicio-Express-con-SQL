const mysql = require('mysql2')
const puerto = 3000

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'my9dahafi*+6Af',
  database: 'expressDB'
})

db.connect()

module.exports = {db, puerto}