document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  const totalImages = images.length;

  setInterval(() => {
    images[currentIndex].style.display = 'none';  // Ocultar imagen actual
    currentIndex = (currentIndex + 1) % totalImages; // Incrementar índice de imagen
    images[currentIndex].style.display = 'block'; // Mostrar nueva imagen
  }, 3000); // Cambiar imagen cada 3 segundos
});
