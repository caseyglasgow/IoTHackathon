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

