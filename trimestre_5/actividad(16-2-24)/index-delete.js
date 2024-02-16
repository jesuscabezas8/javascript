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
});

app.delete('/carrito/borrar/:id', (req, res) => {
    const { id } = req.params

    const query = `DELETE FROM carrito WHERE id_producto=${id};`
    con.query(query, (error) => {
        if(error) console.error(error.message)

        res.json(`Se eliminó correctamente el producto del carrito`)
    });
});

app.listen(8081, function(){
    console.log("ufffffffffffffff hace rato estoy que me corro");
});