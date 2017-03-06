import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { User } from '../../Services/User.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email='';
  pass='';
  username='';
  loginFlag= false;

  constructor(private af: AngularFire, private userService: User, public navCtrl: NavController, public navParams: NavParams) {
    this.loginFlag = this.userService.loginBool;
    alert("logged");
    this.username = this.userService.currentUser;
}

  login(){
    this.userService.login(this.email, this.pass);
    console.log(this.email,this.pass);
    console.log(this.userService.loginBool);
    this.loginFlag = true;
  }

  signUp(){
    this.navCtrl.push(SignupPage);
  }

  continue(){
    // this.navCtrl.push(); 
    this.navCtrl.parent.select(1);
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
   
  }

}
