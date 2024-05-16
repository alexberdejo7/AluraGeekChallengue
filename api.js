// fetchProducts.js
export function fetchAndRenderProducts(endpoint, categoryName) {
    fetch(`http://localhost:3001/${endpoint}`)
        .then(response => response.json())
        .then(data => {
            renderProducts(data, categoryName);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function renderProducts(data, categoryName) {
    const categoriesSection = document.getElementById('categories-section');

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
}
