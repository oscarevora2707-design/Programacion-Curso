boton.addEventListener("click", function() {

    
const emailInput = document.getElementById("txt-email").value
const passwordInput = document.getElementById("txt-password").value
const nameInput = document.getElementById("txt-name").value
const confirmPasswordInput = document.getElementById("txt-confirm-password").value
event.preventDefault();

    if (!emailInput.includes("@")) {
    nameInput.value=""
    emailInput.value=""
    passwordInput.value=""
    confirmPasswordInput.value=""
    alert("El correo electrónico no es válido")

}
    
    if (emailInput.value === "" || passwordInput.value === "") {
        alert("Por favor, completa ambos campos.")
    }

const error = document.getElementById("error")
   if (emailInput.value === "admin@correo.com" && passwordInput.value === "admin123") {
    alert("Inicio de sesión exitoso")
    error.textContent = ""
    intentos = 0
   } else {
   error.textContent = "Usuario o contraseña incorrectos" 
    intentos++; 
   }

   if (intentos >= 3) {
    alert("Has superado el número de intentos permitidos. Por favor, inténtalo más tarde.")
   } 

if (passwordInput.value.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres")
    return;
}

if (passwordInput.value !== document.getElementById("txt-confirm-password").value) {
    alert("Las contraseñas no coinciden")
    return;
}

    console.log("Botón clickeado")
    event.preventDefault()
    console.log("Email:", emailInput.value)
    console.log ("Password:", passwordInput.value)
})

console.log("Login script loaded");

const nombre = "Juan";
console.log(
    "Hola " + nombre + ", bienvenido a tu sesión de inicio de sesión."
);

let intentos = 0

let activo = true
console.log(activo) 

function saludar (nombre) {
console.log("Hola " + nombre)    
}

saludar(nombre)

if (intentos <3) {
    console.log("Puedes intentar")
} else {
    console.log("Bloqueado")    
}

const titulo = document.getElementById("titulo")
console.log(titulo)


if (intentos > 3) {
    console.log("Credenciales Correctas")
} else {
    console.log("Credenciales Incorrectas")
}



boton.style.cursor  = "pointer";

boton.addEventListener("mouseover", function() {
    boton.style.backgroundColor = "red";
});

boton.addEventListener("mouseout", function() {
    boton.style.backgroundColor = "#007bff";
});


console.log("Email:", emailInput.value)
console.log ("Password:", passwordInput.value)

