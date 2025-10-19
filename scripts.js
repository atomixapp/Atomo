let currentIndex = 0;

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    
    items.forEach((item, index) => {
        item.classList.remove('center');
        if (index === currentIndex) {
            item.classList.add('center');
        }
    });
}

function showNextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

setInterval(showNextSlide, 3000); // Cambia cada 3 segundos
updateCarousel(); // Inicializar el carrusel en el primer ítem
