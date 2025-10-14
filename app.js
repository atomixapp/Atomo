// firebase-config.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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
