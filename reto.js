let palabra = document.getElementById('palabra');
let letrasPalabra = document.getElementById('ultimasLetras');
let boton = document.getElementById('boton');
let resultado;

boton.addEventListener('click', function() {
    if (palabra.value == "" || letrasPalabra.value == "") {
        alert("Por favor llene los campos");
        return;
    }
    resultado = confirmEnding(palabra.value, letrasPalabra.value);
    if (resultado == true) {
        alert("Los datos coinciden");
    } else {
        alert("Los datos no coinciden");
    }
    limpiar();
});

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

function limpiar() {
    palabra.value = "";
    letrasPalabra.value = "";
}