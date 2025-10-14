// script.js
document.querySelector('.sidebar-search').addEventListener('input', function(event) {
    let searchTerm = event.target.value.toLowerCase();
    let allCards = document.querySelectorAll('.movie-card');

    allCards.forEach(card => {
        let text = card.querySelector('img').alt.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Géneros barra lateral
const genres = {
    todos: [
        { title: 'Película 1', genre: 'Acción', rating: '7/10', img: 'https://via.placeholder.com/200x300/3498db/ffffff?text=Película+1' },
        { title: 'Película 2', genre: 'Comedia', rating: '8/10', img: 'https://via.placeholder.com/200x300/2ecc71/ffffff?text=Película+2' },
        { title: 'Película 3', genre: 'Drama', rating: '6/10', img: 'https://via.placeholder.com/200x300/e74c3c/ffffff?text=Película+3' },
        { title: 'Película 4', genre: 'Terror', rating: '7/10', img: 'https://via.placeholder.com/200x300/1abc9c/ffffff?text=Película+4' },
        { title: 'Película 5', genre: 'Ciencia Ficción', rating: '9/10', img: 'https://via.placeholder.com/200x300/9b59b6/ffffff?text=Película+5' },
    ],
    accion: [
        { title: 'Película 1', genre: 'Acción', rating: '7/10', img: 'https://via.placeholder.com/200x300/3498db/ffffff?text=Película+1' },
        { title: 'Película 6', genre: 'Acción', rating: '8/10', img: 'https://via.placeholder.com/200x300/2ecc71/ffffff?text=Película+6' },
    ],
    comedia: [
        { title: 'Película 2', genre: 'Comedia', rating: '8/10', img: 'https://via.placeholder.com/200x300/2ecc71/ffffff?text=Película+2' },
    ],
    drama: [
        { title: 'Película 3', genre: 'Drama', rating: '6/10', img: 'https://via.placeholder.com/200x300/e74c3c/ffffff?text=Película+3' },
    ],
    // Añadir más géneros y películas según se necesite
};

const genreLinks = document.querySelectorAll('#genres-list a');
const categoryTitle = document.querySelector('.category-title');
const movieGallery = document.querySelector('#movie-gallery');

genreLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const genre = link.getAttribute('data-genre');
        
        // Actualizamos el título de la categoría en la barra superior
        categoryTitle.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
        
        // Limpiar la galería antes de agregar nuevas películas
        movieGallery.innerHTML = '';

        // Mostrar las películas del género seleccionado
        const selectedMovies = genres[genre] || genres.todos;
        selectedMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            
            const img = document.createElement('img');
            img.src = movie.img;
            movieCard.appendChild(img);

            const cardDetails = document.createElement('div');
            cardDetails.classList.add('card-details');
            const rating = document.createElement('span');
            rating.classList.add('rating');
            rating.textContent = movie.rating;
            cardDetails.appendChild(rating);
            const description = document.createElement('p');
            description.textContent = `${movie.genre}, ${movie.title}`;
            cardDetails.appendChild(description);
            movieCard.appendChild(cardDetails);

            movieGallery.appendChild(movieCard);
        });
    });
});
