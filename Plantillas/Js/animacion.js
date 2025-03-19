document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector(".background");

    for (let i = 0; i < 20; i++) {
        let container = document.createElement("div");
        container.classList.add("circle-container");

        let size = Math.random() * 10 + 5; // Tamaño entre 5px y 15px
        let duration = Math.random() * 5 + 8; // Duración entre 8s y 13s
        let startX = Math.random() * window.innerWidth; // Posición aleatoria en X
        let delay = Math.random() * 5; // Retraso en la animación

        container.style.width = `${size}px`;
        container.style.height = `${size}px`;
        container.style.left = `${startX}px`;
        container.style.animationDuration = `${duration}s`;
        container.style.animationDelay = `-${delay}s`;

        let circle = document.createElement("div");
        circle.classList.add("circle");

        container.appendChild(circle);
        background.appendChild(container);
    }
});