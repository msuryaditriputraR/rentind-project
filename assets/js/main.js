// TOGGLE MENU
const navToggle = document.getElementById("nav-toggle"),
    navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("top-[-1000%]");
    navMenu.classList.toggle("top-20");
});

// ADD SHADOW TO HEADER WHEN SCROLLING
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    const scrollY = this.scrollY;

    header.classList[scrollY > 20 ? "add" : "remove"]("shadow-sm");
});
