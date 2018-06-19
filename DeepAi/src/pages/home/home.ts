import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {request} from 'require';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.prova();
  }

  prova(){
    request.post({
      url: 'https://api.deepai.org/api/colorizer',
      headers: {
          'Api-Key': 'd0691d8c-8e7c-4464-81be-22ae715251b6'
      },
      formData: {
          'image': 'https://cdn.mos.cms.futurecdn.net/5PMe5hr8tjSS9Nq5d6Cebe.jpg',
      }
    }, function callback(err, httpResponse, body) {
      if (err) {
          console.error('request failed:', err);
          return;
      }
      var response = JSON.parse(body);
      console.log(response);
    });
  }

}
