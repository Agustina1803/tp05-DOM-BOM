const fechaYHoraActual = new Date();

const opcionesFecha = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

const opcionesHora = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};

const fechaFormateada = fechaYHoraActual.toLocaleDateString(undefined, opcionesFecha);
const horaFormateada =  fechaYHoraActual.toLocaleTimeString(undefined, opcionesHora);

const etiquetaFecha = document.getElementById("fecha");
etiquetaFecha.textContent = fechaFormateada;


const etiquetaHora = document.getElementById("hora");
etiquetaHora.textContent = horaFormateada;

setInterval ( () =>{
    const ahora = new Date();
    const horaActualizada = ahora.toLocaleTimeString(undefined, opcionesHora);
  etiquetaHora.textContent = horaActualizada;
},1000)