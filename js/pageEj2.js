let personaCreada = null;

class Persona {
  #nombre;
  #edad;
  #DNI;
  #sexo;
  #peso;
  #altura;
  #anioNac;

  constructor(nombre,edad, DNI, sexo, peso, altura, anioNac) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#DNI = DNI;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#anioNac = anioNac;
  }
  get nombre() {
    return this.#nombre;
  }

  get DNI() {
    return this.#DNI;
  }

  get edad() {
    return this.#edad;
  }

  get sexo() {
    return this.#sexo;
  }

  get peso() {
    return this.#peso;
  }

  get altura() {
    return this.#altura;
  }

  get anioNac() {
    return this.#anioNac;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  set DNI(nuevoDNI) {
    this.#DNI = nuevoDNI;
  }

  set edad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }

  set sexo(nuevoSexo) {
    this.#sexo = nuevoSexo;
  }

  set peso(nuevoPeso) {
    this.#peso = nuevoPeso;
  }

  set altura(nuevaAltura) {
    this.#altura = nuevaAltura;
  }

  set anioNac(nuevoAnioNac) {
    this.#anioNac = nuevoAnioNac;
  }

  mostrarGeneracion() {
    let generacion = "";
    let datos = {};
    if (this.anioNac >= 1994 && this.anioNac <= 2010) {
      generacion = `Generacion Z`;
      datos = {
        marco: `1994-2010`,
        poblacion: `7.800.000`,
        historia: "Expansión masiva de internet",
        rasgo: "😋 Irreverencia",
      };
    } else if (this.anioNac >= 1981 && this.anioNac <= 1993) {
      generacion = `Generacion Y millennials`;
      datos = {
        marco: `1981-1993`,
        poblacion: `7.200.000`,
        historia: "Inicio de la digitalización",
        rasgo: "😓 Frustracion",
      };
    } else if (this.anioNac >= 1969 && this.anioNac <= 1980) {
      generacion = `Generacion X`;
      datos = {
        marco: `1969-1980`,
        poblacion: `9.300.000`,
        historia: "Crisis del 73 y transición española",
        rasgo: "😎 Obsesión por el éxito",
      };
    } else if (this.anioNac >= 1949 && this.anioNac <= 1968) {
      generacion = `Baby Boom`;
      datos = {
        marco: `1949-1968`,
        poblacion: `12.200.000`,
        historia: "Paz y explosión demográfica",
        rasgo: "🤑 Ambición",
      };
    } else {
      generacion = `Silent Generation - Los niños de la postguerra`;
      datos = {
        marco: `1930-1948`,
        poblacion: `6.300.000`,
        historia: "Conflictos bélicos",
        rasgo: "😐 Austeridad",
      };
    }

    document.getElementById(
      "nombreGeneracion"
    ).textContent = `Generación de ${this.nombre}`;
    document.getElementById(
      "textoGeneracion"
    ).textContent = `Nombre de la generación: ${generacion}`;
    document.getElementById(
      "textoRasgo"
    ).textContent = `Rasgo característico: ${datos.rasgo}`;

    const modal = new bootstrap.Modal(
      document.getElementById("modalGeneracion")
    );
    modal.show();
  }

esMayorDeEdad() {
  const mensaje = this.edad >= 18
    ? `${this.nombre} tiene ${this.edad} años, por lo tanto es mayor de edad.`
    : `${this.nombre} tiene ${this.edad} años, por lo tanto es menor de edad.`;

  document.getElementById("mensajeEdad").textContent = mensaje;

  const modal = new bootstrap.Modal(document.getElementById("modalEdad"));
  modal.show();
}

  mostrarDatos() {
    document.getElementById(
      "textoNombre"
    ).textContent = `Nombre: ${this.#nombre}`;
    document.getElementById(
      "textoEdad"
    ).textContent = `Edad: ${this.#edad}`;
    document.getElementById(
      "textoDNI"
    ).textContent = `DNI: ${this.#DNI}`;
    document.getElementById(
      "textoSexo"
    ).textContent = `Sexo: ${this.#sexo}`;
    document.getElementById(
      "textoAltura"
    ).textContent = `Altura: ${this.#altura}cm`;
    document.getElementById(
      "textoPeso"
    ).textContent = `Peso: ${this.#peso}kg`;
    document.getElementById(
      "textoAnioNac"
    ).textContent = `Añio de nacimiento: ${this.#anioNac}`;

    const modal = new bootstrap.Modal(
      document.getElementById("modalDatos")
    );
    modal.show();
  }
}

const crearPersona = (e) => {
  e.preventDefault();
  const inputNombre = document.getElementById("inputNombre").value.trim();
  const inputEdad = document.getElementById("inputEdad").value.trim();
  const inputDNI = document.getElementById("inputDNI").value.trim();
  const selectSexo = document.getElementById("sexo");
  const sexoElegido = selectSexo.value;
  const inputPeso = document.getElementById("inputPeso").value.trim();
  const inputAltura = document.getElementById("inputAltura").value.trim();
  const inputAnioNac = document.getElementById("inputAnioNac").value.trim();

  personaCreada = new Persona(
    inputNombre,
    inputEdad,
    inputDNI,
    sexoElegido,
    inputPeso,
    inputAltura,
    inputAnioNac
  );
  formularioPersona.reset();
};

const mostrarGneraciones = () => {
  if (!personaCreada) {
    alert("Primero completá los datos de la persona.");
    return;
  }

  personaCreada.mostrarGeneracion();
};

const esMayorDeEdad = () =>{
     if (!personaCreada) {
    alert("Primero completá los datos de la persona.");
    return;
  }

  personaCreada.esMayorDeEdad();
}

const mostrarDatosPersona = () =>{
    personaCreada.mostrarDatos();
}

const formularioPersona = document.querySelector("#formPersona");
const btnVerde = document.querySelector(".btn-success");
const btnAmarillo = document.querySelector(".btn-warning");
const btnRojo = document.querySelector(".btn-danger");

formularioPersona.addEventListener("submit", crearPersona);
btnVerde.addEventListener("click", mostrarGneraciones);
btnAmarillo.addEventListener("click", esMayorDeEdad);
btnRojo.addEventListener("click", mostrarDatosPersona);

