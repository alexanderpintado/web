document.addEventListener("DOMContentLoaded", function () {
    const flowerField = document.querySelector(".flower-field");

    // Crear varias flores aleatorias
    for (let i = 0; i < 15; i++) {
        let flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = Math.random() * 90 + "%";
        flower.style.bottom = Math.random() * 40 + "px";
        flowerField.appendChild(flower);
    }

    // Agregar luciérnagas
    for (let i = 0; i < 10; i++) {
        let firefly = document.createElement("div");
        firefly.classList.add("firefly");
        firefly.style.left = Math.random() * 100 + "vw";
        firefly.style.top = Math.random() * 100 + "vh";
        firefly.style.animationDuration = Math.random() * 3 + 2 + "s";
        flowerField.appendChild(firefly);
    }
});
