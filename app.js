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

// Referencias a los elementos del DOM
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");
const logoutButton = document.getElementById("logout-button");
const userStatus = document.getElementById("userStatus");
const userName = document.getElementById("user-name");
const showRegister = document.getElementById("show-register");
const showLogin = document.getElementById("show-login");

// Cambiar entre formularios
showRegister.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

showLogin.addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
});

// Función para iniciar sesión
loginButton.addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario autenticado:", user.email);
            loginForm.style.display = "none";
            userStatus.style.display = "block";
            userName.textContent = user.email;
        })
        .catch((error) => {
            alert("Error al iniciar sesión: " + error.message);
        });
});

// Función para registrar usuario
registerButton.addEventListener("click", () => {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario registrado:", user.email);
            registerForm.style.display = "none";
            userStatus.style.display = "block";
            userName.textContent = user.email;
        })
        .catch((error) => {
            alert("Error al registrar: " + error.message);
        });
});

// Función para cerrar sesión
logoutButton.addEventListener("click", () => {
    auth.signOut()
        .then(() => {
            console.log("Usuario desconectado");
            userStatus.style.display = "none";
            loginForm.style.display = "block";
        })
        .catch((error) => {
            console.error("Error al cerrar sesión: ", error);
        });
});
