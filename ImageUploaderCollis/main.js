var archiver = require('archiver'),
    archive  = archiver('zip'),
     fs       = require('fs');
var $ = require('jquery');
var cloudinary = require('cloudinary');

var ct= 0;
var fileNames = [];
var estensione;

cloudinary.config({ 
    //insert your api key
    cloud_name: '', 
    api_key: '', 
    api_secret: '' 
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

    $("#result").html("</br><h1>Completato</h1>");
    
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
            estensione = files[ct].split(".");
            if(estensione[1]=="jpg"||estensione[1]=="jpeg"){
                fileNames.push(files[ct]);
            }else{
                console.log("Non aggiunto errore estensione");
                
            }

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
        $("#result").html("");
        for(var ct=0;ct<files.length;ct++){
            fileNames.push(files[ct]);
            estensione = files[ct].split(".");
            if(estensione[1]=="jpg"||estensione[1]=="jpeg"){
                cloudinary.uploader.upload(indirizzo+'/'+fileNames[ct], function(result) { 
                    $("#result").append("</br><img src='"+result.url+"'></img>");
                    console.log(result) 
                  });
            } else{
                console.log("Estensione sbagliata");
                
            }
            
        }
        console.dir(fileNames);
        })
        
    });
});





