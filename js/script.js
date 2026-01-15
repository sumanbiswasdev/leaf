const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden')

    if(menu.classList.contains('hidden')){
        menuBtn.innerHTML = '<i class="fa-solid fa-bars-staggered">'

    }
    else(
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    )
})