
var url = 'http://23.253.209.32:1880';

$(document).ready(function(){
   console.log("Loaded");
	console.log("test");
   setInterval(updateSensors, 1000);
  
});

var updateSensors = function() {
   var motionText, lightText;
   $.get(url + '/motion', function(data, status){
      motionText = "Motion: "
      $("#motion").text(motionText.concat(parseInt(data) ? "ON" : "OFF"));
   });
   $.get(url + '/light', function(data, status){
      lightText = "Light: ";
      $("#light").text(lightText.concat(parseFloat(data) > .5 ? "ON" : "OFF"));
    });
}

