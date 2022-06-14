const http = require('http');
//import http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text-html; charset=utf-8'});
    res.end('Isto é um servidor http da aula01');
}).listen(3030, () => {
    console.log('Server is running');
})