const express = require('express')
const app = express()
const {db,puerto} = require('./config/database.js')

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

app.listen(puerto, () => console.log(`Server started at port ${puerto}`))