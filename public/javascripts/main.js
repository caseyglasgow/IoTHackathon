var gotData = function(result, status, xhr) {
	console.log("Got Result");
} 
var urlReq = 'http://23.253.209.32:1880/light';




$(document).ready(function(){
   console.log("Loaded");
	console.log("test");
   $("button").click(function(){
      $.get(urlReq, function(data, status){
         console.log("got data " + data);

      });
   });
  
});

