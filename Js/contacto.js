// 1) Variables y Constantes
const formulario = document.getElementById("contacto-formulario"); // Ahora se refiere correctamente al id

// 2) Eventos
document.addEventListener("DOMContentLoaded", () => {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); 

       
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const consulta = document.getElementById("consulta").value.trim();

        // Validación de campos
        if (!nombre || !email || !telefono || !consulta) {
            mostrarMensaje("Por favor, complete todos los campos.", "error");
            return;
        }

        if (!validarEmail(email)) {
            mostrarMensaje("Por favor, ingrese un email válido.", "error");
            return;
        }

        if (!validarTelefono(telefono)) {
            mostrarMensaje("El número de teléfono debe contener solo números.", "error");
            return;
        }

        // Aquí puedes agregar el envío de datos a un servidor o alguna acción extra
        mostrarMensaje("¡Formulario enviado con éxito!", "success");
        formulario.reset(); // Limpia los campos del formulario
    });
});

// 3) Funciones

// Función para mostrar mensajes
function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.className = `mensaje ${tipo}`;
    mensajeDiv.textContent = mensaje;
    const contenedor = document.querySelector(".Formulario-Section");
    contenedor.prepend(mensajeDiv);
    setTimeout(() => mensajeDiv.remove(), 3000);
}

// Validar email con expresión regular
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validar teléfono (solo números)
function validarTelefono(telefono) {
    return /^[0-9]+$/.test(telefono);
}
