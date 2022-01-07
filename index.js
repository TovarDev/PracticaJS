//import partido from './partido.js';

console.log('===============================================\n===== COMIENZO DE LA FASE DE ELIMINATORIAS ====\n===============================================');
let selecciones = ['Brasil', 'Ecuador', 'Japón', 'Francia', 'EEUU', 'Inglaterra', 'Argentina', 'Holanda', 'Alemania', 'Islas Feroe', 'España', 'Jamaica', 'Portugal', 'Polonia', 'Suecia', 'Finlandia'];
console.log('Selecciones que participan en el playoff:')
console.log(selecciones)
selecciones.sort(() => Math.random()-0.5);

const ganadoresDeRonda = [];
while (selecciones.length > 0) {   
    let ganador = ''; 
    let seleccionesEnfrentadas = selecciones.splice(0,2);
    //console.log(seleccionesEnfrentadas)
    let equipo1 = [seleccionesEnfrentadas[0]];
    let equipo2 = [seleccionesEnfrentadas[1]];
    //partido.start();
    equipo1.goles = 2; //this.anotaGol();
    equipo2.goles = 4; //this.anotaGol();
    if (equipo1.goles > equipo2.goles) {
        ganador = equipo1[0];
     } 
     else { 
        ganador = equipo2[0];
     }
    

    console.log(equipo1[0], 'vs', equipo2[0], 'resultado ->', equipo1.goles, '-', equipo2.goles, 'Ganador ->', ganador)
    ganadoresDeRonda.push(ganador)

    selecciones.sort(() => Math.random()-0.5);
    //console.log(selecciones)
    
}
console.log (ganadoresDeRonda)

// anotaGol(){
//     return Math.floor(Math.random() * 10);
// }



// TODO Crear funcion que coja 2 elemenos aleatorios de un array que le pasamos y haga partido guardando resultados hasta que no queden elementos. 

// TODO Octavos. Llamar a la funcion. Copiar los resultados en un nuevo objeto de resultados octavos. Mostrar resultados de la fase

// TODO Cuartos.

// TODO Semifinales.

// TODO Final.

//TODO Mostrar ganador