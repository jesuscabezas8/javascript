var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "fungo",
    password: "",
    database: "devsoft"
});

app.get("/ver_regs", (req, res) => {
    const query = 'SELECT * FROM carrito';
    con.query(query, (error, resultado) => {
        if (error) {
            return console.error(error.message);
        }

        if (resultado != 0) {
            res.json(resultado);
        } else {
            res.json('no hay registros');
        }
    });
});


app.listen(8081, function(){
    console.log("Estamos !Bien¡ O Que?");
});