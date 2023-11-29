
const express = require('express')
const app = express()
const mysql = require('mysql2')
const PORT = 3000

app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'my9dahafi*+6Af',
  database: 'expressSqlDB'
})

db.connect()

  app.get('/createdb',(req,res)=>{
    const sql ='CREATE DATABASE expressSqlDB'
    db.query(sql,(err,result)=>{
      if(err)throw err;
      res.send('Database created...')
    })
  })

app.get('/createTableProducts', (req, res) => {
  const sqlProducts = `CREATE TABLE Products(id int AUTO_INCREMENT, title VARCHAR(50), description VARCHAR(250), PRIMARY KEY(id))`

  db.query(sqlProducts, (err, result) => {
    if(err) throw err
    res.send('Products table created')
  })
})

app.get('/createTableCategories', (req, res) => {
  const sqlCategories = `CREATE TABLE Categories(id int AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY(id))`

  db.query(sqlCategories, (err, result) => {
    if(err) throw err
    res.send('Categories table created')
  })
})

app.get('/createTableProductsCategories', (req, res) => {
  const sqlProductsCategories = `CREATE TABLE ProductsCategories(id int AUTO_INCREMENT, product_id INT, category_id INT, PRIMARY KEY(id), 
                                FOREIGN KEY (product_id) REFERENCES Products(id), FOREIGN KEY (category_id) REFERENCES Categories(id))`

  db.query(sqlProductsCategories, (err, result) => {
    if(err) throw err
    res.send('ProductsCategories table created')
  })
})



app.listen(PORT, () => console.log(`Server started at port ${PORT}`))