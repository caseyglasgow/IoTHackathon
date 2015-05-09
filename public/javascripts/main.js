var url = 'http://23.253.209.32:1880';
var motionVals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

$(document).ready(function(){
   console.log("Loaded");
   setInterval(updateSensors, 1000);
});

var updateSpread = function(data) {
   var i = 0;
   for (i = 0; i < motionVals.length; i++) {
      motionVals[i] = motionVals[i + 1];
   }
   motionVals[motionVals.length - 1] = data;
   var sum = 0;
   for (i = 0; i < motionVals.length; i++) {
      sum += motionVals[i];
   }

   spread = sum / motionVals.length;
   console.log(motionVals);
   console.log(spread);
   
   return spread;
}

var updateSensors = function() {
   var motionText, lightText;
   $.get(url + '/motion', function(data, status){
      motionText = "Motion: "
      var aveMotion = updateSpread(parseInt(data));
      $("#motion").html(motionText.concat((parseInt(data) ? "ON&nbsp;" : "OFF") + " &nbsp; &nbsp; &nbsp;AVG: " + aveMotion));
   });
   $.get(url + '/light', function(data, status){
      lightText = "Light: ";
      $("#lightValue").text(parseFloat(data) > .5 ? "YES" : "NO");
    });
}

