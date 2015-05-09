var url = 'http://23.253.209.32:1880';

$(document).ready(function(){
   console.log("Loaded");
   setInterval(updateSensors, 1000);
});

var updateSensors = function() {
   var motionText, lightText;
   $.get(url + '/motion', function(data, status){
      $("#motionValue").text(parseInt(data) ? "YES" : "NO");
   });
   $.get(url + '/light', function(data, status){
      lightText = "Light: ";
      $("#lightValue").text(parseFloat(data) > .5 ? "YES" : "NO");
    });
}

