// no se instala nada porque en las caracteristicas de node nos
//permite realizar un servidor web
const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Damian',
            edad: 22,
            url: req.url
        }


        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');