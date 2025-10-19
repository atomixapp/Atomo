let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('center', 'left', 'right');
        if (index === currentIndex) {
            item.classList.add('center');
        } else if (index === currentIndex - 1 || (currentIndex === 0 && index === items.length - 1)) {
            item.classList.add('left');
        } else if (index === currentIndex + 1 || (currentIndex === items.length - 1 && index === 0)) {
            item.classList.add('right');
        }
    });
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

setInterval(showNextSlide, 3000); // Cambia cada 3 segundos
updateCarousel(); // Inicializa el carrusel con la primera imagen centrada
