document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const selectEspecialidad = document.getElementById('especialidad');
    const selectMedico = document.getElementById('medico');
    const citasAgregadas = new Set(); // Mantener un conjunto de IDs de citas ya agregadas

    // Función para agregar una nueva cita al localStorage
    function agregarCitaALocalStorage(cita) {
        let citas = JSON.parse(localStorage.getItem('citas')) || [];
        const citaExistente = citas.find(c => c.fecha === cita.fecha && c.hora === cita.hora);
        if (citaExistente) {
            alert('Ya existe una cita agendada para esta fecha y hora.');
            return;
        }
        citas.push(cita);
        localStorage.setItem('citas', JSON.stringify(citas));
    }

    // Función para mostrar todas las citas del localStorage en el div
    function mostrarCitasEnDiv() {
        const divCitas = document.getElementById('citasAgendadas');

        const citas = JSON.parse(localStorage.getItem('citas')) || [];
        citas.forEach(cita => {
            // Verificar si la cita ya fue agregada al div
            if (!citasAgregadas.has(cita.id)) {
                const citaElement = document.createElement('p');
                citaElement.textContent = `Fecha: ${cita.fecha}, Hora: ${cita.hora}, Médico: ${cita.medico}, Especialidad: ${cita.especialidad}`;
                divCitas.appendChild(citaElement);
                
                // Agregar el ID de la cita al conjunto de citas agregadas
                citasAgregadas.add(cita.id);
            }
        });
    }

    // Cargar médicos cuando se seleccione una especialidad
    selectEspecialidad.addEventListener('change', function () {
        const especialidadSeleccionada = selectEspecialidad.value;
        const medicos = JSON.parse(localStorage.getItem('medicos'));

        // Limpiar las opciones del select de médicos
        selectMedico.innerHTML = '';

        // Filtrar los médicos según la especialidad seleccionada
        const medicosFiltrados = medicos.filter(function (medico) {
            return medico.especialidad === especialidadSeleccionada;
        });

        // Llenar el select de médicos con las opciones filtradas
        medicosFiltrados.forEach(function (medico) {
            const option = document.createElement('option');
            option.value = medico.id;
            option.textContent = medico.nombre;
            selectMedico.appendChild(option);
        });
    });

    // Manejar el envío del formulario
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        const fechaSeleccionada = document.getElementById('fecha').value;
        const horaSeleccionada = document.getElementById('hora').value;
        const especialidadSeleccionada = document.getElementById('especialidad').value;
        const nombreMedicoSeleccionado = selectMedico.options[selectMedico.selectedIndex].text;

        const idMedicoSeleccionado = obtenerIdMedicoPorNombre(nombreMedicoSeleccionado);

        const disponible = validarCita(idMedicoSeleccionado, fechaSeleccionada, horaSeleccionada);

        // Si la cita está disponible, se agrega al localStorage y se muestra en el div
        if (disponible) {
            const cita = {
                id: Date.now(), // Generar un ID único para la cita
                fecha: fechaSeleccionada,
                hora: horaSeleccionada,
                medico: nombreMedicoSeleccionado,
                especialidad: especialidadSeleccionada
            };
            agregarCitaALocalStorage(cita);
            mostrarCitasEnDiv();
        }
    });

    // Función para obtener el ID del médico por su nombre
    function obtenerIdMedicoPorNombre(nombreMedico) {
        const medicos = JSON.parse(localStorage.getItem('medicos'));
        const medicoEncontrado = medicos.find(medico => medico.nombre === nombreMedico);
        return medicoEncontrado ? medicoEncontrado.id : null;
    }

    function validarCita(idMedico, fecha, hora) {
        // Obtener el horario del médico del localStorage
        const horarioMedicos = JSON.parse(localStorage.getItem('horarioMedicos'));
        const medico = horarioMedicos.find(medico => medico.id === idMedico);

        // Formatear la fecha
        const partesFecha = fecha.split("/");
        const fechaFormateada = `${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}`;

        const fechaDate = new Date(fechaFormateada);

        // Obtener el día de la semana (0 para Domingo, 1 para Lunes, ..., 6 para Sábado)
        const diaSemana = fechaDate.getDay();

        // Verificar si el médico trabaja en el día de la semana especificado
        const horarioDia = horarioMedicos[idMedico - 1].horario.find(horario => horario.dia === diaSemana.toString());

        console.log(horarioDia);

        if (!horarioDia) {
            alert("El médico no trabaja este día, favor verificar los horarios.");
            return false; // El médico no trabaja en el día especificado
        }

        const horaInicio = parsearHora(horarioDia.inicio);
        const horaFin = parsearHora(horarioDia.fin);

        // Función para convertir la hora en formato HH:mm a un objeto Date
        function parsearHora(horaString) {
            const [hora, minutos] = horaString.split(":");
            return new Date(2000, 0, 1, parseInt(hora), parseInt(minutos));
        }

        // Convertir la hora seleccionada a un objeto Date
        const horaSeleccionadaDate = new Date(`2000-01-01T${hora}`);

        // Verificar si la hora seleccionada está dentro del rango de atención del médico
        if (horaSeleccionadaDate >= horaInicio && horaSeleccionadaDate <= horaFin) {
            alert("Cita Agendada");
            return true;
        } else {
            alert("El médico no trabaja a esa hora indicada, favor verificar los horarios.");
            return false;
        }
    }
});

