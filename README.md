# Requerimientos:
###Introduccion:
Servicio de API REST el cual proporciona colores a su gusto, estos mismos estan almacenados en una base de datos y poseen distintos atributos, esta cuenta con 3 apis, las cuales estaran detalladas posteriormente, las cuales son: **mostrar todos los colores, mostrar un color, crear nuevo color.** 

###Listado de las tecnologías o frameworks utilizados:

####Frameworks:

- Node js
- Express js

####Lenguajes de programacion:

- JavaScript
- SQL

####Programas:

- Visual Studio Code
- Postman

####Gestores de Bases de Datos y bases de datos:

- MySQL

###Instalacion de Dependencias:

1. **Node js:** instalacion normal como un programa promedio => link: https://nodejs.org/es/
2. **Express js: **
	Definicion: framework de JavaScript por el lado del servidor
	Comandos:
		npm init
		npm install express --save
		npm install express
3. **Driver de MySQL para Express js**
	Definicion: Driver que permite la conexion a una base de datos en MySQL con express js
	Comandos:
		npm install mysql
		npm i mysql express-myconnection
4. **Instalacion de libreria Json para expres js:**
	Definicion: Libreria de JavaScript para uso del formato json en express js
	Comandos:
		npm install -g json
5. **Instalacion de libreria Nodemon para expres js:**
	Definicion: libreria de express js para actualizaciones automaticas del programa en ejecucion
	Comandos:
		npm install -g nodemon
		npm install --save-dev nodemon
6. **Instalacion de CORS:**
	Definicion: Configuracion de acceso a las apis y protocolos http.
	Comandos:
		npm install cors

###Enlaces de apis a utilizar:

####Enlaces en Json:

- API/GET para traer todos los colores:
		https://colores25.herokuapp.com/api/colores
- API/GET para traer un color: como parametro pide el id del registro en la base de datos(1,2,3,4)
		https://colores25.herokuapp.com/api/colores/1
- API/POST para crear un nuevo registro de color: requiere que envies los siguiente parametros por medio de un fomulaio en post(id,name,year,color,pantone_value)
		https://colores25.herokuapp.com/api/colores

####Enlaces en XML:

- API/GET para traer todos los colores:
		https://colores25.herokuapp.com/api/coloresx/xml
- API/GET para traer un color: como parametro pide el id del registro en la base de datos(1,2,3,4)
		https://colores25.herokuapp.com/api/coloresx/xml/1

###End