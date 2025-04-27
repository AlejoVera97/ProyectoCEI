document.addEventListener("DOMContentLoaded", () => {
    const btnIniciarSesion = document.getElementById("btnIniciarSesion");
    const btnRegistrarse = document.getElementById("btnRegistrarse");
    const formularioIniciarSesion = document.getElementById("formularioIniciarSesion");
    const formularioRegistrarse = document.getElementById("formularioRegistrarse");

    const toggleSeleccionado = (botonActivo, botonInactivo) => {
        botonActivo.classList.add("seleccionado");
        botonInactivo.classList.remove("seleccionado");
    };

    btnIniciarSesion.addEventListener("click", () => {
        formularioIniciarSesion.classList.add("activo");
        formularioRegistrarse.classList.remove("activo");
        toggleSeleccionado(btnIniciarSesion, btnRegistrarse);
    });

    btnRegistrarse.addEventListener("click", () => {
        formularioRegistrarse.classList.add("activo");
        formularioIniciarSesion.classList.remove("activo");
        toggleSeleccionado(btnRegistrarse, btnIniciarSesion);
    });
});
