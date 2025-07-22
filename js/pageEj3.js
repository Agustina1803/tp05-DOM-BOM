const crearTarea = (e) => {
  e.preventDefault();
  const textoTarea = input.value.trim();
  

  const li = document.createElement("li");
  const divContenido = document.createElement("div");
  const checkbox = crearCheckbox();
  const spanTexto = document.createElement("span");

  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  divContenido.className = "d-flex align-items-center gap-2";
  spanTexto.textContent = textoTarea;

  checkbox.addEventListener("change", () => tachar(checkbox, spanTexto));

  divContenido.appendChild(checkbox);
  divContenido.appendChild(spanTexto);

  const btnEliminar = crearBotonEliminar(li);

  li.appendChild(divContenido);
  li.appendChild(btnEliminar);
  lista.appendChild(li);

  form.reset();
};

const crearCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  return checkbox;
};

const crearBotonEliminar = (elemento) => {
  const btnEliminar = document.createElement("button");
  const icono = document.createElement("i");

  btnEliminar.className = "btn btn-danger";
  icono.className = "bi bi-trash3-fill";

  btnEliminar.appendChild(icono);

  btnEliminar.addEventListener("click", () => {
    elemento.remove();
  });

  return btnEliminar;
};

const tachar = (checkbox, spanTexto) => {
  if (checkbox.checked) {
    spanTexto.style.textDecoration = "line-through";
    spanTexto.style.color = "#6c757d";
  } else {
    spanTexto.style.textDecoration = "none";
    spanTexto.style.color = "";
  }
};

const form = document.getElementById("formTarea");
const input = document.getElementById("tarea");
const lista = document.getElementById("listaTareas");

form.addEventListener("submit", crearTarea);
