import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  foto: any;
  prova: any;
  conferma = false;
  fotocamera = true;
  ct;

  sigillo = {
    nome:"Sigillo N."+this.ct,
    numero:""+Math.random() * (99999 - 1) + 1,
    foto: "",
    base64:""
  }

  constructor(public navCtrl: NavController,private camera: Camera,private emailComposer: EmailComposer) {
    this.ct = 1;
    this.emailComposer.addAlias('gmail', 'com.google.android.gm');
  }

  invia(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
      }
     });

     this.sigillo.nome = "Sigillo N."+this.ct;
     
     this.emailComposer.open({
      app: 'gmail',
      to: 'cavazzatommaso00@gmail.com',
       attachments: [
        'base64:'+this.sigillo.numero+'.png//'+this.prova,
       ],
       subject: this.sigillo.nome,
       body: this.sigillo.nome+" ID:"+this.sigillo.numero,
       isHtml: true
    });
     this.ct++;

  }


  scatta(){
    const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   this.foto = 'data:image/jpeg;base64,' + imageData;
   this.prova = imageData;
   this.conferma = true;
   this.fotocamera = false;
  }, (err) => {
  });
  this.sigillo.nome = "Sigillo N."+this.ct;
}
  

}
