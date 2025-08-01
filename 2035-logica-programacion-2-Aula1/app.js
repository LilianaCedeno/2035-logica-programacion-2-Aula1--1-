let numeroSecreto = 0;
let numeroIntentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

console.log('Número secreto generado:', numeroSecreto);

function asignarTextoElementos(elemento, texto) {
    
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
 }

function verificarIntento() {
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
     
        console.log('numero de intentos:', + numeroIntentos);
        if (numeroDeUsuario === numeroSecreto){
            asignarTextoElementos ('p', `¡Felicidades! Adivinaste el número secreto en ${numeroIntentos} ${numeroIntentos === 1 ? 'intento' : 'intentos'}!`);
            document.getElementById('reiniciar').disabled = false;

        } else if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElementos('p', 'El número secreto es mayor. Intenta de nuevo.');
        } else if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElementos('p', 'El número secreto es menor. Intenta de nuevo.');
        } else {
            asignarTextoElementos('p', 'Por favor, ingresa un número válido entre 1 y 10.');
        }  
        numeroIntentos++; 
        limpiarCaja();
        return;
}
 // funcion que me opermite limpiar la caja de texto
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);
   
    // si ya sorteamos todos los números posibles, reiniciar la lista
    if( numerosSorteados.length == numeroMaximo) {
        asignarTextoElementos('p', 'Todos los números han sido sorteados. Reiniciando el juego...');
    } else{
        // Verificar si el número ya fue sorteado
        if (numerosSorteados.includes(numeroGenerado)) {
            // Si ya fue sorteado, generar otro número
            return generarNumeroSecreto();
        } else {
            // Si no fue sorteado, agregarlo a la lista y devolverlo
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;  
        }
    }    

}

function condicionesIniciales() {
    asignarTextoElementos('h1', 'Juego del Número Secreto');
    asignarTextoElementos('p', 'Adivina el número secreto entre 1 y ' + numeroMaximo + '.');

    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego() {
    // limpiar caja de texto
        limpiarCaja();

    //indicar intervalo de numeros
        condicionesIniciales();

    //deshabilitar boton de reinicio
    document.querySelector('#reiniciar').disabled = true;


    }

  condicionesIniciales();