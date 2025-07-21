let numeroAleatorio = 0;
let numerosIngresados = [];


function comenzarJuego(){
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
}

function recibirNumero(e){
    e.preventDefault();
    const input = document.querySelector('.form-control');
     numeroRecibido = parseInt (input.value);
     numerosIngresados.push(numeroRecibido);
     mostrarResultado(numeroAleatorio, numeroRecibido);
     formulario.reset();     
}

function mostrarResultado(numeroAleatorio, numeroRecibido){
    if(numeroAleatorio === numeroRecibido){
        alert(`Adivinaste el numero! ${numeroRecibido}`);
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