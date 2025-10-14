// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyC8hn1eHtuRg9AWwMt2cZv6mpaOaVmJH_4",
  authDomain: "atomo-40588.firebaseapp.com",
  projectId: "atomo-40588",
  storageBucket: "atomo-40588.firebasestorage.app",
  messagingSenderId: "545925442732",
  appId: "1:545925442732:web:50f8089bcbe77d63c74309"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

// app.js
const movieList = document.getElementById('movie-list');

function loadMovies() {
  db.collection('movies').get().then(snapshot => {
    snapshot.forEach(doc => {
      const movie = doc.data();
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie-item');
      movieElement.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <p>${movie.year}</p>
        </div>
        <div class="rating">${movie.rating}</div>
      `;
      movieList.appendChild(movieElement);
    });
  });
}

document.addEventListener('DOMContentLoaded', loadMovies);
