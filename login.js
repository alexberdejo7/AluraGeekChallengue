// login.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtén los valores del correo electrónico y contraseña
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Verifica si las credenciales son válidas
        if (email === 'test@test.com' && password === '123456') {
            // Redirige al usuario a la página de inicio después del inicio de sesión exitoso
            window.location.href = 'addProduct.html';
        } else {
            // Muestra un mensaje de error si las credenciales son incorrectas
            loginError.textContent = 'Correo electrónico o contraseña incorrectos';
        }
    });
});
