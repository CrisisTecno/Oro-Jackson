
export function Card(integrantesproyect){
const integrantes=["PAOPATROL","CRISISTECNO",
"YULIOS","BILVAO DE RIOJA", "DANIMAN","MARIA'S",
"JESSIEL"];
const paths=[
    './public/assets/pao.jpg',
    './public/assets/esecris.png',
    './public/assets/julio.jpg',
    './public/assets/billy.jfif',
    './public/assets/dani.jpg',
    './public/assets/maria.jpg',
    './public/assets/jesiel.jfif',
];
for(let i in integrantes){
    const integrante=document.createElement('div');
    integrante.classList.add('integrantes');
    const aux=document.createElement('div');
    const title=document.createElement('h3');
    title.textContent=integrantes[i];
    aux.appendChild(title);
    const p=document.createElement('p');
    p.textContent=`Lorem ipsum dolor sit amet consectetur
    adipisicing elit soluta laborum doloribus distinctio
    voluptates eligendi deserunt Repudiandae vero ex debitis animi
    molestias doloribus doloremque iusto sunt cupiditate enim quisquam
    Ex consectetur adipisicing elit Modi eos ex error commodi libero
    dolorum eius at Dolor cupiditate iste laborum iusto doloremque
    vel mollitia sed modi aut ex nihil`;
    aux.appendChild(p);
    const image=document.createElement('img');
    image.classList.add("image");
    image.src=paths[i];
    image.alt=integrantes[i]+"image.jpg"
    if(i%2!=0){
        integrante.appendChild(aux);
        integrante.appendChild(image);
    }else{
        integrante.appendChild(image);
        integrante.appendChild(aux);
    
    }
    
    integrantesproyect.appendChild(integrante);
}
}