document.addEventListener('DOMContentLoaded', function() {
    const categoriesSection = document.getElementById('categories-section');

    // Función para hacer una solicitud fetch a un endpoint y renderizar los productos
    function fetchAndRenderProducts(endpoint, categoryName) {
        fetch(`http://localhost:3000/${endpoint}`)
            .then(response => response.json())
            .then(data => {
                // Crea un contenedor para la categoría
                const categoryContainer = document.createElement('div');
                categoryContainer.classList.add('category');

                // Agrega el nombre de la categoría
                const categoryNameElement = document.createElement('h2');
                categoryNameElement.textContent = categoryName;
                categoryContainer.appendChild(categoryNameElement);

                // Crea un contenedor para los productos de la categoría
                const productsContainer = document.createElement('div');
                productsContainer.classList.add('products-container');
                
                // Itera sobre cada producto en la categoría
                data.forEach(producto => {
                    // Crea un elemento para cada producto
                    const productoElemento = document.createElement('div');
                    productoElemento.classList.add('product');

                    const imagen = document.createElement('img');
                    imagen.src = producto.foto;
                    imagen.alt = producto.nombre;

                    const nombre = document.createElement('h3');
                    nombre.textContent = producto.nombre;

                    const precio = document.createElement('p');
                    precio.textContent = `Precio: $${producto.precio}`;

                    const productoInfo = document.createElement('div');
                    productoInfo.classList.add('product-info');
                    productoInfo.appendChild(nombre);
                    productoInfo.appendChild(precio);

                    productoElemento.appendChild(imagen);
                    productoElemento.appendChild(productoInfo);

                    // Agrega el producto al contenedor de productos
                    productsContainer.appendChild(productoElemento);
                });

                // Agrega el contenedor de productos al contenedor de categoría
                categoryContainer.appendChild(productsContainer);

                // Agrega el contenedor de categoría al contenedor principal
                categoriesSection.appendChild(categoryContainer);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Llama a la función para obtener y renderizar los productos de cada categoría
    fetchAndRenderProducts('diversos', 'Diversos');
    fetchAndRenderProducts('consolas', 'Consolas');
    fetchAndRenderProducts('playeras', 'Playeras');
});







// Formulario y CONTACTO
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

