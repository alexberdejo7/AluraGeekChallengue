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
            location.reload(); // Recarga la página para mostrar los cambios
        } else {
            alert('Error al agregar artículo');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al agregar artículo');
    });
});
