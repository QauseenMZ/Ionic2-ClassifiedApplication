import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { VehiclePage } from '../vehicle/vehicle';
import { MobTabPage } from '../mob-tab/mob-tab';
import { HomeAppliancesPage } from '../home-appliances/home-appliances';
import { AllAdsPage } from '../all-ads/all-ads';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cat: string="AllCats";
  AllAdsPage = AllAdsPage;
  VehiclePage = VehiclePage; 
  HomeAppliancesPage = HomeAppliancesPage;
  MobTabPage = MobTabPage;
  
  constructor(public navCtrl: NavController) {
    
  }

}
