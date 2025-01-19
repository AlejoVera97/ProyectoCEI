

//Variables y Constantes
const contenedorCarrito = document.getElementById('contenedor-carrito');
const btnProcederCompra = document.getElementById('proceder-compra');
const btnVolverProductos = document.getElementById('volver-productos');
const btnCancelarCompra = document.getElementById('cancelar-compra');

 // Eventos
document.addEventListener('DOMContentLoaded', function () {
    btnProcederCompra.addEventListener('click', function () {
        window.location.href = './procesoCompra.html';
    });
    btnVolverProductos.addEventListener('click', function () {
        window.location.href = '/productos.html';
    });
    btnCancelarCompra.addEventListener('click', function () {
        localStorage.removeItem('carrito');
        contenedorCarrito.innerHTML = '<p>No hay productos en el carrito.</p>';
        document.getElementById('total-carrito').textContent = '$0.00';
        alert('El carrito ha sido vaciado.');
    });
    cargarProductosCarrito();
});


//  Funciones
function cargarProductosCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.length > 0) {
        contenedorCarrito.innerHTML = ''; 
        carrito.forEach(producto => {
            
            const productoHTML = `
            <div class="Producto-Carrito">
                <img src="${producto.imagenes[0]}" alt="${producto.nombre}" class="Producto-Imagen">
                <div class="Producto-Info">
                    <h3 class="Producto-Nombre">${producto.nombre}</h3>
                    <p class="Producto-Descripcion">${producto.descripcion}</p>
                    <div class="Producto-Precio">$${producto.precio.toFixed(2)}</div>
                    <button class="Producto-Boton-Eliminar" onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
                </div>
            </div>
            `;
            contenedorCarrito.innerHTML += productoHTML;
        });
    } else {
        contenedorCarrito.innerHTML = '<p>No tienes productos en el carrito</p>';
    }
}
function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarProductosCarrito(); 
}
