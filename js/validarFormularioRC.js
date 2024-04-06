document.addEventListener("DOMContentLoaded",()=>{

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (event) => {
        
        event.preventDefault();
        const{cedula,correo} = obtenerDatosFormulario();
        const esValido = validarUsuario(cedula,correo);
        esValido ? manejarExito() : manejarError();
    });
});

const obtenerDatosFormulario = () => {

    const cedula = document.getElementById("cedula").value.trim();
    const correo = document.getElementById("correo").value.trim();

    return {cedula, correo};
};


function validarUsuario(cedula,correo) {

    const personasGuardadas = JSON.parse(localStorage.getItem('personas'));

    const personaEncontrada = personasGuardadas.find(persona => persona.cedula === cedula);

    if (personaEncontrada && personaEncontrada.corre === correo) {
        return true;
    } else {
        return false;
    }
}

const manejarExito = () => {

    alert('¡Enlace enviado a su correo para reestablecer su contraseña!');
    limpiarCamposTexto();   
}

const manejarError = () => {

    alert('¡Usuario o Contraseña incorrecta!');
}

const limpiarCamposTexto = () => {

    const campos = document.querySelectorAll("#formulario input[type='text'], #formulario input[type='email']");
    campos.forEach((campo) => campo.value = '')
}
