// BTN MENU
const btn_menu = document.getElementById('Menu')
const menu = document.getElementById('nav')
const agendar_btn = document.getElementById('agenda')
const header = document.getElementById('cabe')
btn_menu.addEventListener('click', ()=>{
    btn_menu.classList.toggle('ativar_menu_burger')
    menu.classList.toggle('ativar_menu')
    
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