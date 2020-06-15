//helpers
// para poder ocupar los healpers se tienen que exportar a 
//la carpeta de destino. en este caso el que dice server.js
const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
//esta funcion llamada capitalizar hace que la primera letra venga en mayuscula
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});