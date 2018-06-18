import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  dati = [];
  pagina;

  constructor(public navCtrl: NavController,public http: Http,public navParams: NavParams) {
    this.pagina = this.navParams.get("data");
    console.log(this.navParams.get("data"));
    
  }

    ionViewWillLoad(){
      this.http.get('./assets/elenco.json').map(res => res.json()).subscribe(data => {
            this.dati = data;
          });
    }

    

}
