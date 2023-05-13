//для бургера в главном меню
const body = document.querySelector('body');
const burger = document.querySelector(".menu-burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    body.classList.toggle('open')
    menu.classList.toggle("show");
    burger.classList.toggle("open");
});