const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const app = express()
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.set('port',process.env.PORT || 9000)

//configuracion de las bases de datos
const dbOptions = {
    host : 'mysql-jfps.alwaysdata.net',
    user:'jfps',
    password:'JeanFranco25',
    database:'jfps_colores'
}

// middlewares running ------------------------------------
// implementacion de los middlewares, de mysql y json
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json())

// server running ------------------------------------
//configuracion del servicor y el puerto en el cual se estara ejecutando
app.listen(app.get('port'),()=>{
    console.log('Servidor corriendo en el puerto',app.get('port'))
})

// server routing ------------------------------------
// implementacion del archivo de rutas y del metodo get principal del servidor
app.use('/api',routes)
app.get('/',(req,res)=>{
    res.send('Iniciando mi API REST...')
})
