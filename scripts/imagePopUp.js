// Delay between calls
const throttle = (CreateImage, delay) => {
    let last = 0;
    return () => {
        const now = new Date().getTime();
        if (now - last < delay) {
            return;
        }
        last = now;
        return CreateImage();
    }
}

// On mouse move in area
document.getElementById("ImgArea").addEventListener("mousemove", throttle(() => {

    let i = Math.floor(Math.random() * Math.floor(27));


    // Scale image 0.8-1.2x
    const scale = Math.random() * (0.8 - 0.7) + 0.7;

    // Get mouse location
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Create image
    const img = document.createElement("img");

    img.setAttribute("id", `PopUpImg`);
    img.setAttribute("src", `../img/PopUp/${i}.webp`);
    img.setAttribute("alt","RLI Connect");
    img.onload = function() {
        img.style.height = `${img.naturalHeight*scale}px`;
        img.style.width = `${img.naturalWidth*scale}px`;
        img.style.opacity = "1";

        document.getElementById("ImgArea").appendChild(img);

        // Center image on mouse location
        const BCR = img.getBoundingClientRect();
        img.style.position = "absolute";
        img.style.left = `${mouseX - (BCR.width/2)}px`;
        img.style.top = `${mouseY - (BCR.height/2)}px`;

        // Add CSS animations
        img.classList.add("ImgAnim");
    }

    // Remove elements after alotted time
    setTimeout(function() {
        document.getElementById(`PopUpImg`).remove();
    }, 1790)

    // Cycle through images in order
    // if (i > 26) {
    //     i = 1;
    // } else {
    //     i++;
    // }

    // Random order of images
    i = Math.floor(Math.random() * Math.floor(27));

}, 140))

// const scrollDown = () => {
//     document.getElementById("HTML").style.overflowY = "scroll";
// }

// document.getElementById("Chevron").addEventListener("click", scrollDown);
