
var mysql = require('mysql');
var express = require('express');
var app = express();
app.use(express.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "fungo",
    password: "",
    database: "devsoft"
});

app.put('/carrito/actualizar/:id_producto',(req,res)=>{
const {id_producto}= req.params
const {cant_producto, tot_producto} =req.body;

const query = `UPDATE carrito SET cant_producto='${cant_producto}', tot_producto='${tot_producto}'
WHERE id_producto='${id_producto}';`

con.query(query, (error) => {
if(error) return concosole.error(error,message)

res.json('Se actualizo correctamente el usuario')

});
});


app.listen(8081, function(){
    console.log("Estamos !corriendoooooo¡");
});