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
