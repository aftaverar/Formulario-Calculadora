const inputName = document.getElementById('inputName') //el .value es para solo llamar la propiedad de ese objeto
const nombreMensaje = document.getElementById('nombreMensaje')
console.log(inputName)

function validarFormulario(event) {
    event.preventDefault()//previene la ejecucion por defecto, osea no se refresca cuando se envia
    if(inputName.value== "" ){ //inputName.value es igual a vacio
        /*el .value es para solo llamar la propiedad de ese objeto*/
   inputName.classList.add('alert')
   nombreMensaje.innerText='Llena el campo del nombre por favor'//se saca la propiedad innertext porque guarda el texto de los campos
   inputName.placeholder= 'Ej.Pepito' //se le agregatexto a una propiedad de placeholder

   } 

const inputApellido = document.getElementById('inputApellido')
const apellidoMensaje = document.getElementById('apellidoMensaje')

   if(inputApellido.value== "" ){ 
   inputApellido.classList.add('alert')
   apellidoMensaje.innerText='Llena el campo del apellido por favor'
   inputApellido.placeholder= 'Ej. Perez'

   } 

const inputCorreo = document.getElementById('inputCorreo')
const correoMensaje = document.getElementById('correoMensaje')

    if(inputCorreo.value== "" ){ 
   inputCorreo.classList.add('alert')
   correoMensaje.innerText='Introduce un correo valido por favor'
   inputCorreo.placeholder= 'Debe incluir @gmail.com, @hotmail.com, @outlook.com'

   } 

const inputContraseña = document.getElementById('inputContraseña')
const contraseñaMensaje = document.getElementById('contraseñaMensaje')

    if(inputContraseña.value== "" ){ 
   inputContraseña.classList.add('alert')
   contraseñaMensaje.innerText='Introduce una contraseña valida por favor'
   inputContraseña.placeholder= 'Debe incluir letras, mayusculas y numeros'

   } 

const inputCelular = document.getElementById('inputCelular')
const celularMensaje = document.getElementById('celularMensaje')

    if(inputCelular.value== "" ){ 
   inputCelular.classList.add('alert')
   celularMensaje.innerText='Introduce un numero valido por favor'
   inputCelular.placeholder= 'Debe comenzar por +57'

   } 

  if (inputName.value !== ""){ 
    swal("OK!", "Formulario finalizado, en un momento sera redirigido", "success");
    setTimeout (()=>{//metodo que hace que la cosa se demore en ejecutarse, lleva un evento y tiempo en milisegundos
        window.location = "./calculadora/calculadora.html"
    }, 2000) 
      // window.location = "./calculadora.html" // accede al objeto window, a la propiedad location y que cambie la propiedad de la funcion
 }

}