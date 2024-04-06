// Se ejecuta cuando el contenido del DOM ha sido completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Se obtiene el modal por su ID
    const modal = document.getElementById('modal');

    // Se obtiene el elemento del botón de cierre del modal por su clase
    const span = document.getElementsByClassName('close')[0];

    // Se asigna un evento de clic al botón de cierre del modal
    span.addEventListener('click', function () {
        // Cuando se hace clic en el botón de cierre, se oculta el modal
        modal.style.display = 'none';
    });
});

// Se asigna un evento de envío al formulario de búsqueda
document.getElementById('searchForm').addEventListener('submit', function (event) {
    // Se previene el comportamiento predeterminado del formulario (recargar la página)
    event.preventDefault();

    // Se obtienen el término de búsqueda y el criterio de búsqueda seleccionado por el usuario
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedOption = document.getElementById('criterioBusqueda').value;

    let resultados;

    // Se verifica si el término de búsqueda está vacío
    if (searchTerm.trim() === '') {
        // Si el término de búsqueda está vacío, se muestran todos los médicos
        resultados = medicos;
    } else {
        // Si hay un término de búsqueda, se filtran los médicos según el criterio seleccionado
        if (selectedOption === "nombre") {
            resultados = medicos.filter((medico) => medico.nombre.toLowerCase().includes(searchTerm));
        } else if (selectedOption === "especialidad") {
            resultados = medicos.filter((medico) => medico.especialidad.toLowerCase().includes(searchTerm));
        } else if (selectedOption === "ubicacion") {
            resultados = medicos.filter((medico) => medico.ubicacion.toLowerCase().includes(searchTerm));
        } else if (selectedOption === "identificacion") {
            resultados = medicos.filter((medico) => medico.identificacion.toLowerCase().includes(searchTerm));
        } else {
            // Si el criterio seleccionado no es válido, no se muestran resultados
            resultados = [];
        }
    }

    // Se establece el tamaño de página para la paginación
    const pageSize = 5;

    // Se muestran los resultados en la primera página
    mostrarResultados(resultados, 1, pageSize);
});

// Se asigna un evento de cambio al campo de selección de criterio de ordenamiento
document.getElementById('criterioOrdenamiento').addEventListener('change', function (event) {
    // Se previene el comportamiento predeterminado del evento de cambio
    event.preventDefault();
    
    // Se obtienen el término de búsqueda y el criterio de ordenamiento seleccionado por el usuario
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedOption = this.value;

    let resultados;

    // Se verifica si el término de búsqueda está vacío
    if (searchTerm.trim() === '') {
        // Si el término de búsqueda está vacío, se muestran todos los médicos
        resultados = medicos;
    } else {
        // Si hay un término de búsqueda, se filtran los médicos según el criterio seleccionado
        if (selectedOption === "nombre") {
            resultados = medicos.filter((medico) => medico.nombre.toLowerCase().includes(searchTerm));
        } else if (selectedOption === "especialidad") {
            resultados = medicos.filter((medico) => medico.especialidad.toLowerCase().includes(searchTerm));
        } else if (selectedOption === "ubicacion") {
            resultados = medicos.filter((medico) => medico.ubicacion.toLowerCase().includes(searchTerm));
        } else if (selectedOption === "identificacion") {
            resultados = medicos.filter((medico) => medico.identificacion.toLowerCase().includes(searchTerm));
        } else {
            // Si el criterio seleccionado no es válido, no se muestran resultados
            resultados = [];
        }
    }

    // Si el criterio de ordenamiento seleccionado es válido, se ordenan los resultados
    if (selectedOption === "nombre" || selectedOption === "especialidad" || selectedOption === "ubicacion" || selectedOption === "identificacion") {
        resultados.sort((a, b) => a[selectedOption].localeCompare(b[selectedOption]));
    }

    // Se establece el tamaño de página para la paginación
    const pageSize = 5;

    // Se muestran los resultados en la primera página
    mostrarResultados(resultados, 1, pageSize);
});

// Función para mostrar los resultados paginados
function mostrarResultados(resultados, pageNumber, pageSize) {
    // Se calculan los índices de inicio y fin para los resultados de la página actual
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Se obtienen los resultados de la página actual
    const paginatedResults = resultados.slice(startIndex, endIndex);

    // Se obtiene el contenedor de resultados por su ID
    const resultsContainer = document.getElementById('searchResults');

    // Se limpia el contenido del contenedor de resultados
    resultsContainer.innerHTML = '';

    // Se recorren los resultados de la página actual
    paginatedResults.forEach((medico) => {
        // Se crea un nuevo elemento de div para cada médico
        const medicoDiv = document.createElement('div');
        medicoDiv.classList.add('medico');
        medicoDiv.setAttribute('data-id', medico.id)
        medicoDiv.innerHTML = `
            <h2>${medico.nombre}</h2>
            <p>Especialidad: ${medico.especialidad}</p>
            <p>Ubicación: ${medico.ubicacion}</p>
            <p>Identificación: ${medico.identificacion}</p>
        `;

        // Se agrega el div del médico al contenedor de resultados
        resultsContainer.appendChild(medicoDiv);

        // Se agrega un evento de clic al div del médico para mostrar detalles en el modal
        medicoDiv.addEventListener('click', function () {
            const medicoId = this.getAttribute('data-id');
            const medico = medicos.find(m => m.id === medicoId);

            document.getElementById('modalNombre').innerText = medico.nombre;
            document.getElementById('modalEspecialidad').innerText = medico.especialidad;
            document.getElementById('modalUbicacion').innerText = medico.ubicacion;
            document.getElementById('modalHorario').innerText = medico.horario;
            document.getElementById('modalTelefono').innerText = medico.telefono;
            document.getElementById('modalCorreo').innerText = medico.correo;
            document.getElementById('modalBiografia').innerText = medico.biografia;

            const modalReseñas = document.getElementById('modalReseñas');
            modalReseñas.innerHTML = '<p>Reseñas:</p>';

            if (medico.reseñas && medico.reseñas.length > 0) {
                // Si hay reseñas, se muestran en el modal
                medico.reseñas.forEach((reseña) => {
                    const reseñaDiv = document.createElement('div');
                    reseñaDiv.innerHTML = `
                        <p>Comentario: ${reseña.comentario}</p>
                        <p>Calificación: ${reseña.calificacion}</p>
                    `;
                    modalReseñas.appendChild(reseñaDiv);
                });
            } else {
                // Si no hay reseñas, se muestra un mensaje indicando que no hay reseñas
                const noReseñasMessage = document.createElement('p');
                noReseñasMessage.textContent = 'No hay reseñas para este médico.';
                modalReseñas.appendChild(noReseñasMessage);
            }

            // Se muestra el modal
            modal.style.display = 'block';
        });
    });

    // Se agregan botones de paginación
    agregarBotonesPaginacion(resultados.length, pageNumber, pageSize);
}

// Función para agregar botones de paginación
function agregarBotonesPaginacion(totalResultados, pageNumber, pageSize) {
    // Se calcula el número total de páginas
    const totalPages = Math.ceil(totalResultados / pageSize);

    // Se obtiene el contenedor de paginación por su ID
    const paginationContainer = document.getElementById('paginacion');

    // Se limpia el contenido del contenedor de paginación
    paginationContainer.innerHTML = '';

    // Se recorren las páginas y se crean botones para cada una
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', function () {
            // Se llama a la función para cambiar de página cuando se hace clic en un botón de paginación
            cambiarPagina(i);
        });
        paginationContainer.appendChild(button);
    }
}

// Función para cambiar de página
function cambiarPagina(pageNumber) {
    // Se obtiene el término de búsqueda actual y el criterio de búsqueda seleccionado
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedOption = document.getElementById('criterioBusqueda').value;

    // Se establece el tamaño de página para la paginación
    const pageSize = 5;
    let resultados;

    // Se verifica si el término de búsqueda está vacío
    if (searchTerm.trim() === '') {
        // Si el término de búsqueda está vacío, se muestran todos los médicos
        resultados = medicos;
    } else {
        // Si hay un término de búsqueda, se filtran los médicos según el criterio seleccionado
        if (selectedOption === "nombre") {
            resultados = medicos.filter((medico) => medico.nombre.toLowerCase().includes(searchTerm));
        } else if (selectedOption === "especialidad") {
            resultados = medicos.filter((medico) => medico.especialidad.toLowerCase().includes(searchTerm));
        } else if (selectedOption === "ubicacion") {
            resultados = medicos.filter((medico) => medico.ubicacion.toLowerCase().includes(searchTerm));
        } else if (selectedOption === "identificacion") {
            resultados = medicos.filter((medico) => medico.identificacion.toLowerCase().includes(searchTerm));
        } else {
            // Si el criterio seleccionado no es válido, no se muestran resultados
            resultados = [];
        }
    }

    // Se muestra la página seleccionada
    mostrarResultados(resultados, pageNumber, pageSize);
}
