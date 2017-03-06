import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../Services/User.service';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  username='';
  pass='';
  email = '';
  loginFlag= false;

  constructor(public userService: User, public navCtrl: NavController, public navParams: NavParams) {
  }

  register(u,e,p){
    this.userService.register(this.username,this.email,this.pass);
    // console.log(this.email,this.pass);
  }

  goBack(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
