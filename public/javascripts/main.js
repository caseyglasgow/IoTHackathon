var gotData = function(result, status, xhr) {
	console.log("Got Result");
} 
<<<<<<< HEAD
var url = 'http://23.253.209.32:1880';
=======
var urlReq = 'http://23.253.209.32:1880/light';
>>>>>>> origin/master




$(document).ready(function(){
   console.log("Loaded");
	console.log("test");
   $("button").click(function(){
<<<<<<< HEAD
    var motionText, lightText;
      $.get(url + '/motion', function(data, status){
         motionText = "Motion: "
         $("#motion").text(motionText.concat(parseInt(data) ? "ON" : "OFF"));
      });
      $.get(url + '/light', function(data, status){
         lightText = "Light: ";
         $("#light").text(lightText.concat(parseFloat(data) > .5 ? "ON" : "OFF"));
=======
      $.get(urlReq, function(data, status){
         console.log("got data " + data);

>>>>>>> origin/master
      });
   });
  
});

