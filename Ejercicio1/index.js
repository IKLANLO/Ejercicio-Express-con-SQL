// Ejercicio 1
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
  const sqlProducts = `CREATE TABLE Products(id int AUTO_INCREMENT, title VARCHAR(50), description VARCHAR(250), category_id INT,
                       PRIMARY KEY(id), FOREIGN KEY (category_id) REFERENCES Categories(id))`

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

// Ejercicio 2
app.post('/insertProduct', (req, res) => {
  const sql = `INSERT INTO Products (title, description, category_id) 
              VALUES ('${req.body.title}','${req.body.description}', '${req.body.category_id}')`
  
  db.query(sql, (err, result) => {
    if(err) throw err
    res.send('Product added')
  })
})

app.post('/insertCategory', (req, res) => {
  const sql = `INSERT INTO Categories (name) 
              VALUES ('${req.body.name}')`
  
  db.query(sql, (err, result) => {
    if(err) throw err
    res.send('Category added')
  })
})

// Ejercicio 3
app.put('/putProduct/:id', (req, res) => {
  let title, description, category_id

  db.query('SELECT * FROM Products', (err, resul) => {
    resul.forEach((product) => {
      if(product.id == req.params.id){
        req.body.title != undefined ? title = req.body.title : title = product.title
        req.body.description != undefined ? description = req.body.description : description = product.description
        req.body.category_id != undefined ? category_id = req.body.category_id : category_id = product.category_id
      }
    })
  
    const sql = `UPDATE Products SET title = '${title}', description = '${description}', category_id = ${category_id}
                WHERE id = '${req.params.id}'`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send('Data updated')
    })
  })
})

app.put('/putCategory/:id', (req, res) => {
  let name
  
  db.query('SELECT * FROM Categories', (err, resul) => {
    resul.forEach((category) => {
      if(category.id == req.params.id){
        req.body.name != undefined ? name = req.body.name : name = category.name
      }
    })
  
    const sql = `UPDATE Categories SET name = '${name}' WHERE id = '${req.params.id}'`

    db.query(sql, (err, result) => {
      if(err) throw err
      res.send('Data updated')
    })
  })
})

// Ejercicio 4
app.get('/getProducts', (req, res) => {
  const sql = `SELECT * FROM Products`

  db.query(sql, (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

app.get('/getCategories', (req, res) => {
  const sql = `SELECT * FROM Categories`

  db.query(sql, (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

app.get('/getProductsCategories', (req, res) => {
  const sql = `SELECT title, description, Products.category_id, Categories.name FROM Products
              INNER JOIN Categories ON Products.category_id = Categories.id`

  db.query(sql, (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

app.get('/getProductbyId/:id', (req, res) => {
  const sql = `SELECT * FROM Products WHERE id = ${req.params.id}`

  db.query(sql, (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

app.get('/getProductDescent', (req, res) => {
  const sql = `SELECT * FROM Products ORDER BY id DESC`

  db.query(sql, (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

app.get('/getCategorybyId/:id', (req, res) => {
  const sql = `SELECT * FROM Categories WHERE id = ${req.params.id}`

  db.query(sql, (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

app.get('/getProductbyName/:title', (req, res) => {
  const sql = `SELECT * FROM Products WHERE title = "${req.params.title}"`

  db.query(sql, (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

// Ejercicio 5
app.delete('/deleteProduct/:id', (req, res) => {
  const sql = `DELETE FROM Products WHERE id = ${req.params.id}`

  db.query(sql, (err, result) => {
    if(err) throw err
    res.send('Product deleted')
  })
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))