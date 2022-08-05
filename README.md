# nodejs-api
CRUD de Loggin de usuarios

# INICIALIZACIÓN

npm run dev : nodemon index
npm run start : node index

-----------------------------------------------------

# DEPENDENCIAS

nodemon
dotenv
express
morgan ->imprime los path que voy mandando a la api
winston ->

(npx)

-----------------------------------------------------

# PROGRAMAS

Google Chrome
Visual Studio Code
Postman
Mongo Compass
Git
Node JS
Nodemon

-----------------------------------------------------

# EXTENSIONES UTILIZADAS :

Bracket Pair Colorizer
Code Runner
GitLens
JavaScript (ES6) code snippets
Live Server
Markdown Preview Enhancer
Material Icon Theme
npm Intellisense
npm Intellisense
Path Intelisense
Quokka.js
Template String Converter
TypeScript Importer

-----------------------------------------------------

# CAPAS : PATRON MVC

CONTROLLER : ROUTES(path) , CLI menus

LOGICA/NEGOCIO  

MODELO

REPOSITORIO

HELPERS

(LIBRERIAS Y/0 PAQUETES)

= = = = = = = = = = = = = = = = = 

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
   |  |__ server
   |  |  |__expressServerjs
   |  |
   |  |__swagger
   |  |  |
   |  |  |__swagger.json
   |  |
   |  |__index.js
   |
   |__routes
      |__users


src/config -> VOY A TENER LAS PROPIEDADES(PUERTO,DB)

src/controllers -> CRUD DE USUARIOS

src/loaders -> VOY A TENER TODO LO NECESARIO ANTES QUE SE INICIE LA APP(librerias,clases,etc)
src/loaders/logger -> 
src/loaders/server ->CONFIGURACION DE COMO LEVANTAR EL SERVER EXPRESS
src/loaders/swagger ->DOCUMENTACIÓN
src/loaders/index.js -> INICIALIZACIÓN DEL PROYECTO

src/routes -> VOY A CONFIGURAR LAS RUTAS

src/users   


-----------------

#FALTA :

SWAGGER 
JWT
PERSISTENCIA EN Mongo
VALIDACIONES
POSTMAN-AUTORIZACION

