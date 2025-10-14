// Simulación de datos de películas desde Firebase
const movies = [
  { title: 'Película 1', category: 'accion', img: 'https://via.placeholder.com/200x150' },
  { title: 'Película 2', category: 'comedia', img: 'https://via.placeholder.com/200x150' },
  { title: 'Película 3', category: 'accion', img: 'https://via.placeholder.com/200x150' },
  { title: 'Película 4', category: 'comedia', img: 'https://via.placeholder.com/200x150' },
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
      </div>
    `;
    movieCardsContainer.appendChild(card);
  });
}

// Función para filtrar por categoría
function filterByCategory() {
  const categorySelect = document.getElementById('categories');
  currentCategory = categorySelect.value;
  document.getElementById('category-title').textContent = categorySelect.options[categorySelect.selectedIndex].text;
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
      </div>
    `;
    movieCardsContainer.appendChild(card);
  });
});

// Cargar películas al inicio
renderMovies();
