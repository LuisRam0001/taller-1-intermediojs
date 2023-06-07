//Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.

let nombreAlumno = prompt('ingrese nombre del alumno');
let materias = 0
let notas = 0

for( i = 0; i < 3; i++){
      materias = prompt('ingrese las materia');
      console.log(materias);
      suma = 0
    for(k = 0; k < 3; k++){
        notas = Number( prompt('ingrese las notas'));
        console.log(notas);
        suma = suma + notas;
    }
    suma = suma / 3;
    if( suma <= 3.5 ){
        console.log('Reprobo')
        
    }
    if(suma > 3.5){
        console.log('Aprobo')
        
        
    }
    
    
    
    
    
    
}





