// Loader website icon
function loading(){
    const loader = document.getElementById('loader_container');
    setTimeout( () => {
        loader.classList.add("hidden")
    }, 3000);
}

// Change lightmode to darkmode
const darkMode = () =>{
    const btnMode = document.getElementById('mode')
    const body =  document.getElementById('body')
    btnMode.addEventListener( 'click', e =>{
        body.classList.toggle('dark')
    });
}

// menu navigation mobile.
const menu = () =>{
    const btnMenu = document.getElementById('btn_menu')
    const menu = document.getElementById('menu')
    btnMenu.addEventListener('click', e =>{
        menu.classList.toggle('nav__menu--open')
    })
}

document.addEventListener( "DOMContentLoaded", () => {
    loading()
    darkMode()
    menu()
});