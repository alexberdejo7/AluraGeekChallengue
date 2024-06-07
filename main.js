import { fetchAndRenderProducts } from './api.js';

document.addEventListener('DOMContentLoaded', function() {
    fetchAndRenderProducts('diversos', 'Decoracion');
    fetchAndRenderProducts('consolas', 'Varios');
    fetchAndRenderProducts('playeras', 'Playeras');
});

//eliminar productos
document.getElementById('limpiarProductos').addEventListener('click', function() {
    limpiarProductos();
});
function limpiarProductos() {
    fetch('http://localhost:3001/limpiarProductos', {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Productos eliminados correctamente');
            location.reload(); // Recarga la página para mostrar los cambios
        } else {
            alert('Error al eliminar productos');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al eliminar productos');
    });
}




// Resto del código para el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || message === '') {
            displayMessage('Por favor, complete todos los campos.', 'red');
        } else {
            // Aquí puedes agregar el código para enviar el formulario
            console.log('Nombre:', name);
            console.log('Mensaje:', message);
            displayMessage('Mensaje enviado correctamente.', 'green');
            form.reset();
        }
    });

    function displayMessage(message, color) {
        formMessages.textContent = message;
        formMessages.style.color = color;
    }
});
