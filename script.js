

const btnSaludar = document.getElementById("btn-saludar");
let mensajeMostrado = false;

console.log(btnSaludar);

btnSaludar.addEventListener("click", function(){

    if(mensajeMostrado) {
    const seccionContacto = document.getElementById("contacto");

   const mensajes = document.createElement("p");
   mensajes.textContent = " Gracias por tu visita ";
   mensajes.style.color = "#27ae60";
   mensajes.style.fontWeight = "bold";

   }

   
} )