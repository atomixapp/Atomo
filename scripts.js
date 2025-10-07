// Configuración de Firebase (esto debe estar en el HTML donde se inicializa Firebase)
const db = firebase.firestore();

// Función para mostrar las películas de una categoría
function showCategory(category) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; // Limpiar galería antes de agregar nuevas películas

  // Cargar las películas de Firebase
  db.collection('peliculas')
    .where('categoria', '==', category) // Filtramos por la categoría
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const pelicula = doc.data();
        const imgElement = document.createElement('img');
        imgElement.src = pelicula.imagen;
        imgElement.alt = pelicula.titulo;
        gallery.appendChild(imgElement);
      });
    })
    .catch(error => {
      console.error("Error al cargar las películas: ", error);
    });
}

// Mostrar la primera categoría por defecto (Acción)
showCategory('accion');
