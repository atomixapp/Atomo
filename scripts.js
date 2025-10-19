let currentIndex = 0;

function showNextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * (300 + 20); // 300px item width + 20px margin
    carousel.style.transform = `translateX(${offset}px)`;
}

setInterval(showNextSlide, 3000); // Cambiar cada 3 segundos
