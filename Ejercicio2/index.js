const express = require('express')
const app = express()
const {db, puerto} = require('./config/database.js')

app.use(express.json())

app.get('/createdb', (req, res) => {
  const sql = `CREATE DATABASE expressDB`
  db.query(sql, (err, result) => {
    if (err) throw err
    res.send('Database created...')
  })
})

app.use('/Orders', require('./routes/orders.js'))

app.use('/Users', require('./routes/users.js'))

app.listen(puerto, () => console.log(`Server started at port ${puerto}`))