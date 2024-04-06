document.addEventListener("DOMContentLoaded",()=>{

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (event) => {
        
        event.preventDefault();
        const{cedula,nombreCompleto} = obtenerDatosFormulario();
        const esValido = validarCedula(cedula) && validarNombre(nombreCompleto);
        esValido ? manejarExito():manejarError();
    });
});

const obtenerDatosFormulario = () => {

    const cedula = document.getElementById("cedula").value.trim();
    const nombre = document.getElementById("nombre").value.trim();

    return {cedula, nombre};
};

const validarCedula = (cedula) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cedula);

const validarNombre = (nombreCompleto) => /^[a-zA-Z\s]+$/.test(nombreCompleto);

const manejarExito = () => {

    alert("Consulta enviada");
    limpiarCamposTexto();
}

const manejarError = () => {

    alert("Datos no son válidos");
}

const limpiarCamposTexto = () => {

    const campos = document.querySelectorAll("#formulario input[type='email'], #formulario input[type='text']");
    campos.forEach((campo) => campo.value = '')
}
