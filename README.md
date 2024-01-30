# javascript
javascript

<script>
    
var doc = prompt ('ingrese su documento de identidad')

var nom = prompt ('ingrese su primer nombre')

var sueldo = prompt ('ingrese su sueldo mensual')

var dias_trabajados = prompt ('ingrese los dias trabajados en el mes')

var t_basico = sueldo/30*dias_trabajados

var h_extra = prompt('ingrese las horas extras nocturnas que trabajo en el mes')

var total = h_extra + t_basico

var t_extra = (((5416*75)/100)+5416)*h_extra

var  des_salud = 4.5

var  des_pension = 4.5

var des_total = des_pension + des_salud

var total_total = total*des_total


alert("el usuario " + nom + " identificado con el documento " + doc + " con el sueldo mensual de " + sueldo + " que trabajo " + dias_trabajados + " dias " + t_basico + " con las horas extras nocturnas que trabajo " + h_extra + " con un valor de " + t_extra + " menos el descuento del 9% del sueldo neto por salud y casa de pensiones, gano un sueldo neto de: "+total_total)


</script>
