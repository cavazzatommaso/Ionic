import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {DatiPage} from "../dati/dati";
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  articles: any;
  prova;
  api: string = "1d1568c34a6647d8ab4885d0187746f0";
  category: string = "business";

  toggle: boolean= false;

  constructor(public navCtrl: NavController,public http: Http,public modalCtrl: ModalController,public loadingCtrl: LoadingController) {
    this.loadData();
  }


  loadData(){
    /*this.http.get('https://newsapi.org/v2/top-headlines?country=it&category='+this.category+'&apiKey='+this.api).map(res => res.json()).subscribe(
      data => {
        this.articles = data.articles;
        console.log(this.articles);
        
      }, err => {
          console.log("Oops!");
      }
  );*/
  }

  openModal(event){ 
    const modal = this.modalCtrl.create("DatiPage", {dati : event});
    modal.present();
  }

}
