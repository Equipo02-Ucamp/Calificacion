//Variables
let calificaciones = [];

//Funciones
function obtenerCalificaciones() {
    for (let i = 0; i < 5; i++) {
        do {
            alert('Solo numeros');
            calificaciones[i] = Number(prompt('Digite la calificacion:'));
        } while (isNaN(calificaciones[i]));
    }
}

function promedio() {
    let total = 0;
    calificaciones.forEach(calificacion => {
        total = total + calificacion;
    })
    let promedio = total / calificaciones.length;

    return promedio;
}

function aprobacion() {
    let calificacion = promedio();
    if (calificacion > 70) {
        console.log(`Aprobaste con ${calificacion}`)
    } else {
        console.log(`Reprobaste con ${calificacion}`)
    }
}

obtenerCalificaciones();
aprobacion();