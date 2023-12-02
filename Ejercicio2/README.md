# Ejercicio extra

Permite crear una base de datos, crear sus correspondientes tablas, y buscar, añadir, eliminar y actualizar los datos de los usuarios (Users) y los pedidos (Orders) a los que están asociados, realizando la solicitud directamente desde la url.

## Utilización

Tras introducir las siguientes url y datos requeridos, el usuario recibirá un fichero JSON con la respuesta solicitada.

#### Inicializando la base de datos y tablas

- Crear base de datos: _'localhost:3000/createdb'_.

- Crear tabla Users: _'localhost:3000/Users/createTable'_.

- Crear tabla Orders: _'localhost:3000/Orders/createTable'_.

- Crear tabla UsersOrders: _'localhost:3000/UsersOrders/createTable'_. Se trata de una tabla intermedia en la que no es necesario introducir datos, únicamente sirve para relacionar internamente las otras dos tablas principales.

#### Añadiendo datos a Users y Orders

- Añadir un usuario: _'localhost:3000/Users/newUser'_. En el body deben introducirse los datos requeridos (name, last_name).

- Añadir un pedido: _'localhost:3000/Orders/newOrder'_. En el body deben introducirse los datos requeridos (name, y user_id).

#### Filtros, y modificaciones en Users

- Lista de usuarios: _'localhost:3000/Users/getUsers'_.

- Actualizar un usuario: _'localhost:3000/Users/updateUser/id/:id'_. En la url debe introducirse el id del usuario a actualizar, y en el body los datos que queramos modificar (name y/o last_name).

- Filtrar usuario por id: _'localhost:3000/Users/getById/id/:id'_. En la url debe introducirse el id del usuario buscado.

- Eliminar un usuario: _'localhost:3000/Users/deleteById/id/:id'_. En la url debe añadirse el id del usuario a eliminar.

#### Filtro en Orders

- Lista de categorías: _'localhost:3000/Orders/getOrders'_.
