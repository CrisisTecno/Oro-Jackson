
const puestos=["Gerente","Desarrollador","Marketing","Abogado","Secretaria"]
const hrefs=["gerente","devs","marketing","abogado","secretaria"]

const header=document.getElementById("header")
const iframe = document.getElementById("iframe"); 

for (let puesto in puestos) {
  let listItem = document.createElement("li");
  listItem.classList.add("my-li");

  let enlace = document.createElement("a");
  enlace.classList.add("my-a");
  enlace.textContent = puestos[puesto];
  enlace.href = `./pages/${hrefs[puesto]}/${hrefs[puesto]}.html`;
  enlace.addEventListener("click", function (event) {
    event.preventDefault();
    const iframe = document.getElementById("iframe");
    iframe.src = this.href; 
  });

  listItem.appendChild(enlace);
  header.appendChild(listItem);
}
