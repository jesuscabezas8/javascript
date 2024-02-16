var mysql = require('mysql');
var express= require('express');
var app=express();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "devsoft"
});

//Buscar un registro en especifico
con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado a la base de datos");
    var sql = "SELECT * FROM carrito WHERE id_producto = 1"; 
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
        con.end(); 
    });
}); 

app.listen(8081, function(){
    console.log("Estamos !Melos¡ O Que?");
});
