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

// AREA ONE
// Chevron Animation
document.getElementById("Chevron").classList.add("chevronAnim");





