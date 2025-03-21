document.addEventListener("DOMContentLoaded", function () {
    function createFireflies() {
        for (let i = 0; i < 10; i++) {
            let firefly = document.createElement("div");
            firefly.classList.add("firefly");
            document.querySelector(".fireflies").appendChild(firefly);

            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight * 0.5;
            let delay = Math.random() * 3;

            firefly.style.left = `${x}px`;
            firefly.style.top = `${y}px`;
            firefly.style.animationDelay = `${delay}s`;
        }
    }

    createFireflies();
});