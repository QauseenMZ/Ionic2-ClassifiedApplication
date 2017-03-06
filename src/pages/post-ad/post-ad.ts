import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdsService, Vehicle } from '../../Services/AdsService.service';
/*
  Generated class for the PostAd page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-ad',
  templateUrl: 'post-ad.html'
})
export class PostAdPage {

  cat: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private adsService: AdsService) {}

  newAd(form){
    this.adsService.submitAd(form, this.cat);
    console.log(form);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostAdPage');
  }

}
