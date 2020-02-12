const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const lorem = document.querySelector('.lorem');
const table = document.querySelector('.table');
const tableBtns = document.querySelectorAll('.tabele-btn');


const show = () => {
    lorem.classList.toggle("none");
    table.classList.toggle("none");

}
const add = () => {
    menu.classList.toggle("aside");
    container.classList.toggle("opacity");
};

tableBtns.forEach(btn => {
    btn.addEventListener('click', show);
});
hamburger.addEventListener('click', add);