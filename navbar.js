export function NabBar(){
    const puestos=["Gerente","Desarrollador","Marketing","Abogado","Secretaria"];
    const hrefs=["gerente","devs","marketing","abogado","secretaria"];
    var rutaBase = window.location.host;
    const header=document.getElementById("header");
    const enlaces=document.createElement("ul");
    const home =document.createElement("a");
    
    home.classList.add("h1");
    home.textContent="Bienvenido Al Oro Jackson";
    home.onclick=function(){
        window.location.href=`http://${window.location.host}/index.html`;
    }
    if(window.location.pathname.substring(1)=='index.html'){
      home.classList.add("check");
    }
    header.appendChild(home);
    
    for (let puesto in puestos) {
      let listItem = document.createElement("li");
      listItem.classList.add("my-li");
    
      let enlace = document.createElement("a");
      enlace.classList.add("my-a");
      enlace.textContent = puestos[puesto];
      if(window.location.pathname.substring(1)==`pages/${hrefs[puesto]}/${hrefs[puesto]}.html`){
        enlace.classList.add("check");
      }
      enlace.onclick=function(){
        window.location.href=`http://${window.location.host}/pages/${hrefs[puesto]}/${hrefs[puesto]}.html`;
    }
    
      listItem.appendChild(enlace);
      enlaces.appendChild(listItem);
    }
    console.log(window.location.pathname.substring(1));
    header.appendChild(enlaces);
    }