// /js/environment.js

// Hacer una solicitud HTTP para obtener el valor de la variable de entorno 'clave'
fetch('/.netlify/functions/get-env')
  .then(response => response.json())
  .then(data => {
    const clave = data.clave;
    // Mostrar el valor en un elemento HTML
    document.getElementById('clave-value').textContent = clave;
  })
  .catch(error => {
    console.error('Error al obtener la variable de entorno:', error);
  });
