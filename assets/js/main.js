// TOGGLE MENU
const navToggle = document.getElementById("nav-toggle"),
    navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("top-[-1000%]");
    navMenu.classList.toggle("top-20");
});

// ADD SHADOW TO HEADER WHEN SCROLLING
