var urlReq = 'http://smartobjectservice.com:8080/domain2/endpoints/New-Team/3311/0/5706?sync=true';

var gotData = function(xhr, status) {
   console.log(status);
}

var options = {
    url: urlReq,
    
    type: 'GET',
    Content-Type: 'application/json',
    username: 'demo',
    password: 'secret'
    complete: gotData
 }


var urlReq = 'http://smartobjectservice.com:8080/domain2/endpoints/New-Team/3311/0/5706?sync=true'

$(document).ready(function(){
   console.log("Loaded");

   $("button").click(function(){

      $.ajax(options)
   })
  
});
