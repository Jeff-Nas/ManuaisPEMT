const menu = document.querySelector(".mobile-menu")
const btMenu = document.getElementById('btnMenu')
const icon = document.querySelector('.btnIcon')

btMenu.addEventListener('click', () => {
    const isOpen = menu.classList.toggle("open")

    icon.classList.add("animate")

    setTimeout(() => {
        icon.src = isOpen
            ? "assets/svg/close_white_36dp.svg"
            : "assets/svg/menu_white_36dp.svg"
        icon.classList.remove("animate")
    }, 150)
})

