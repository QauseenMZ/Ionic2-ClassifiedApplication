import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { PostAdPage } from '../pages/post-ad/post-ad';
import { VehiclePage } from '../pages/vehicle/vehicle';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MobTabPage } from '../pages/mob-tab/mob-tab';
import { HomeAppliancesPage } from '../pages/home-appliances/home-appliances';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  Ads = HomePage;
  Login = LoginPage;
  Post = PostAdPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
