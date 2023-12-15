let metros = document.getElementById('mts-2');
let precio = 0;
let operacion = 0;
let resultado = document.getElementById('resultado');
let btnCalcular = document.getElementById('calcular');

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

const fetchData = async () => {
    try {
        const res = await fetch('calcular.json');
        const data = await res.json();
        precio = data[0].precio;
        console.log(`Precio cargado: ${precio}`);
    } catch (error) {
        console.log(error);
    }
};

btnCalcular.addEventListener('click', () => {
    operacion = metros.value * precio;
    resultado.textContent = operacion;

    // Crear el span con el mensaje
    const mensajeSpan = document.createElement('span');
    mensajeSpan.textContent = 'Para más detalles, comunícate por WhatsApp o el formulario.';
    mensajeSpan.className = 'mensaje-contacto';

    // Agregar el span al DOM 
    resultado.parentNode.appendChild(mensajeSpan);
});