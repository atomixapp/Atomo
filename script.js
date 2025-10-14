// Datos simulados de películas
const movies = [
  { title: 'Barney & Friends', category: 'kids', year: 1992, img: 'https://via.placeholder.com/250x150', rating: 7 },
  { title: 'The Big Year', category: 'comedy', year: 2011, img: 'https://via.placeholder.com/250x150', rating: 6 },
  { title: 'Moonfall', category: 'sci-fi', year: 2024, img: 'https://via.placeholder.com/250x150', rating: 8 },
  { title: 'The Big Family', category: 'comedy', year: 2021, img: 'https://via.placeholder.com/250x150', rating: 5 },
  // Más películas
];

let currentCategory = 'all';

// Función para renderizar las cards de películas
function renderMovies() {
  const movieCardsContainer = document.getElementById('movie-cards');
  movieCardsContainer.innerHTML = ''; // Limpiar contenido previo
  const filteredMovies = movies.filter(movie => currentCategory === 'all' || movie.category === currentCategory);

  filteredMovies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}">
      <div class="card-info">
        <h3>${movie.title}</h3>
        <div class="rating">⭐ ${movie.rating}</div>
        <div class="year">${movie.year}</div>
      </div>
    `;
    movieCardsContainer.appendChild(card);
  });
}

// Función para filtrar por categoría
function filterByCategory(category) {
  currentCategory = category;
  document.getElementById('category-title').textContent = category.charAt(0).toUpperCase() + category.slice(1);
  renderMovies();
}

// Evento de búsqueda
document.getElementById('search').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
  const movieCardsContainer = document.getElementById('movie-cards');
  movieCardsContainer.innerHTML = '';

  filteredMovies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}">
      <div class="card-info">
        <h3>${movie.title}</h3>
        <div class="rating">⭐ ${movie.rating}</div>
        <div class="year">${movie.year}</div>
      </div>
    `;
    movieCardsContainer.appendChild(card);
  });
});

// Inicializar la vista
renderMovies();
