

let isDragging = false;
let startX, scrollLeft;

// Aseguramos que 'slider' esté correctamente definido antes de usarlo
const slider = document.querySelector(".hover-slider-container");

document.addEventListener("DOMContentLoaded", () => {
    showSlide(0); 
});

// Evento para arrastrar el slider
slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => isDragging = false);
slider.addEventListener("mouseup", () => isDragging = false);

slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Velocidad del desplazamiento
    slider.scrollLeft = scrollLeft - walk;
});

const dots = document.querySelectorAll(".dot");
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        console.log('showing slide', i);
        showSlide(i)
    })
})

// Función para mostrar una diapositiva específica
function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));
    slides[n].style.display = "flex";
    dots[n].classList.add("active");
}

// Función de búsqueda
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.Header-busqueda');
    const barraBusqueda = document.querySelector('.Busqueda-Barra');
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        const query = barraBusqueda.value.trim();
        if (query !== '') {
            window.location.href = `/ProyectoFinal/Html/productos.html?q=${encodeURIComponent(query)}`;
        } else {
            alert('Por favor, ingrese un término de búsqueda');
        }
    });
});
