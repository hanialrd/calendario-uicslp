// Se agrega un event listener al botón de inicio de sesión
document.getElementById('loginButton').addEventListener('click', function() {
    // Obtener los valores ingresados en los campos de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verifica si las credenciales son correctas
    if (username === 'admin' && password === '1234') {
        // Si las credenciales son correctas, redirige al usuario a la página del calendario
        window.location.href = 'calendario.html'; // Cambia 'calendario.html' por el archivo que deseas redirigir
    } else {
        // Si las credenciales son incorrectas, muestra un mensaje de error
        alert('Usuario o contraseña incorrectos');
    }
});
