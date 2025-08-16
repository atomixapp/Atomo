document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  const totalImages = images.length;
  const carouselContainer = document.querySelector('.carousel-container');

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages; // Incrementar índice de imagen
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}vw)`; // Desplazar el carrusel
  }, 6000);
});
