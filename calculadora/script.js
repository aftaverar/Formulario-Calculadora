



/*
let operacion= prompt("Escoja una operacion: suma, resta, multiplicacion, division")// la variable que se evalua
let num1=parseFloat(prompt("Ingrese un numero"))
let num2=parseFloat(prompt("Ingrese el segundo numero"))
//parseFloat -parseIn: metodo que me permite modificar la tipologia de un dato
//convirtiendolos a enteros o decimales
switch (operacion) {
    case "suma":
    document.write ("<br> El resultado de la suma es: " + (num1+num2));
    break;// se rompe la ejecucion del bloque de codigo y no sigue evaluando mas casos

    case "resta":
    document.write ("<br> El resultado de la resta es: " + (num1-num2))
    break;

    case "multiplicacion":
        document.write ("<br> El resultado de la multiplicacion es: " + (num1*num2))
    break;

    case "division":
        document.write ("<br> El resultado de la division es: " + (num1/num2))
    break;
    default: // si ninguno de los casos se cumple
        document.write ("<br>Esta operacion no existe")
        break;

}
*/

var padre=document.getElementById("padre");
padre.addEventListener("mouseover",(e)=>{
    console.log(e.target.textContent)
    e.target.style.background="orange"
})