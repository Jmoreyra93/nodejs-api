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

## DEPENDENCIAS


| Dependencias | README |
| ------ | ------ |
| nodemon | [plugins/dropbox/README.md][PlDb] |
| dotenv | [plugins/github/README.md][PlGh] |
| express | [plugins/googledrive/README.md][PlGd] |
| morgan | [plugins/onedrive/README.md][PlOd] |
| winston | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


(npx)

-----------------------------------------------------

# PROGRAMAS

- Google Chrome
- Visual Studio Code
- Postman
- Mongo Compass
- Git
- Node JS
- Nodemon

-----------------------------------------------------

-----------------------------------------------------

# CAPAS : PATRON MVC

CONTROLLER : ROUTES(path) , CLI menus

LOGICA/NEGOCIO  

MODELO

REPOSITORIO

HELPERS

(LIBRERIAS Y/0 PAQUETES)

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

#FALTA :

SWAGGER 
POSTMAN-AUTORIZACION

