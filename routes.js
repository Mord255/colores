const express = require('express')
const routes = express.Router()

routes.get('/colores',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('SELECT id,name,color FROM colores' , (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }
    })
})//LISTO

routes.get('/colores/:id',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('SELECT * FROM colores WHERE id = ? ' , [req.params.id] , (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }
    })
})//LISTO

routes.post('/crearColor',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('INSERT INTO colores(name,year,color,pantone_value) VALUES (?,?,?,?)' , [req.body.name,req.body.year,req.body.color,req.body.pantone_value] , (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }   
    })
})//LISTO




module.exports = routes