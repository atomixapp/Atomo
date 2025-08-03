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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

// Variables de la interfaz
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const moviesContainer = document.getElementById("moviesContainer");

// Mostrar películas desde Firestore
function mostrarPeliculas() {
    firestore.collection("peliculas").get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                const pelicula = doc.data();
                const div = document.createElement("div");
                div.textContent = `${pelicula.titulo} (${pelicula.anio})`;
                moviesContainer.appendChild(div);
            });
        })
        .catch(error => console.error("Error al cargar las películas: ", error));
}

// Iniciar sesión
loginButton.addEventListener("click", () => {
    const email = prompt("Ingrese su correo:");
    const password = prompt("Ingrese su contraseña:");
    
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log("Usuario autenticado:", user.email);
            loginButton.style.display = "none";
            logoutButton.style.display = "block";
            mostrarPeliculas();
        })
        .catch(error => alert("Error al iniciar sesión: " + error.message));
});

// Cerrar sesión
logoutButton.addEventListener("click", () => {
    auth.signOut()
        .then(() => {
            console.log("Usuario desconectado");
            loginButton.style.display = "block";
            logoutButton.style.display = "none";
            moviesContainer.innerHTML = ""; // Limpiar las películas
        })
        .catch(error => console.error("Error al cerrar sesión: ", error));
});
