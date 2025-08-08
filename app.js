// Configuración para el carrusel automático
let carouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function moveCarousel() {
    carouselItems.forEach(item => {
        item.style.transform = `translateX(-${carouselIndex * 220}px)`;
    });
    carouselIndex = (carouselIndex + 1) % carouselItems.length;
}

setInterval(moveCarousel, 3000); // Mueve el carrusel cada 3 segundos

// Función para buscar películas
document.getElementById('search').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    // Implementar lógica para filtrar las películas
    console.log(query); // Solo muestra la búsqueda por ahora
});
