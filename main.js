const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const desktop = document.querySelector('.desktop')
const add = () => {
    menu.classList.toggle("aside")
    desktop.classList.toggle("opacity")
}
hamburger.addEventListener('click', add);