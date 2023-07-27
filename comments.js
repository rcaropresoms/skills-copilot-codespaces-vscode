//Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { parse } = require('querystring');
const comments = require('./comments.json');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    // console.log('Request received');

    // // res.write('Hello World');
    // // res.end();

    // // res.setHeader('Content-Type', 'text/html');
    // // res.write('<html>');
    // // res.write('<head><title>My First Page</title></head>');
    // // res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    // // res.write('</html>');
    // // res.end()