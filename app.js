//Variables
let calificaciones = [];

//Funciones
function obtenerCalificaciones(){
    for(let i = 0; i < 5; i++ ){

        calificaciones[i] = Number(prompt('Digite la calificacion:'));
        if(isNaN(calificaciones[i])){
            alert('Solo numeros')
            obtenerCalificaciones();
            return;
        }

    }
}
function promedio(){
    let total = 0;
    calificaciones.forEach(calificacion => {
        total = total + calificacion;
    })
    let promedio = total / 5;
    
    return promedio;
}

function aprobacion(){
    let calificacion = promedio();
    if(calificacion > 70){
        console.log(`Aprobaste con ${calificacion}`)
    }else{
        console.log(`Reprobaste con ${calificacion}`)
    }
}

obtenerCalificaciones();
aprobacion();