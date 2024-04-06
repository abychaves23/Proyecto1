const medicos = [
    {
        id: "1",
        nombre: 'Juan Gabriel Pérez Espinoza',
        especialidad: 'Pediatría',
        ubicacion: 'Heredia, San Rafael',
        identificacion: 'MP12345',
        horario: "Lunes, Martes y Viernes de 8am a 3pm",
        telefono: "2520-8520",
        correo: "jperez@gmail.com",
        biografia: "Graduación en 2019 en la UCR",
        reseñas: [
            { comentario: "Muy buen médico, muy amable y atento.", calificacion: 5 },
            { comentario: "Excelente atención, lo recomiendo totalmente.", calificacion: 4 },
            { comentario: "Buen profesional, pero la espera fue un poco larga.", calificacion: 3 },
            { comentario: "Regular, esperaba más del servicio.", calificacion: 2 },
            { comentario: "Mala experiencia, no volvería.", calificacion: 1 }
        ]
    },
    {
        id: "2",
        nombre: 'Diana María Gómez Alvarado',
        especialidad: 'Cardiología',
        ubicacion: 'Cartago, El Carmen',
        identificacion: 'MG67890',
        horario: "De Lunes a Viernes de 1pm a 6pm",
        telefono: "2695-7410",
        correo: "dgomez@gmail.com",
        biografia: "Graduación en 2019 en la UCR",
        reseñas: [
            { comentario: "Excelente médica, muy paciente con los niños.", calificacion: 5 },
            { comentario: "Muy recomendada, resolvió todas nuestras dudas.", calificacion: 4 },
            { comentario: "Buena atención, pero un poco apresurada.", calificacion: 3 },
            { comentario: "Regular, no nos convenció del todo.", calificacion: 2 },
            { comentario: "Mala experiencia, no volveremos.", calificacion: 1 }
        ]
    },
    {
        id: "3",
        nombre: 'Roberto Soto Castro',
        especialidad: 'Psicología',
        ubicacion: 'San José, Montes de Oca',
        identificacion: 'RS54321',
        horario: "De Lunes a Viernes de 9am a 5pm",
        telefono: "2255-9988",
        correo: "rsoto@gmail.com",
        biografia: "Graduación en 2018 en la UNA",
        reseñas: [
            { comentario: "Excelente médico, muy atento y profesional.", calificacion: 5 },
            { comentario: "Muy recomendado, solucionó mi problema de salud.", calificacion: 4 },
            { comentario: "Buena atención, aunque un poco tardado.", calificacion: 3 },
            { comentario: "Regular, esperaba más explicaciones sobre mi diagnóstico.", calificacion: 2 },
            { comentario: "Mala experiencia, no volveré a este consultorio.", calificacion: 1 }
        ]
    },
    {
        id: "4",
        nombre: 'María Fernanda Sánchez Chaves',
        especialidad: 'Dermatología',
        ubicacion: 'San José, Curridabat',
        identificacion: 'MF78564',
        horario: "De Lunes a Sábado de 10am a 7pm",
        telefono: "2777-3322",
        correo: "mfsanchez@gmail.com",
        biografia: "Graduación en 2017 en la UCR",
        reseñas: [
            { comentario: "Muy profesional y amable, me sentí muy cómoda.", calificacion: 5 },
            { comentario: "Excelente doctora, me ayudó mucho con mi problema.", calificacion: 4 },
            { comentario: "Buena atención, aunque la espera fue larga.", calificacion: 3 },
            { comentario: "Regular, esperaba un trato más personalizado.", calificacion: 2 },
            { comentario: "Mala experiencia, no me sentí escuchada.", calificacion: 1 }
        ]
    },
    {
        id: "5",
        nombre: 'Carlos Alberto Rodríguez Morales',
        especialidad: 'Cardiología',
        ubicacion: 'Heredia, Barva',
        identificacion: 'CR94521',
        horario: "De Lunes a Viernes de 8am a 4pm",
        telefono: "2288-5544",
        correo: "carlosrodriguez@gmail.com",
        biografia: "Graduación en 2016 en la UNA",
        reseñas: [
            { comentario: "Muy buen cardiólogo, explicó todo muy claro.", calificacion: 5 },
            { comentario: "Excelente atención, muy profesional.", calificacion: 4 },
            { comentario: "Buena consulta, pero la espera fue un poco larga.", calificacion: 3 },
            { comentario: "Regular, no resolvió todas mis dudas.", calificacion: 2 },
            { comentario: "Mala experiencia, no volveré a este consultorio.", calificacion: 1 }
        ]
    },
    {
        id: "6",
        nombre: 'Ana María Jiménez Solano',
        especialidad: 'Dermatología',
        ubicacion: 'San José, Escazú',
        identificacion: 'AJ78596',
        horario: "De Lunes a Viernes de 9am a 6pm",
        telefono: "2789-6677",
        correo: "anajimenez@gmail.com",
        biografia: "Graduación en 2015 en la UCR",
        reseñas: [
            { comentario: "Excelente dermatóloga, muy amable y profesional.", calificacion: 5 },
            { comentario: "Muy recomendada, resolvió mi problema de piel.", calificacion: 4 },
            { comentario: "Buena atención, pero la espera fue larga.", calificacion: 3 },
            { comentario: "Regular, esperaba un mejor resultado con el tratamiento.", calificacion: 2 },
            { comentario: "Mala experiencia, mi problema empeoró después de la consulta.", calificacion: 1 }
        ]
    },
    {
        id: "7",
        nombre: 'Andrés Solís Ramírez',
        especialidad: 'Psicología',
        ubicacion: 'Alajuela, San Rafael',
        identificacion: 'AS33698',
        horario: "De Lunes a Viernes de 10am a 7pm",
        telefono: "2444-8899",
        correo: "andressolis@gmail.com",
        biografia: "Graduación en 2014 en la UCR",
        reseñas: [
            { comentario: "Muy buen odontólogo, me explicó todo muy bien.", calificacion: 5 },
            { comentario: "Excelente atención, muy profesional.", calificacion: 4 },
            { comentario: "Buena consulta, pero la espera fue larga.", calificacion: 3 },
            { comentario: "Regular, esperaba un trato más amable.", calificacion: 2 },
            { comentario: "Mala experiencia, no volveré a este consultorio.", calificacion: 1 }
        ]
    },
    {
        id: "8",
        nombre: 'Laura Chaves Rojas',
        especialidad: 'Dermatología',
        ubicacion: 'Heredia, Santo Domingo',
        identificacion: 'LC55842',
        horario: "De Lunes a Viernes de 8am a 5pm",
        telefono: "2833-4455",
        correo: "laurachaves@gmail.com",
        biografia: "Graduación en 2013 en la UNA",
        reseñas: [
            { comentario: "Excelente nutricionista, me ayudó a mejorar mi salud.", calificacion: 5 },
            { comentario: "Muy recomendada, sus consejos fueron muy útiles.", calificacion: 4 },
            { comentario: "Buena consulta, pero la espera fue larga.", calificacion: 3 },
            { comentario: "Regular, esperaba más seguimiento después de la consulta.", calificacion: 2 },
            { comentario: "Mala experiencia, no sentí que me escuchara.", calificacion: 1 }
        ]
    },
    {
        id: "9",
        nombre: 'Mario Campos Solís',
        especialidad: 'Psicología',
        ubicacion: 'San José, San Pedro',
        identificacion: 'MC45236',
        horario: "De Lunes a Viernes de 9am a 6pm",
        telefono: "2666-7788",
        correo: "mariocampos@gmail.com",
        biografia: "Graduación en 2012 en la UCR",
        reseñas: [
            { comentario: "Muy buen oftalmólogo, resolvió todas mis dudas.", calificacion: 5 },
            { comentario: "Excelente atención, muy profesional.", calificacion: 4 },
            { comentario: "Buena consulta, pero la espera fue larga.", calificacion: 3 },
            { comentario: "Regular, esperaba más empatía.", calificacion: 2 },
            { comentario: "Mala experiencia, no volveré a este consultorio.", calificacion: 1 }
        ]
    },
    {
        id: "10",
        nombre: 'Carolina Ramírez Chacón',
        especialidad: 'Nutrición',
        ubicacion: 'San José, La Uruca',
        identificacion: 'CR78423',
        horario: "De Lunes a Viernes de 10am a 6pm",
        telefono: "2799-5544",
        correo: "carolinaramirez@gmail.com",
        biografia: "Graduación en 2011 en la UCR",
        reseñas: [
            { comentario: "Excelente psiquiatra, muy empática y profesional.", calificacion: 5 },
            { comentario: "Muy recomendada, me ayudó mucho con mi problema.", calificacion: 4 },
            { comentario: "Buena consulta, pero la espera fue larga.", calificacion: 3 },
            { comentario: "Regular, esperaba un mejor seguimiento.", calificacion: 2 },
            { comentario: "Mala experiencia, no volveré a este consultorio.", calificacion: 1 }
        ]
    }
];

const horarioMedicos = [
    {
        id: "1",
        horario: [
            { dia: "1", inicio: "08:00", fin: "16:00" }, 
            { dia: "2", inicio: "08:00", fin: "16:00" }, 
            { dia: "3", inicio: "08:00", fin: "16:00" }, 
            { dia: "4", inicio: "08:00", fin: "16:00" }
        ]
    },
    {
        id: "2",
        horario: [
            { dia: "1", inicio: "08:00", fin: "15:00" }, 
            { dia: "2", inicio: "09:00", fin: "15:00" }, 
            { dia: "4", inicio: "09:00", fin: "15:00" }, 
            { dia: "5", inicio: "08:00", fin: "15:00" } 
        ]
    },
    {
        id: "3",
        horario: [
            { dia: "1", inicio: "08:00", fin: "16:00" }, 
            { dia: "2", inicio: "08:00", fin: "16:00" }, 
            { dia: "6", inicio: "08:00", fin: "16:00" } 
        ]
    },
    {
        id: "4",
        horario: [
            { dia: "1", inicio: "08:00", fin: "17:00" }, 
            { dia: "2", inicio: "08:00", fin: "17:00" }, 
            { dia: "4", inicio: "08:00", fin: "17:00" } 
        ]
    },
    {
        id: "5",
        horario: [
            { dia: "2", inicio: "08:00", fin: "17:00" }, 
            { dia: "3", inicio: "08:00", fin: "17:00" }, 
            { dia: "5", inicio: "08:00", fin: "17:00" }
        ]
    },
    {
        id: "6",
        horario: [
            { dia: "1", inicio: "08:00", fin: "16:00" }, 
            { dia: "2", inicio: "08:00", fin: "16:00" },
            { dia: "4", inicio: "08:00", fin: "16:00" }
        ]
    },
    {
        id: "7",
        horario: [
            { dia: "1", inicio: "07:00", fin: "16:00" }, 
            { dia: "3", inicio: "07:00", fin: "16:00" }, 
            { dia: "4", inicio: "07:00", fin: "16:00" }, 
        ]
    },
    {
        id: "8",
        horario: [
            { dia: "1", inicio: "08:00", fin: "16:00" }, 
            { dia: "2", inicio: "08:00", fin: "16:00" }, 
            { dia: "0", inicio: "13:00 p.m", fin: "16:00" }, 
        ]
    },
    {
        id: "9",
        horario: [
            { dia: "1", inicio: "13:00", fin: "19:00" }, 
            { dia: "2", inicio: "13:00", fin: "19:00" }, 
            { dia: "4", inicio: "13:00", fin: "19:00 " }, 
        ]
    },
    {
        id: "10",
        horario: [
            { dia: "1", inicio: "08:00", fin: "16:00" }, 
            { dia: "2", inicio: "08:00", fin: "16:00" }, 
            { dia: "3", inicio: "08:00", fin: "16:00" }, 
            { dia: "6", inicio: "08:00", fin: "16:00" }, 
        ]
    }
];

localStorage.setItem('Medicos', JSON.stringify(medicos));
localStorage.setItem('horarioMedicos', JSON.stringify(horarioMedicos));