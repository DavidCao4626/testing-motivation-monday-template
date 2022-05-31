const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

// Feeding homepage
const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  

  // Feeding YouTube videos from server to the user
  }else if (page == '/api') {
    res.writeHead(200, {'Content-Type': 'application/json'});

        // Arrays being hosted
        const arrayOfURLs = ['https://www.youtube.com/embed/dV9worye5g0', 'https://www.youtube.com/embed/3sK3wJAxGfs', 'https://www.youtube.com/embed/01CL029k7pU']
        
        // Randomizing the YouTube video being sent to the user
        let randomURL = arrayOfURLs[Math.floor(Math.random() * arrayOfURLs.length)]
        
        // Feeding out the YouTube video that was randomly selected
        const objToJson = {
          randomURL : randomURL
        }
        res.end(JSON.stringify(objToJson));
  
  // Feeding CSS
  }else if (page == '/css/bootstrap.min.css'){
    fs.readFile('css/bootstrap.min.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/css/templatemo-style.css'){
    fs.readFile('css/templatemo-style.css', function(err, data) {
      res.write(data);
      res.end();
    });
   
  
  // Feeding JS
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
  });
  }else if (page == 'js/jquery.min.js'){
    fs.readFile('js/jquery.min.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == 'js/templatemo-script.js'){
    fs.readFile('js/templatemo-script.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  // Feeding clean/designed error page
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});
const PORT = process.env.PORT || 8000;
server.listen(PORT);