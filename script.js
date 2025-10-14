// Importación de Firebase (API modular de Firebase 9.x)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC8hn1eHtuRg9AWwMt2cZv6mpaOaVmJH_4",
  authDomain: "atomo-40588.firebaseapp.com",
  projectId: "atomo-40588",
  storageBucket: "atomo-40588.firebasestorage.app",
  messagingSenderId: "545925442732",
  appId: "1:545925442732:web:50f8089bcbe77d63c74309"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let currentCategory = 'all';
let movies = []; // Lista de películas que se obtendrán desde Firestore

// Función para obtener las películas de Firestore
async function fetchMovies() {
  try {
    // Usamos la nueva API modular para obtener las colecciones
    const querySnapshot = await getDocs(collection(db, 'peliculas'));
    movies = []; // Limpiar el array antes de cargar nuevos datos

    querySnapshot.forEach(doc => {
      const data = doc.data();
      movies.push({
        id: doc.id,
        title: data.titulo,
        image: data.imagen,
        rating: data.rating || 'N/A', // Asegurarnos de que tenga un valor de rating si no está disponible
        year: data.year || 'Desconocido' // Asegurarnos de que tenga un valor de year si no está disponible
      });
    });

    renderMovies(); // Llamar a renderMovies después de obtener los datos de Firestore
  } catch (error) {
    console.error("Error al obtener las películas: ", error);
  }
}

// Función para renderizar las cards de películas
function renderMovies() {
  const movieCardsContainer = document.getElementById('movie-cards');
  movieCardsContainer.innerHTML = ''; // Limpiar contenido previo

  const filteredMovies = movies.filter(movie => currentCategory === 'all' || movie.category === currentCategory);

  filteredMovies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Verificamos si la imagen está disponible antes de agregarla
    const imageUrl = movie.image ? movie.image : 'https://via.placeholder.com/250x150'; // Imagen por defecto si no hay URL
    
    console.log("Cargando imagen: ", imageUrl); // Depuración

    card.innerHTML = `
      <img src="${imageUrl}" alt="${movie.title}">
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
      <img src="${movie.image}" alt="${movie.title}">
      <div class="card-info">
        <h3>${movie.title}</h3>
        <div class="rating">⭐ ${movie.rating}</div>
        <div class="year">${movie.year}</div>
      </div>
    `;
    movieCardsContainer.appendChild(card);
  });
});

// Llamar a la función fetchMovies para cargar las películas desde Firestore
fetchMovies();
