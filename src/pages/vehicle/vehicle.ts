import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import { AdsService, Vehicle } from '../../Services/AdsService.service';
import { PostAdPage } from '../post-ad/post-ad';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Vehicle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'vehicle',
  templateUrl: 'vehicle.html'
})
export class VehiclePage {

  veh_arr: Vehicle[] = [];
  postAd = PostAdPage;

  constructor(private adsService: AdsService) {
    this.veh_arr = this.adsService.veh_ad_arr;
    this.adsService.item_v.subscribe((snapshots) => {
        snapshots.forEach(snapshot => {
            this.veh_arr.push(snapshot.val());
        });
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclePage');
  }

}
