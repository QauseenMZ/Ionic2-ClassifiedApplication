import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdsService, MobTab } from '../../Services/AdsService.service';

/*
  Generated class for the MobTab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'mob-tab',
  templateUrl: 'mob-tab.html'
})
export class MobTabPage {

  mt_arr: MobTab[] = [];
  // postAd = PostAdPage;

  constructor(private adsService: AdsService) {
    this.mt_arr = this.adsService.mt_ad_arr;
    this.adsService.item_mt.subscribe((snapshots) => {
        snapshots.forEach(snapshot => {
            this.mt_arr.push(snapshot.val());
        });
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MobTabPage');
  }

}
