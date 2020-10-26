// INTRO
// Intro Box
IntroI = 1;

window.location = "#areaOne";

const intro = document.getElementById("intro");
intro.addEventListener("animationend", () => {
    if (IntroI === 4) {
        document.getElementById("intro").remove();
    } else {
        IntroI++;
    }
})

// NAVBAR
// Navbar Appear
const NavBar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        NavBar.classList.add("nav-active")
    } else {
        NavBar.classList.remove("nav-active")
    }
})

// Burger Menu

const navMenu = () => {
    const burger = document.querySelector(".menu-btn");
    const navList = document.querySelector(".nav-list");

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-list-display");
        burger.classList.toggle("open");
    });
}

navMenu();

// AREA ONE
// Chevron Animation
document.getElementById("Chevron").classList.add("chevronAnim");





