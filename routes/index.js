var express = require('express');
var router = express.Router();
var http = require('http');
var express = require("express");
var RED = require("node-red");

var app = express();

app.use("/", express.static("public"));

var server = http.createServer(app);

var settings = {
    httpAdminRoot:"/red",
    httpNodeRoot: "/api",
    userDir:"/home/nol/.nodered/",
    functionGlobalContext: { }    // enables global context
};

// Initialise the runtime with a server and settings
RED.init(server,settings);

app.use(settings.httpAdminRoot,RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot,RED.httpNode);

server.listen(1880);

// Start the runtime
RED.start();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TITLE' });


  console.log("test");
});

var options = {
    host: 'somesite.com',
    port: 443,
    path: '/some/path',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};



module.exports = router;
