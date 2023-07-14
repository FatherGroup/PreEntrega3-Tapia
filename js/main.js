// Obtener los elementos de las secciones
var aboutSection = document.getElementById('about');
var contactSection = document.getElementById('contact');
var servicesSection = document.getElementById('services');
var projectsSection = document.getElementById('projects');

// Array con los nombres de los archivos HTML a cargar
var fileNames = ['about.html', 'contact.html', 'services.html', 'projects.html'];

// Función para cargar el contenido de un archivo HTML en una sección
function loadContent(section, fileName) {
  return fetch('pages/' + fileName)
    .then(function(response) {
      return response.text();
    })
    .then(function(content) {
      section.innerHTML = content;
    })
    .catch(function(error) {
      console.log('Error al cargar el contenido del archivo "' + fileName + '":', error);
    });
}

// Array para almacenar las promesas de carga de contenido
var promises = [];

// Cargar el contenido de cada archivo HTML y almacenar las promesas en el array
fileNames.forEach(function(fileName) {
  var section;

  // Determinar la sección correspondiente según el nombre del archivo
  switch (fileName) {
    case 'about.html':
      section = aboutSection;
      break;
    case 'contact.html':
      section = contactSection;
      break;
    case 'services.html':
      section = servicesSection;
      break;
    case 'projects.html':
      section = projectsSection;
      break;
    default:
      break;
  }

  // Cargar el contenido del archivo y agregar la promesa al array
  if (section) {
    promises.push(loadContent(section, fileName));
  }
});

// Cargar todos los archivos HTML de manera simultánea
Promise.all(promises)
  .then(function() {
    console.log('Contenido cargado exitosamente.');
  });
