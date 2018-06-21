import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  dati = [];

  constructor(public navCtrl: NavController,public http: Http) {
    
  }

    ionViewWillLoad(){
      this.http.get('./assets/elenco.json').map(res => res.json()).subscribe(data => {
            this.dati = data;
          });
    
    }

    stampa(bottone)
    {
      var s= bottone.content;
      $("#el1").append("<button ion-button outline>"+s+"</button>");
      console.log(s);
    }

    

}
