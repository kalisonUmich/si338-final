let  particlesContainer = document.querySelector("#particle-up-container");
console.log(particlesContainer);

    console.log("creating particles")
    let  particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random sizing and positioning
        const size = Math.random() * 50 + 10;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random();
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }



// removing hover element for page you're already on
let currentPage = document.querySelector(".remove-hover");
currentPage.classList.remove("style-a");
currentPage.style.pointerEvents = "none";

//button toggling mobile view's expanding menu
let menuButton = document.getElementById("menu-toggle");
let menuItems = document.getElementById("menu-items");
menuButton.addEventListener("click", function() {

    //if invisible
    if(menuItems.classList.contains("invisible")) {
        menuItems.classList.remove("invisible");
        menuItems.setAttribute("aria-expanded", "true");
    }
    //if visible
    else {
        menuItems.classList.add("invisible");
        menuItems.setAttribute("aria-expanded", "false");
    }
});

// making it so when the screen shrinks to 700px, the header is automatically closed
let mediaQuery = window.matchMedia("(min-width: 700px)");
mediaQuery.addEventListener("change", function(event) {
    if(event.matches) {
        //if width is 700px
        menuItems.classList.remove("invisible");
        menuItems.removeAttribute("aria-expanded");
    }
    else {
        menuItems.classList.add("invisible");
        menuItems.setAttribute("aria-expanded", "false");
    }
});