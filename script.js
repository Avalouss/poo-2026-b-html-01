

const btnSaludar = document.getElementById("btn-saludar");
let mensajeMostrado = false;

console.log(btnSaludar);

btnSaludar.addEventListener("click", function(){

    console.log("click");

    if(!mensajeMostrado) {
    const seccionContacto = document.getElementById("contacto");

   const mensajes = document.createElement("p");
   mensajes.textContent = " Gracias por tu visita ";
   mensajes.style.color = "#27ae60";
   mensajes.style.fontWeight = "bold";

seccionContacto.appendChild(mensajes);
mensajeMostrado = true;
btnSaludar.textContent = "Mensaje Enviado";
btnSaludar.disabled = true;
btnSaludar.style.backgroundColor = "#bdc3c7";

   }


} )