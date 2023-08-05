function saludarDesdeBoton() {
    alert("Hola!")
    event.stopPropagation();
}

function saludarDesdeDiv() {
    alert("Hola! Soy el div");
}

document.querySelector('div').addEventListener('click', saludarDesdeDiv);