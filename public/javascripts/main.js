var options = {
    host: '23.253.209.32',
    port: 8080,
    path: 'domain2/endpoints/New-Team/3202/0/5600?sync=true',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

var url = 'smartobjectservice.com:8080/domain2/endpoints/New-Team/3202/0/5600?sync=true'

$(document).ready(function(){
   console.log("Loaded");

   $("button").click(function(){
      $.get(url, function(data, status){
         alert("Data: " + data + "\nStatus: " + status);
      })
   })
  
});
