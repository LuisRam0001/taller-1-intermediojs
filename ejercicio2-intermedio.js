//Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar).

let suma = 0

for( i= 0; i < 3 ; i++ ){
    let ingreseNotas = Number(prompt('Ingrese  notas'));
    suma = suma + ingreseNotas
    if(ingreseNotas < 0 || ingreseNotas > 5 ){
       console.log('ingrese una nota valida');
       i--;
       ingreseNotas = 0;
    }
}

suma = suma / 3;

if( suma <= 3.5 ){
    console.log('Reprobo');
    
}
if(suma > 3.5){
    console.log('Aprobo')
    
    
}
