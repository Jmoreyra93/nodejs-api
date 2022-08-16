# API de Login de usuarios, creación , eliminación, actualización y obtención completa o filtrada de usuarios.



## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd dillinger
npm i
node app
```

For production environments...

```sh
npm run dev 
```


-----------------------------------------------------




| Dependencias |
| ------ |
| nodemon | 
| dotenv | 
| express | 
| express-validator | 
| morgan | 
| mongoose |
| mongoose-paginate-v2 |
| mongoose-unique-validator |
| swagger-ui-express |
| bcrypt |
| jsonwebtoken |





-----------------------------------------------------

# PROGRAMAS

- Google Chrome
- Visual Studio Code
- Postman
- Mongo Compass
- Git
- Node JS
- Nodemon



= = = = = = = = = = = = = = = = = 
```sh
package.json
.gitignore
env
src
   |__config 
   |  |__index.js
   |
   |__controllers
   |  |__users.js
   | 
   |__loaders
   |  |
   |  |__logger
   |  |  |__index.js
   |  |
   |  |
   |  |__mongoose
   |  |  |__index.js
   |  |
   |  |__ server
   |  |  |__expressServerjs
   |  |
   |  |__swagger
   |  |  |
   |  |  |__swagger.json
   |  |
   |  |__index.js
   |
   |__models
   |  |__users.js
   |
   |__routes
      |__users.js
```

src/config -> VOY A TENER LAS PROPIEDADES(PUERTO,DB)

src/controllers -> CRUD DE USUARIOS QUE LO UNO CON EL MODELO

src/loaders -> VOY A TENER TODO LO NECESARIO ANTES QUE SE INICIE LA APP(librerias,clases,etc)

src/loaders/logger -> 

src/loaders/server ->CONFIGURACION DE COMO LEVANTAR EL SERVER EXPRESS

src/loaders/swagger ->DOCUMENTACIÓN

src/loaders/index.js -> INICIALIZACIÓN DEL PROYECTO

src/models -> CREO EL SCHEMA

src/routes -> VOY A CONFIGURAR LAS RUTAS

src/users   


-----------------
