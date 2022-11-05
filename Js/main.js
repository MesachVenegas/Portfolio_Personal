// Loader website icon
function loading(){
    const loader = document.getElementById('loader_container');
    setTimeout( () => {
        loader.classList.add("hidden")
    }, 3000)
}

document.addEventListener( "DOMContentLoaded", () => {
    loading()
});