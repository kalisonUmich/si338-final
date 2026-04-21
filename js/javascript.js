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
//jquery to make the animation smoother
let $menuItems = $("#menu-items");
let $menuButton = $("#menu-toggle");

let menuItems = document.querySelector("#menu-items");
let menuToggle = document.querySelector("#menu-toggle");
let motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if(!window.matchMedia("(min-width: 700px)").matches){ 
    $menuItems.hide();

}

$menuButton.on("click", function() { 
    if(motionQuery.matches) {
        console.log("reduced motion on");
        $menuItems.toggle();
        menuToggle.toggleAttribute("aria-expanded");
    }
    else {
        console.log("reduced motion off");
        $menuItems.slideToggle();
        menuToggle.toggleAttribute("aria-expanded");
    }
        
});

// making it so when the screen shrinks to 700px, the header is automatically closed
let sizeQuery = window.matchMedia("(min-width: 700px)");
sizeQuery.addEventListener("change", function(event) {
    if(!event.matches) {
        //if width switches to less than 700px
        $menuItems.hide();
        menuItems.setAttribute("aria-expanded", "false");
        menuToggle.style.visibility = "visible";

    }
    else {
        $menuItems.show();
        menuItems.removeAttribute("aria-expended");
        menuToggle.style.visibility = "hidden";

        
    }
});