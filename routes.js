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
})

routes.get('/coloresx/xml',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('SELECT id,name,color FROM colores' , (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    $data = `<?xml version="1.0" encoding="UTF-8"?><colors>` ;
                    rows.forEach(element => {
                        $data = $data + "<color>" ;
                        $data = $data + "<id>" + element['id'] + "</id><br>";
                        $data = $data + "<name>" + element['name'] + "</name><br>";
                        $data = $data + "<color>" + element['color'] + "</color><br>";
                        $data = $data + "<br>" ;
                        $data = $data + "</color>" ;
                    });
                    $data = $data + "</colors>" ;
                    return res.set('application/xml').send($data);
                }
            })
        }
    })
})

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
})

routes.get('/coloresx/xml/:id',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('SELECT * FROM colores WHERE id = ? ' , [req.params.id] , (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    $data = `<?xml version="1.0" encoding="UTF-8"?><colors>` ;
                    $data = $data + "<color>" ;
                    $data = $data + "<id>" + rows[0]['id'] + "</id><br>";
                    $data = $data + "<name>" + rows[0]['name'] + "</name><br>";
                    $data = $data + "<year>" + rows[0]['year'] + "</year><br>";
                    $data = $data + "<color>" + rows[0]['color'] + "</color><br>";
                    $data = $data + "<pantone_value>" + rows[0]['pantone_value'] + "</pantone_value><br>";
                    $data = $data + "<br>" ;
                    $data = $data + "</color>" ;
                    $data = $data + "</colors>" ;
                    return res.set('application/xml').send($data);
                }
            })
        }
    })
})

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
})

module.exports = routes