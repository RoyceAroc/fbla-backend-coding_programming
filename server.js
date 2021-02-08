const http = require('http');
const path = require("path");
var url = require('url');
const express = require("express");
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3000; 
const { parse } = require('querystring');
const { Connection, Request } = require("tedious");

app.use(cors())
var fs = require('fs');

const config = {
  authentication: {
    options: {
      userName: "RoyceA", 
      password: "TeamR0cket!" 
    },
    type: "default"
  },
  server: "quizportal.database.windows.net", 
  options: {
    database: "quizportal", 
    encrypt: true
  }
};


const connection = new Connection(config);

connection.on("connect", err => {
  if (err) {
    console.error(err.meCssage);
  }
});


app.get('*', function(req, res) {
  fs.readFile('file.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});


app.listen(port, () => {
  
});
