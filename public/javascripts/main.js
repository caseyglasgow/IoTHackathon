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

var gotData = function(result, status, xhr) {
	console.log(result);
} 
var urlReq = 'http://smartobjectservice.com:8080/domain2/endpoints/New-Team/3311/0/5706?sync=true'
var options = {
    type: 'GET',
    url: urlReq,
    contentType: 'text/plain',
    scriptCharset: 'utf-8',

    dataType: '*/*',
    username: 'demo',
    password: 'secret',
    success: gotData
 }




$(document).ready(function(){
   console.log("Loaded");
	console.log("test");
   $("button").click(function(){

     $.ajax(options)
   })
  
});

