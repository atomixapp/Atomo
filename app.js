let currentIndex = 0;

function setCarousel(index) {
  const carouselContainer = document.querySelector('.carousel-container');
  const dots = document.querySelectorAll('.dot');

  // Asegurar que el índice esté dentro de los límites
  if (index >= 0 && index < 3) {
    currentIndex = index;
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Actualizar la clase 'active' en los puntos de navegación
    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === currentIndex) {
        dot.classList.add('active');
      }
    });
  }
}

// Establecer el carrusel en el índice inicial
setCarousel(currentIndex);
