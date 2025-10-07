let currentIndex = 0;

function moveSlide(direction) {
  const images = document.querySelector('.carousel-images');
  const totalImages = images.children.length;

  currentIndex += direction;
  
  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  } else if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 270; // Ajusta el desplazamiento en función del tamaño de las imágenes
  images.style.transform = `translateX(${offset}px)`;
}
