let temporizador;
let tiempoRestante = 0;
let estaCorriendo = false;

const inputHoras = document.getElementById('inputHoras');
const inputMinutos = document.getElementById('inputMinutos');
const inputSegundos = document.getElementById('inputSegundos');
const pantalla = document.getElementById('temporizador');
const botonIniciar = document.querySelector('.btn-primary');
const botonPausar = document.querySelector('.btn-danger');
const botonResetear = document.querySelector('.btn-warning');

function formatearTiempo(segundos) {
  const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
  const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
  const segs = String(segundos % 60).padStart(2, '0');
  return `${horas}:${minutos}:${segs}`;
}

function actualizarPantalla() {
  pantalla.textContent = formatearTiempo(tiempoRestante);
}

function obtenerTiempoIngresado() {
  const horas = parseInt(inputHoras.value) || 0;
  const minutos = parseInt(inputMinutos.value) || 0;
  const segundos = parseInt(inputSegundos.value) || 0;
  return horas * 3600 + minutos * 60 + segundos;
}

function iniciarTemporizador() {
  if (!estaCorriendo) {
    if (tiempoRestante === 0) {
      const total = obtenerTiempoIngresado();
      if (total <= 0) return; 
      tiempoRestante = total;
    }

    estaCorriendo = true;
    temporizador = setInterval(() => {
      if (tiempoRestante > 0) {
        tiempoRestante--;
        actualizarPantalla();
      } else {
        clearInterval(temporizador);
        estaCorriendo = false;
        
      }
    }, 1000);
  }
}

function pausarTemporizador() {
  clearInterval(temporizador);
  estaCorriendo = false;
}

function resetearTemporizador() {
  clearInterval(temporizador);
  estaCorriendo = false;
  tiempoRestante = 0;
  inputHoras.value = '';
  inputMinutos.value = '';
  inputSegundos.value = '';
  actualizarPantalla();
}

botonIniciar.addEventListener('click', iniciarTemporizador);
botonPausar.addEventListener('click',resetearTemporizador );
botonResetear.addEventListener('click',pausarTemporizador);

actualizarPantalla();