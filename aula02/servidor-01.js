import http from 'http';
import currentDate from './currentDate.js'
import myName from './myName.js'

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8'});

    const currenttime = currentDate().toLocaleTimeString();
    const name = myName;
    
    res.end(`<h1>Welcome ${name}</h1>Isto é um servidor http da aula02!${currenttime}`);


}).listen(3030, () => {
    console.log('Server is running');
})