




let operacion= prompt("Escoja una operacion: suma, resta, multiplicacion, division")
let num1=parseFloat(prompt("Ingrese un numero"))
let num2=parseFloat(prompt("Ingrese el segundo numero"))

switch (operacion) {
    case "suma":
    document.write ("<br> El resultado de la suma es: " + (num1+num2));
    break;

    case "resta":
    document.write ("<br> El resultado de la resta es: " + (num1-num2))
    break;

    case "multiplicacion":
        document.write ("<br> El resultado de la multiplicacion es: " + (num1*num2))
    break;

    case "division":
        document.write ("<br> El resultado de la division es: " + (num1/num2))
    break;
    default:
        document.write ("<br>Esta operacion no existe")
        break;

}

/*

let num1= parseFloat(getElementById(numero1))
let num2= parseFloat(getElementById(numero2))


let sumaOperacion= (getElementById (suma));
document.write ((num1+num2));

let restaOperacion= (getElementById (resta));
document.write ((num1-num2));

let multiplicacionOperacion= (getElementById (multiplicacion));
document.write ((num1*num2));

let divisionOperacion= (getElementById (division));
document.write ((num1/num2));



var padre=document.getElementById("padre");
padre.addEventListener("mouseover",(e)=>{
    console.log(e.target.textContent)
    e.target.style.background="orange"
})
*/