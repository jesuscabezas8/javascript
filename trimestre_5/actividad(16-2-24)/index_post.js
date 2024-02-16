var mysql = require('mysql');
var express = require('express');
var app = express();
app.use(express.json())

var con = mysql.createConnection({
    host: "localhost",
    user: "fungo",
    password: "",
    database: "devsoft"
});

con.connect(error => {
    if(error) throw error
    console.log('Conexión exitosa a la base de datos');
})


app.post('/carrito/agregar', (req, res) => {
    const carrito= {
        id_producto: req.body.id_producto,
        cod_producto: req.body.cod_producto,
        pre_producto: req.body.pre_producto,
        cant_producto: req.body.cant_producto,
        tot_producto: req.body.tot_producto
        
    };

    const query = `INSERT INTO carrito SET ?`
    con.query(query, carrito, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se insertó correctamente el producto en el carrito`)
    });
});

app.listen(8081, function(){
    console.log("corra que lo alcanzooo");
});