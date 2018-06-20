var archiver = require('archiver'),
    archive  = archiver('zip'),
     fs       = require('fs');
var $ = require('jquery');
var cloudinary = require('cloudinary');

var ct= 0;
var fileNames = [];

cloudinary.config({ 
    cloud_name: 'dz3pvtd53', 
    api_key: '426177361659159', 
    api_secret: 'k0rperTbYo1ol0kJc7XD57OGJFU' 
  });
  
     
function createZip(){
    archive  = archiver('zip');

    min = Math.ceil("0");
    max = Math.floor(fileNames.length);
    var nomeZip = fileNames[0].split(".");
     
    var output = fs.createWriteStream(__dirname + '/'+nomeZip[0]+'.zip');

    archive.pipe(output);
    
    var getStream = function(fileName){
        return fs.readFileSync(fileName);
    }

    
    for(i=0; i<fileNames.length; i++){
        var path = __dirname + '/'+fileNames[i];
        archive.append(getStream(path), { name: fileNames[i]});
    }
    
    archive.finalize(function(err, bytes) {
      if (err) {
          console.log(err);
          
        throw err;
      }

      
      console.log(bytes + ' total bytes');
    });

}

$(document).ready(function(){
    $("#btn").click(function(){
        fileNames = [];
        indirizzo = $("#inputPath").val();
        fs.readdir(indirizzo,(errore,files)=>{
            if(errore){
                throw errore;
            }
        for(var ct=0;ct<files.length;ct++){
            fileNames.push(files[ct]);
        }
        console.dir(fileNames);
        
        __dirname = indirizzo;
        createZip();
        })
    });
});


$(document).ready(function(){
    $("#btnImg").click(function(){
        fileNames = [];
        indirizzo = $("#inputPath").val();
        fs.readdir(indirizzo,(errore,files)=>{
            if(errore){
                throw errore;
            }
        for(var ct=0;ct<files.length;ct++){
            fileNames.push(files[ct]);
            cloudinary.uploader.upload(indirizzo+'/'+fileNames[ct], function(result) { 
                $("#result").append("</br><a href='"+result.url+"'>"+result.public_id+"</a>");
                console.log(result) 
              });
        }
        console.dir(fileNames);
        })
        
    });
});



