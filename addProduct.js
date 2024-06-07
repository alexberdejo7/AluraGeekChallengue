document.getElementById('formularioAgregar').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    const formData = new FormData(this); // Recolecta los datos del formulario
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('http://localhost:3001/' + data.categoria, { // Aquí ajustamos la ruta
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Artículo agregado correctamente');
            // location.reload(); // Comentado para evitar recarga de la página
        } else {
            alert('Error al agregar artículo');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al agregar artículo');
    });
});

// Función para mostrar el producto agregado en la categoría correspondiente
function mostrarProductoAgregado(producto) {
    const categorias = document.querySelectorAll('.category');

    categorias.forEach(categoria => {
        if (categoria.id === producto.categoria) {
            const productosContainer = categoria.querySelector('.products-container');

            // Crear elementos HTML para el producto
            const productoElemento = document.createElement('div');
            productoElemento.classList.add('product');

            const imagen = document.createElement('img');
            imagen.src = producto.foto;
            imagen.alt = producto.nombre;

            const nombre = document.createElement('h3');
            nombre.textContent = producto.nombre;

            const precio = document.createElement('p');
            precio.innerHTML = `<strong>Precio:</strong> $${producto.precio}`;

            // Agregar elementos al contenedor del producto
            productoElemento.appendChild(imagen);
            productoElemento.appendChild(nombre);
            productoElemento.appendChild(precio);

            // Agregar el producto al contenedor de productos
            productosContainer.appendChild(productoElemento);
        }
    });
}
