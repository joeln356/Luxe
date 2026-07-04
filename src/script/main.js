// BTN MENU
const btn_menu = document.getElementById('Menu')
const menu = document.getElementById('nav')
const agendar_btn = document.getElementById('agenda')
btn_menu.addEventListener('click', ()=>{
    btn_menu.classList.toggle('ativar_menu_burger')
})
btn_menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativar_menu')
})