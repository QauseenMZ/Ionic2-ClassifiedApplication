import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdsService, HomeAppliance } from '../../Services/AdsService.service';

/*
  Generated class for the HomeAppliances page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'home-appliances',
  templateUrl: 'home-appliances.html'
})
export class HomeAppliancesPage {

  happ_arr: HomeAppliance[] = [];
  // postAd = PostAdPage;

  constructor(private adsService: AdsService) {
    this.happ_arr = this.adsService.happ_ad_arr;
    this.adsService.item_ha.subscribe((snapshots) => {
        snapshots.forEach(snapshot => {
            this.happ_arr.push(snapshot.val());
        });
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeAppliancesPage');
  }

}
