import { Component } from '@angular/core';
import { NavController,  IonicPage, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth'
import { User } from '../../models/user';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
 
  constructor(private AFauth: AngularFireAuth,
    
    public navCtrl: NavController, public nav: NavController,private alertCtrl: AlertController) {
  }

  async login(user: User){
    try {
      const result = await this.AFauth.auth.signInWithEmailAndPassword(user.email, user.password); 
      if(result){
        this.nav.setRoot('MainPage');
       
        
      }
      else
      {
        this.presentAlert();
      }
     
      
    }
     catch (e) 
     {
      console.error(e);
       }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
  }
  createAccount(){
    this.navCtrl.push('RegisterPage'); 
  }
}


