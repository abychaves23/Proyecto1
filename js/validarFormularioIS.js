document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();
        const { cedula, contrasenia } = obtenerDatosFormulario();
        const esValido = validarUsuario(cedula, contrasenia);
        esValido ? manejarExito() : manejarError();

        if (localStorage.getItem('intentosEnvioFormulario')) {
            const intentos = parseInt(localStorage.getItem('intentosEnvioFormulario'));
            const ultimoIntento = localStorage.getItem('ultimoIntentoEnvioFormulario');

            if (intentos >= 3) {
                const cincoMinutos = 5 * 60 * 1000; 
                const tiempoTranscurrido = Date.now() - parseInt(ultimoIntento);

               
                if (tiempoTranscurrido >= cincoMinutos) {
                    localStorage.setItem('intentosEnvioFormulario', 0); 
                    localStorage.setItem('ultimoIntentoEnvioFormulario', Date.now()); 
                } else {
                    event.preventDefault();
                    const tiempoRestante = Math.ceil((cincoMinutos - tiempoTranscurrido) / 1000 / 60); 
                    alert(`Debes esperar ${tiempoRestante} minutos antes de intentar enviar el formulario nuevamente.`);
                    return;
                }
            }
        }

        let intentos = localStorage.getItem('intentosEnvioFormulario') ? parseInt(localStorage.getItem('intentosEnvioFormulario')) : 0;
        localStorage.setItem('intentosEnvioFormulario', intentos + 1);
        localStorage.setItem('ultimoIntentoEnvioFormulario', Date.now());
    });
});

const obtenerDatosFormulario = () => {

    const cedula = document.getElementById("cedula").value.trim();
    const contrasenia = document.getElementById("contrasenia").value.trim();

    return { cedula, contrasenia };
};


function validarUsuario(cedula, contrasenia) {

    const personasGuardadas = JSON.parse(localStorage.getItem('personas'));

    const personaEncontrada = personasGuardadas.find(persona => persona.cedula === cedula);

    if (personaEncontrada && personaEncontrada.contrasenia === contrasenia) {
        return true;
    } else {
        return false;
    }
}

const manejarExito = () => {

    alert('¡Sesión iniciada!');
    limpiarCamposTexto();
}

const manejarError = () => {

    alert('¡Usuario o Contraseña incorrecta!');
}

const limpiarCamposTexto = () => {

    const campos = document.querySelectorAll("#formulario input[type='text'], #formulario input[type='password']");
    campos.forEach((campo) => campo.value = '')
}
