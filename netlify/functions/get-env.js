// /.netlify/functions/get-env.js

exports.handler = async (event, context) => {
  const clave = process.env.CLAVE || 'ValorPredeterminado'; // Obtener la variable de entorno 'clave'

  return {
    statusCode: 200,
    body: JSON.stringify({ clave })
  };
};
