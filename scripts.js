let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

// Función para actualizar el carrusel y aplicar las clases
function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('center', 'left', 'right');
        if (index === currentIndex) {
            item.classList.add('center'); // Imagen centrada (más grande)
        } else if (index === currentIndex - 1 || (currentIndex === 0 && index === items.length - 1)) {
            item.classList.add('left'); // Imagen a la izquierda (más pequeña)
        } else if (index === currentIndex + 1 || (currentIndex === items.length - 1 && index === 0)) {
            item.classList.add('right'); // Imagen a la derecha (más pequeña)
        }
    });
}

// Función para mover al siguiente item
function showNextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

// Función para mover al item anterior
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

// Asignar eventos a las flechas
document.getElementById('nextButton').addEventListener('click', showNextSlide);
document.getElementById('prevButton').addEventListener('click', showPrevSlide);

// Inicializa el carrusel
updateCarousel();
