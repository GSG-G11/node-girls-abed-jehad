const http = require('http');
const router = require('./router');

// const router = (request, response) => {
//   const {method, url} = request;

//   if (url === '/') {
//     const HtmlfilePath = path.join(
//       __dirname,
//       'public',
//       request.url === '/' ? 'index.html' : request.url
//     );
//     // const cssFilePath = path.join(__dirname, 'public', 'main.css');
//     // const imgFilePath = path.join(__dirname, 'public', 'img', 'image.jpg');
//     // const javaScriptFilePath = path.join(__dirname, 'public', 'script.js');
//     let extName = path.extname(HtmlfilePath);
//     switch (extName) {
//       case '.js':
//         contentType = 'text/javascript';
//         break;
//       case '.css':
//         contentType = 'text/css';
//         break;
//       case '.json':
//         contentType = 'application/json';
//         break;
//       case '.png':
//         contentType = 'image/png';
//         break;
//       case '.jpg':
//         contentType = 'image/jpg';
//         break;
//       default:
//         contentType = 'text/html';
//         break;
//     }

//     fs.readFile(HtmlfilePath, (err, content) => {
//       if (err) {
//         showErrorPage();
//       } else {
//         response.writeHead(200, {'Content-Type': contentType});
//         response.end(content, 'utf-8');
//       }
//     });

//     // fs.readFile(cssFilePath, (err, content) => {
//     //   if (err) {
//     //     showErrorPage();
//     //   } else {
//     //     response.writeHead(200, {'Content-Type': 'text/css'});
//     //     response.write(content);
//     //   }
//     // });

//     // fs.readFile(imgFilePath, (err, content) => {
//     //   if (err) {
//     //     showErrorPage();
//     //   } else {
//     //     response.writeHead(200, {'Content-Type': 'image/jpg'});
//     //     response.write(content);
//     //   }
//     // });

//     // fs.readFile(javaScriptFilePath, (err, content) => {
//     //   if (err) {
//     //     showErrorPage();
//     //   } else {
//     //     response.writeHead(200, {'Content-Type': 'text/javascript'});
//     //     response.write(content);
//     //     response.end();
//     //   }
//     // });
//   } else if (url === '/node') {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write(message);
//     response.end();
//   } else if (url === '/girls') {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write('Girls Node workshop');
//     response.end();
//   }
// };

// const server = http.createServer(router);

//Create the server
const server = http.createServer(router);

const PORT = 8000;

//Start the server
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
