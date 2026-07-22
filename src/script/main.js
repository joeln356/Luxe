// BTN MENU
const btn_menu = document.getElementById('Menu')
const menu = document.getElementById('nav')
const agendar_btn = document.getElementById('agenda')

btn_menu.addEventListener('click', ()=>{
    btn_menu.classList.toggle('ativar_menu_burger')
    menu.classList.toggle('ativar_menu')
    header.classList.add("rolagem")
})

const btn__nav = [...document.querySelectorAll('.btn__nav')]
btn__nav.forEach( elemento =>{
    elemento.addEventListener('click', ()=>{
        menu.classList.remove('ativar_menu')
        btn_menu.classList.remove('ativar_menu_burger')
    })
})



// Carrousel
const btn_Left = document.getElementById('left')
const btn_Right = document.getElementById('right')
const textos = [...document.querySelectorAll('.texto')]
const slide = document.getElementById('slide')
const barras = [...document.querySelectorAll('.barra')]
let index = 0;

btn_Left.addEventListener('click', ()=>{
    index--;
    if(index < 0 ){
        index = textos.length -1
    } 
    Atualizar_Carousel()
    ReiniciarIntervalo()
})

btn_Right.addEventListener('click', ()=>{
    IncrementarIndex()
    Atualizar_Carousel()
    ReiniciarIntervalo()
})

function Atualizar_Carousel(){
    slide.style.transform = `translateX(-${index * 100}%)`
    Atualizar_Barra()
}
function IncrementarIndex(){
    index++;
    if(index > textos.length -1){
        index = 0
    }
}
function Atualizar_Barra(){
    barras.forEach(element => {
        element.style.width = '15px'
        element.style.backgroundColor = "#ffffff2a"
        element.style.transition = "width 1s ease";
    });
    
    barras[index].style.width = `30px`;
    barras[index].style.backgroundColor = "#b8962e";
}

let intervalo = setInterval(() => {
    IncrementarIndex();
    Atualizar_Carousel();
}, 5000);

function ReiniciarIntervalo() {
    clearInterval(intervalo);

    intervalo = setInterval(() => {
        IncrementarIndex();
        Atualizar_Carousel();
    }, 5000);
}


const telefone = document.getElementById("telefone");
const cliente = document.getElementById("cliente");

cliente.addEventListener("invalid", () => {
    cliente.setCustomValidity("Introduza um nome válido.")
})
telefone.addEventListener("invalid", () => {
    telefone.setCustomValidity("Digite um número de telefone angolano válido.");
});

const header = document.getElementById('header')
window.addEventListener('scroll', ()=>{
    header.classList.toggle('rolagem', window.scrollY > -1)
})
