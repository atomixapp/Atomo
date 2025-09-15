// Variables para el carrusel principal
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

// Función para actualizar el carrusel
function updateCarousel() {
  // Desplazar el carrusel a la imagen correspondiente
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Actualizar los puntos de navegación
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Cambiar al siguiente carrusel
function nextCarousel() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

// Cambiar al carrusel anterior
function prevCarousel() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

// Eventos de los puntos de navegación
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.getAttribute('data-index'));
    updateCarousel();
  });
});

// Iniciar carrusel (cada 5 segundos)
setInterval(nextCarousel, 5000);

// Inicializar el carrusel al cargar la página
updateCarousel();
