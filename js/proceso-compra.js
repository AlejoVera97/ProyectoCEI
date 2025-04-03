// 1) Variables y Constantes
const formularioCompra = document.getElementById("formulario-compra");

// 2) Eventos
formularioCompra.addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    const codigoPostal = document.getElementById("codigo-postal").value;
    const tarjeta = document.getElementById("tarjeta").value;
    const fechaExpiracion = document.getElementById("fecha-expiracion").value;
    const codigoSeguridad = document.getElementById("codigo-seguridad").value;
    const metodoPago = document.getElementById("metodo-pago").value;

    // Validación simple de campos
    if (!validarCampos(
        nombre, email, telefono, direccion, ciudad, 
        codigoPostal, tarjeta, fechaExpiracion, codigoSeguridad, metodoPago
    )) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Mostrar mensaje de éxito
    mostrarResumenPedido(
        nombre, email, telefono, direccion, ciudad, 
        codigoPostal, metodoPago, tarjeta
    );
    alert("¡Gracias por tu compra! Tu pedido ha sido procesado con éxito.");
});

// 3) Funciones
// Validar que todos los campos estén completos
function validarCampos(
    nombre, email, telefono, direccion, ciudad, 
    codigoPostal, tarjeta, fechaExpiracion, codigoSeguridad, metodoPago
) {
    return (
        nombre && email && telefono && direccion && ciudad &&
        codigoPostal && tarjeta && fechaExpiracion && codigoSeguridad && metodoPago
    );
}

// Mostrar el resumen del pedido
function mostrarResumenPedido(
    nombre, email, telefono, direccion, ciudad, 
    codigoPostal, metodoPago, tarjeta
) {
    const resumenPedido = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo electrónico:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Dirección de envío:</strong> ${direccion}</p>
        <p><strong>Ciudad:</strong> ${ciudad}</p>
        <p><strong>Código Postal:</strong> ${codigoPostal}</p>
        <p><strong>Método de pago:</strong> ${metodoPago}</p>
        <p><strong>Tarjeta (últimos 4 dígitos):</strong> ${tarjeta.slice(-4)}</p>
    `;
    document.getElementById("resumen-pedido").innerHTML = resumenPedido;
}
