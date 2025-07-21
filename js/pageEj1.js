let numeroAleatorio = 0;
let numerosIngresados = [];
let juegoActivo = false;


function comenzarJuego(){
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    juegoActivo = true;
    const parrafo = document.getElementById("p-juego");
    parrafo.classList.remove("d-none");
}


function recibirNumero(e){
    e.preventDefault();
    if( juegoActivo === false){
        alert("Primero presiona 'Comenzar juego'");
        formulario.reset();
         return;
    }
    const input = document.querySelector('.form-control');
     numeroRecibido = parseInt (input.value);
     numerosIngresados.push(numeroRecibido);
       if (numeroRecibido < 1 || numeroRecibido > 10) {
        alert("Por favor, ingresa un número entre 1 y 10.");
        formulario.reset();
        return;
    }
     numerosIngresados.push(numeroRecibido);
     mostrarResultado(numeroAleatorio, numeroRecibido);     
     formulario.reset();
}

function mostrarResultado(numeroAleatorio, numeroRecibido){
    if(numeroAleatorio === numeroRecibido){
        alert(`Adivinaste el numero! es el:  ${numeroRecibido}, presiona Comenzar juego! para volver a jugar'`);
        juegoActivo = false;
        document.getElementById("p-juego").classList.add("d-none");
    }else if(numeroAleatorio > numeroRecibido){
        alert(`El numero ingresado ${numeroRecibido} es menor que el numero generado`);
    }else{
        alert(`El numero ingresado ${numeroRecibido} es mayor que el numero generado`);
    }
}

const btnComenzar = document.querySelector('.btn-primary');
const formulario = document.querySelector('#formNumero');

btnComenzar.addEventListener('click', comenzarJuego);
formulario.addEventListener('submit', recibirNumero);