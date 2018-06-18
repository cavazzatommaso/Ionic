import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DatiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dati',
  templateUrl: 'dati.html',
})
export class DatiPage {

  utente: any;
  split: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  ionViewWillLoad(){
    this.utente = this.navParams.get("dati");
    this.split = this.utente.dob.split(" ");
    this.utente.dob = this.split[0];    
  }

  ionViewDidLoad() {
  }

}
