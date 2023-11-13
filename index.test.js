const header = document.getElementById("header");
const contenido = document.getElementById("contenido");

const puestos = ["Gerente", "Desarrollador", "Marketing", "Abogado", "Secretaria"];
const hrefs = ["gerente", "devs", "marketing", "abogado", "secretaria"];


function handlePageChange() {
  const pathname = window.location.pathname.substring(1); // Obtener la parte de la URL después del primer "/"
  // Verificar si el pathname corresponde a uno de los puestos
  if (hrefs.includes(pathname)) {
    // Cargar el contenido de la página en el contenedor
    fetch(`./pages/${pathname}/${pathname}.html`)
      .then(response => response.text())
      .then(html => contenido.innerHTML = html);
  } else {
    // Página predeterminada o manejo de error
    contenido.innerHTML = "<p>Página no encontrada</p>";
  }
}
// Manejar cambios en la URL
window.addEventListener("popstate", handlePageChange);

// Crear enlaces dinámicamente
for (let puesto in puestos) {
  let listItem = document.createElement("li");
  listItem.classList.add("my-li");

  let enlace = document.createElement("a");
  enlace.classList.add("my-a");
  enlace.textContent = puestos[puesto];
  enlace.href = `./${hrefs[puesto]}`; // Configurar la URL de la página
  
  enlace.addEventListener("click", function (event) {
    history.pushState(null, null, this.href);
    handlePageChange();
    
    document.title=window.location.pathname.substring(1);
    console.log(document.title);
    event.preventDefault();
    
    
  });

  listItem.appendChild(enlace);
  header.appendChild(listItem);
}

// Manejar la primera carga de la página
handlePageChange();
