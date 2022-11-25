const btn = document.querySelector(".nav_burger");

const nav = document.querySelector(".nav_menu");

btn.onclick = function () {
    nav.classList.toggle("is_show");
}