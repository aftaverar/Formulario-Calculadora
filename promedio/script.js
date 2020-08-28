const promedio= document.getElementById("promedio") //llamamos en boton - almacenando la etiqueta

promedio.addEventListener("click",()=>{
    let num1= parseFloat(document.getElementById("num1").value); /*ma trae y almacena el valor*/
    let num2= parseFloat(document.getElementById("num2").value);
    let num3= parseFloat(document.getElementById("num3").value);
    const respuesta=document.getElementById("respuesta");

    let resultado=((num1+num2+num3)/3);
    /*let resultado=((num1+num2+num3)/3).toFixed(3);   --el toFixed para que el resultado salga con el numero de decimales*/
    
    respuesta.innerHTML= "<i>" + resultado + "</i>";// inserta hasta etiquetas HTML
    /*respuesta.innerHTML= "<i>" + resultado.toFixed(3) + "</i>";   -- el to fixed para sacar el resultado con unos decimales*/
     respuesta.textContent // solo inserta cotenido string dentro de etiquetas, texto plano
})