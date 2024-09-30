exports.handler = async function(event, context) {
  const randomNumber = Math.floor(Math.random() * (9 - 7 + 1)) + 7;

  // Aquí debes usar algún método para almacenar el total del acumulador (base de datos, archivo, etc.)
  // Como ejemplo simple, vamos a devolver solo el número generado
  return {
    statusCode: 200,
    body: JSON.stringify({ number: randomNumber }),
  };
};
