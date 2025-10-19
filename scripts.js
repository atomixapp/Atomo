let currentIndex = 0;
let items = document.querySelectorAll('.carousel-item');

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('center');
        if (index === currentIndex) {
            item.classList.add('center');
        }
    });
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

setInterval(showNextSlide, 3000); // Cambia cada 3 segundos
updateCarousel(); // Inicializa el carrusel con la primera imagen centrada
