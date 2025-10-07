// Configuración de Firebase (esto debe estar en el HTML donde se inicializa Firebase)
const db = firebase.firestore();

// Función para mostrar las películas de una categoría
function showCategory(category) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; // Limpiar galería antes de agregar nuevas películas

  // Cargar las películas de Firebase
  db.collection('peliculas') // Asegúrate de que el nombre de la colección sea 'peliculas' en Firestore
    .where('categoria', '==', category) // Filtramos por la categoría
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        gallery.innerHTML = '<p>No hay películas disponibles en esta categoría.</p>';
      } else {
        snapshot.forEach(doc => {
          const pelicula = doc.data();
          const imgElement = document.createElement('img');
          imgElement.src = pelicula.imagen; // Usar la URL de la imagen
          imgElement.alt = pelicula.titulo; // El título de la película como alt
          gallery.appendChild(imgElement);
        });
      }
    })
    .catch(error => {
      console.error("Error al cargar las películas: ", error);
      gallery.innerHTML = '<p>Hubo un error al cargar las películas.</p>';
    });
}

// Mostrar la primera categoría por defecto (Acción)
showCategory('accion');
