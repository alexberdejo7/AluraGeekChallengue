fetch('https://alexberdejo7.github.io/AluraGeekChallengue/db.json')
  .then(response => response.json())
  .then(data => {
    // Suponiendo que data es un objeto con categorías como propiedades
    Object.keys(data).forEach(categoria => {
      renderProducts(data[categoria], categoria);
    });
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al obtener los productos');
  });

  

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
        productoElemento.classList.add('card');

        // Crea un div para el cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Crea un elemento de imagen
        const imagen = document.createElement('img');
        imagen.src = producto.foto;
        imagen.alt = producto.nombre;
        imagen.classList.add('card-img-top');

        // Crea un elemento HTML para el nombre
        const nombre = document.createElement('h5');
        nombre.textContent = producto.nombre;
        nombre.classList.add('card-title');

        // Crea un elemento HTML para el precio
        const precio = document.createElement('p');
        precio.textContent = `Precio: $${producto.precio}`;
        precio.classList.add('card-text');

        // Agrega la imagen al cuerpo de la tarjeta
        cardBody.appendChild(imagen);

        // Agrega el nombre y el precio al cuerpo de la tarjeta
        cardBody.appendChild(nombre);
        cardBody.appendChild(precio);

        // Agrega el cuerpo de la tarjeta al elemento del producto
        productoElemento.appendChild(cardBody);

        // Agrega el producto al contenedor de productos
        productsContainer.appendChild(productoElemento);
    });

    // Agrega el contenedor de productos al contenedor de categoría
    categoryContainer.appendChild(productsContainer);

    // Agrega el contenedor de categoría al contenedor principal
    categoriesSection.appendChild(categoryContainer);
}
