import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdsService, HomeAppliance, Vehicle, MobTab } from '../../Services/AdsService.service';
import { DetailsPage } from '../details/details';
/*
  Generated class for the AllAds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'all-ads',
  templateUrl: 'all-ads.html'
})
export class AllAdsPage {

  allAds_arr: any[] = [];
 
  constructor(private adsService: AdsService, public navCtrl: NavController, public navParams: NavParams) {
    this.allAds_arr = this.adsService.veh_ad_arr;
    this.adsService.mt_ad_arr.forEach(ad => {
        this.allAds_arr.push(ad);
    });
    this.adsService.happ_ad_arr.forEach(ad => {
        this.allAds_arr.push(ad);
    });
    console.log("All: ",this.allAds_arr);
    this.adsService.item_v.subscribe((snapshots) => {
        snapshots.forEach(snapshot => {
            this.allAds_arr.push(snapshot.val());
        });
    })
    this.adsService.item_mt.subscribe((snapshots) => {
        snapshots.forEach(snapshot => {
            this.allAds_arr.push(snapshot.val());
        });
    })
    this.adsService.item_ha.subscribe((snapshots) => {
        snapshots.forEach(snapshot => {
            this.allAds_arr.push(snapshot.val());
        });
    })
  }

  showDetail(c,t){
      let item= this.allAds_arr.filter((i) => i.category == c && i.title == t);
      this.navCtrl.push(DetailsPage,{item: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllAdsPage');
  }

}
