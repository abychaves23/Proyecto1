document.addEventListener("DOMContentLoaded", () => {

    const formularioRegistro = document.getElementById("formulario");

    formularioRegistro.addEventListener("submit", (event) => {

        event.preventDefault();
        const { cedula, nombre, apellidos, celular, correo, contrasenia, confirmarContrasenia } = obtenerDatosFormularioRegistro();
        const esValido = validarCedula(cedula) && validarNombre(nombre) && validarApellidos(apellidos) && validarCelular(celular) && validarContrasenia(contrasenia) && validarCorreo(correo) && validarConfirmarContrasenia(contrasenia, confirmarContrasenia) && validarCedulaExistente(cedula);
        esValido ? manejarExito(cedula,nombre,apellidos,celular,correo,contrasenia) : manejarError();
    });
});

const personas = [
    { cedula: '03-0522-0108', nombre: 'Liseth Abigail', apellidos: 'Chaves Bejarano', celular: '6033-9007', correo: 'lchaves@gmail.com', contrasenia: '12345678Cas@' },
    { cedula: '03-0539-0235', nombre: 'Juan Alberto', apellidos: 'Perez Mora', celular: '8956-5421', correo: 'jperez@gmail.com', contrasenia: '1Casamuylind@2' }
];

localStorage.setItem('personas', JSON.stringify(personas));

const obtenerDatosFormularioRegistro = () => {

    const cedula = document.getElementById("cedula").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contrasenia = document.getElementById("contrasenia").value.trim();
    const confirmarContrasenia = document.getElementById("confirmarContrasenia").value.trim();

    return { cedula, nombre, apellidos, celular, correo, contrasenia, confirmarContrasenia };
};

const validarCedula = (cedula) => /^\d{2}-\d{4}-\d{4}$/.test(cedula);

const validarNombre = (nombre) => /^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]{1,20}$/.test(nombre);

const validarApellidos = (apellidos) => /^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]{1,30}$/.test(apellidos);

const validarCelular = (celular) => /^\d{4}-\d{4}$/.test(celular);

const validarContrasenia = (contrasenia) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!%$&@])[A-Za-z\d!%$&@]{1,11}$/.test(contrasenia);

const validarCorreo = (correo) => /^[a-zA-Z0-9]{1,11}@[a-zA-Z0-9]{1,6}\.[a-zA-Z0-9]{1,3}$/.test(correo);

const validarConfirmarContrasenia = (contrasenia, confirmarContrasenia) => {
    return contrasenia === confirmarContrasenia;
};

function validarCedulaExistente(cedula) {

    const personasGuardadas = JSON.parse(localStorage.getItem('personas'));

    const cedulaExistente = personasGuardadas.some(persona => persona.cedula === cedula);

    return !cedulaExistente;
}

const manejarExito = (cedula,nombre,apellidos,celular,correo,contrasenia) => {

    alert("Registro exitoso");
    limpiarCamposTexto();

    var personasJSON = localStorage.getItem('personas');
    var personasRecuperadas = JSON.parse(personasJSON);

    var nuevaPersona = {
        cedula: cedula,
        nombre: nombre,
        apellidos: apellidos,
        celular: celular,
        correo: correo,
        contrasenia: contrasenia
    };

    personasRecuperadas.push(nuevaPersona);
    localStorage.setItem('personas', JSON.stringify(personasRecuperadas));

    var keys = Object.keys(localStorage);

    keys.forEach(function (key) {
        var value = localStorage.getItem(key);
    });
}

const manejarError = () => {

    alert("Datos no son válidos");
}

const limpiarCamposTexto = () => {

    const campos = document.querySelectorAll("#formulario input[type='text'], #formulario input[type='text'], #formulario input[type='text'], #formulario input[type='text'], #formulario input[type='email'], #formulario input[type='password'], #formulario input[type='text']");
    campos.forEach((campo) => campo.value = '')
}

