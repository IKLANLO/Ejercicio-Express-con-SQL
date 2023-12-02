// Ejercicio 1
const express = require('express')
const app = express()
const db = require('./config/database.js')
const router = require('./routes/products.js')
const PORT = 3000

app.use(express.json())

  app.get('/createdb',(req,res)=>{
    const sql ='CREATE DATABASE expressSqlDB'
    db.query(sql,(err,result)=>{
      if(err)throw err;
      res.send('Database created...')
    })
  })

app.use('/Categories', require('./routes/categories.js'))

app.use('/Products', require('./routes/products.js'))

app.use('/ProductsCategories', require('./routes/productscategories.js'))

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))