const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
const data = require('./posts.json');

function showErrorPage(response) {
  response.writeHead(500, {'Content-Type': 'text/html'});
  response.end('<h1>Server Error, Contact the Administrator</h1>');
}
const router = (req, res) => {
  const filePath = path.join(
    __dirname,
    '..',
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  //Get extension of the file
  const extName = path.extname(filePath);
  let contentType = 'text/html';

  switch (extName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    default:
      contentType = 'text/html';
      break;
  }

  //Render the public files into the server
  fs.readFile(filePath, (err, content) => {
    if (err) {
      showErrorPage(res);
    } else {
      res.writeHead(200, {'Content-Type': contentType});
      res.end(content, 'utf-8');
    }
  });

  //Sending the data to the server
  if (req.method === 'POST') {
    let allTheData = '';
    //Get the data from the client
    req.on('data', chunkOfData => {
      allTheData += chunkOfData;
    });

    req.on('end', () => {
      //Parse the data from the client
      const convertedData = querystring.parse(allTheData);
      const post = convertedData.post;
      const timeStamp = Date.now();

      data[timeStamp] = post;
      const filePath = path.join(__dirname, 'posts.json');
      console.log(data);
      //Write the post to the file
      fs.writeFile(filePath, JSON.stringify(data), err => {
        if (err) {
          console.log(err);
        } else {
          console.log('The file has been saved!');
        }
      });

      fs.readFile(filePath, (err, content) => {
        if (err) {
          showErrorPage(res);
        } else {
          res.writeHead(200, {'Content-Type': 'application/json'});
          console.log(content.toString('utf-8'));
          res.end(content, 'utf-8');
        }
      });

      //Redirect to index after posting the data
      res.writeHead(302, {Location: '/'});
      res.end();
    });
  }
};

module.exports = router;
