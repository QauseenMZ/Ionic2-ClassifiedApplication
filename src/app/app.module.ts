import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PostAdPage } from '../pages/post-ad/post-ad';
import { VehiclePage } from '../pages/vehicle/vehicle';
import { MobTabPage } from '../pages/mob-tab/mob-tab';
import { HomeAppliancesPage } from '../pages/home-appliances/home-appliances';
import { AdsService } from '../Services/AdsService.service';
import { User } from '../Services/User.service';
import { LoginPage } from '../pages/login/login';
import { AllAdsPage } from '../pages/all-ads/all-ads';
import { SignupPage } from '../pages/signup/signup';
import { DetailsPage } from '../pages/details/details';
import { AngularFireModule, AngularFire, FirebaseListObservable,  AuthProviders, AuthMethods  } from 'angularfire2';

export const fireConfig = {
    apiKey: "AIzaSyCnz8TxFRVkdiO7y89kv5NdeVtRNd2G4BM",
    authDomain: "fir-auth-a24bd.firebaseapp.com",
    databaseURL: "https://fir-auth-a24bd.firebaseio.com",
    storageBucket: "fir-auth-a24bd.appspot.com",
    messagingSenderId: "1057406814794"
  };

export const myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PostAdPage,
    MobTabPage,
    HomeAppliancesPage,
    VehiclePage,
    LoginPage,
    SignupPage,
    AllAdsPage,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PostAdPage,
    MobTabPage,
    HomeAppliancesPage,
    VehiclePage,
    LoginPage,
    SignupPage,
    AllAdsPage,
    DetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AdsService, User]
})

export class AppModule{
  
}