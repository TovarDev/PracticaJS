//import partido from './partido.js';

console.log('===============================================\n===== COMIENZO DE LA FASE DE ELIMINATORIAS ====\n===============================================');
let selecciones = ['Brasil', 'Ecuador', 'Japón', 'Francia', 'EEUU', 'Inglaterra', 'Argentina', 'Holanda', 'Alemania', 'Islas Feroe', 'España', 'Jamaica', 'Portugal', 'Polonia', 'Suecia', 'Finlandia'];
console.log('Selecciones que participan en el playoff:')
console.log(selecciones)
selecciones.sort(() => Math.random()-0.5);

let ganadoresDeRonda = [];
let perdedor = [];

function eliminatoria(equipos) {
    ganadoresDeRonda = [];
    perdedor = [];
    while (equipos.length > 0) {   
        let ganador = ''; 
        let seleccionesEnfrentadas = equipos.splice(0,2);
        //console.log(seleccionesEnfrentadas)
        let equipo1 = [seleccionesEnfrentadas[0]];
        let equipo2 = [seleccionesEnfrentadas[1]];
        //partido.start();
        equipo1.goles = Math.floor(Math.random() * 6);
        equipo2.goles = Math.floor(Math.random() * 6);
        if (equipo1.goles > equipo2.goles) {
            ganador = equipo1[0];
            perdedor.push(equipo2[0]);
         } 
         else { 
            ganador = equipo2[0];
            perdedor.push(equipo1[0]);
         }
        
    
        console.log(equipo1[0], 'vs', equipo2[0], 'Resultado ->', equipo1.goles, '-', equipo2.goles, 'Ganador ->', ganador)
        ganadoresDeRonda.push(ganador)
    
        equipos.sort(() => Math.random()-0.5);
        
    }
}

console.log ('===== OCTAVOS DE FINAL =====')
eliminatoria(selecciones)
let octavos = ganadoresDeRonda
//console.log (octavos)

console.log ('===== CUARTOS DE FINAL =====')
eliminatoria(octavos)
let cuartos = ganadoresDeRonda
//console.log (cuartos)

console.log ('======== SEMIFINAL =========')
perdedor = [];
eliminatoria(cuartos)
let semifinal = ganadoresDeRonda
//console.log (semifinal)
//console.log (perdedor)

console.log ('== TERCER Y CUARTO PUESTO ==')
eliminatoria(perdedor)
let tercero = ganadoresDeRonda
//console.log (tercero)

console.log ('=========== FINAL ==========')
eliminatoria(semifinal)
let final = ganadoresDeRonda
//console.log (final)
console.log ('===============================================\n¡',final, 'campeón del mundo!\n===============================================')




// TODO Crear funcion que coja 2 elemenos aleatorios de un array que le pasamos y haga partido guardando resultados hasta que no queden elementos. 

// TODO Octavos. Llamar a la funcion. Copiar los resultados en un nuevo objeto de resultados octavos. Mostrar resultados de la fase

// TODO Cuartos.

// TODO Semifinales.

// TODO Final.

//TODO Mostrar ganador