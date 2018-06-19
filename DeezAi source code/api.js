var request = require('request');
var $ = require('jquery');
var urlImage;

function prova(){
    request.post({
  url: 'https://api.deepai.org/api/colorizer',
  headers: {
      'Api-Key': 'd0691d8c-8e7c-4464-81be-22ae715251b6'
  },
  formData: {
      'image': urlImage,
  }
}, function callback(err, httpResponse, body) {
  if (err) {
      console.error('request failed:', err);
      return;
  }
  var response = JSON.parse(body);
  url = response.output_url;
  $("img").attr("src", response.output_url);
});}

$(document).ready(function(){
    $("#btn").click(function(){
        urlImage = $("#inputImg").val();
        console.log(urlImage);
        prova();
    });
});

