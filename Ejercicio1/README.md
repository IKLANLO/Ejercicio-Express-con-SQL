# Ejercicio 1

Permite crear una base de datos, crear sus correspondientes tablas, y buscar, añadir, eliminar y actualizar los datos de los productos y las categorías a las que están asociados, realizando la solicitud directamente desde la url.

## Utilización

Tras introducir las siguientes url y datos requeridos, el usuario recibirá un fichero JSON con la respuesta solicitada.

#### Inicializando la base de datos y tablas

- Crear base de datos: _'localhost:3000/createdb'_.

- Crear tabla Categories: _'localhost:3000/Categories/createTable'_.

- Crear tabla Products: _'localhost:3000/Products/createTable'_.

- Crear tabla ProductsCategories: _'localhost:3000/ProductsCategories/createTable'_. Se trata de una tabla intermedia en la que no es necesario introducir datos, únicamente sirve para relacionar internamente las otras dos tablas principales.

#### Añadiendo datos a Products y Categories

- Añadir una categoría: _'localhost:3000/Categories/newCategory'_. En el body debe introducirse el dato requerido (name).

- Añadir un producto: _'localhost:3000/Products/newProduct'_. En el body deben introducirse los datos requeridos (title, description y category_id).

#### Filtros, y modificaciones en Products

- Lista de productos: _'localhost:3000/Products/getProducts'_.

- Actualizar un producto: _'localhost:3000/Products/updateProduct/id/:id'_. En la url debe introducirse el id del producto a actualizar, y en el body los datos que queramos modificar (title, description y/o category_id).

- Filtrar producto por id: _'localhost:3000/Products/getProduct/id/:id'_. En la url debe introducirse el id del producto buscado.

- Filtrar productos de forma descendente (por id): _'localhost:3000/Products/getProductsDescent'_.

- Filtrar producto por nombre (title): _'localhost:3000/Products/getProduct/name/:title'_. En la url debe introducirse el nombre del producto buscado.

- Eliminar un producto: _'localhost:3000/Products/deleteId/id/:id'_. En la url debe añadirse el id del producto a eliminar.

#### Filtros y modificaciones en Categories

- Actualizar una categoría: _'localhost:3000/Categories/updateCategory/id/:id'_. En la url debe introducirse el id de la categoría a actualizar, y en el body el nombre (name) que queramos modificar.

- Lista de categorías: _'localhost:3000/Categories/getCategories'_.

- Filtrar categoría por id: _'localhost:3000/Categories/getCategory/id/:id'_. En la url debe introducirse el id de la categoría buscada.
