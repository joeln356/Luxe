// BTN MENU
const btn_menu = document.getElementById('Menu')
const menu = document.getElementById('nav')

btn_menu.addEventListener('click', ()=>{
    btn_menu.classList.toggle('ativar_menu_burger')
})
btn_menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativar_menu')
})