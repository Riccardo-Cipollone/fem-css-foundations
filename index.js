const navbar = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
    navbar.classList.add("nav--visible");
    menu.classList.add("menu--hide");
    close.classList.add("close--show");
    body.classList.add("body--no-scroll");
});

close.addEventListener("click", () => {
    navbar.classList.remove("nav--visible");
    menu.classList.remove("menu--hide");
    close.classList.remove("close--show");
    body.classList.remove("body--no-scroll");
});
