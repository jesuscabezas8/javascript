var express = require("express")
var app = express();

app.get("/carrito", function(req,res){
    res.send("usted esta seleccionando un producto del carrito")
});

app.put("/carrito", function(req,res){
    res.send("usted esta actualizando un producto del carrito")
});

app.post("/carrito", function(req,res){
    res.send("usted esta insertando un producto en el carrito")
});

app.delete("/carrito", function(req,res){
    res.send("usted esta eliminando un producto del carrito")
});

app.listen(8080, function(){
    console.log("aplicacion ejemplo. escuchando el puerto 8080")
})

