let segundos = 0;
let minutos = 0;
let horas = 0;
let idInterval;

const actualizarCronometro = () => {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }

  const formato = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(
    2,
    "0"
  )}:${String(segundos).padStart(2, "0")}`;
  textCronometro.textContent = formato;
};

const iniciarCronometro = () => { 
  btnIniciarCronometro.disabled = true;
  btnPausarCronometro.disabled = false;
  btnResetCronometro.disabled = false;

  idInterval = setInterval(actualizarCronometro, 1000);
};


const pausarCronometro = () => {
  clearInterval(idInterval);
  btnIniciarCronometro.disabled = false;
};

const resetearCronometro = () => {
  clearInterval(idInterval);
  segundos = 0;
  minutos = 0;
  horas = 0;
  textCronometro.textContent = "00:00:00";
  btnIniciarCronometro.disabled = false;
  btnPausarCronometro.disabled = true;
  btnResetCronometro.disabled = true;

};

const textCronometro = document.querySelector(".cronometro");
const btnIniciarCronometro = document.querySelector(".btn-primary");
const btnResetCronometro = document.querySelector(".btn-danger");
const btnPausarCronometro = document.querySelector(".btn-warning");



btnIniciarCronometro.addEventListener("click", iniciarCronometro);
btnPausarCronometro.addEventListener("click", pausarCronometro);
btnResetCronometro.addEventListener("click", resetearCronometro);
