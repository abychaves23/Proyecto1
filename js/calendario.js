document.addEventListener('DOMContentLoaded', function() {
    const currentMonthYearElement = document.getElementById('currentMonthYear');
    const calendarBody = document.getElementById('calendarBody');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    

    let currentMonth = 0; // 0 representa enero, 1 febrero, etc.
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    renderCalendar(currentMonth);
    resaltarDiasConCitasAgendadas();

    prevMonthButton.addEventListener('click', function() {
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        renderCalendar(currentMonth);
        resaltarDiasConCitasAgendadas();
    });

    nextMonthButton.addEventListener('click', function() {
        currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
        renderCalendar(currentMonth);
    });

    function renderCalendar(month) {
        const date = new Date(2024, month, 1);
        let firstDayIndex = date.getDay() - 1; // Ajuste para que la semana comience el lunes
        if (firstDayIndex === -1) {
            firstDayIndex = 6; // Si es domingo, ajustarlo a 6 para que sea el último día de la semana
        }
        const lastDay = new Date(2024, month + 1, 0).getDate();
    
        currentMonthYearElement.textContent = months[month] + ' 2024';
        calendarBody.innerHTML = '';
    
        let dateIndex = 1;
    
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');
    
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < firstDayIndex) {
                    // Celdas vacías antes del primer día del mes
                    cell.textContent = '';
                } else if (dateIndex > lastDay) {
                    // Celdas vacías después del último día del mes
                    cell.textContent = '';
                } else {
                    cell.textContent = dateIndex;
                    dateIndex++;
                }
                row.appendChild(cell);
            }
    
            calendarBody.appendChild(row);
        }
    }

    function resaltarDiasConCitasAgendadas() {
        const calendarBody = document.getElementById('calendarBody');
        
        // Obtener todas las citas agendadas del almacenamiento local
        const citas = JSON.parse(localStorage.getItem('citas')) || [];
        const fechasCitas = citas.map(cita => cita.fecha);
      
        // Iterar sobre las fechas de las citas y marcar los días correspondientes en el calendario
        fechasCitas.forEach(fecha => {
            const [year, month, day] = fecha.split('-');
            const date = new Date(year, month - 1, day);
            const dayElement = calendarBody.querySelector(`td:not(:empty):not(.celda-vacia)[data-date="${date.toISOString().slice(0, 10)}"]`);
            if (dayElement) {
                dayElement.classList.add('cita-agendada');
            }
        });
    }
    
});

