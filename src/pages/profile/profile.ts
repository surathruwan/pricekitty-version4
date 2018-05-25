import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../Models/profile';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as Profile;
  
  constructor(private AFauth: AngularFireAuth, private AFdatabase: AngularFireDatabase,
    
    public navCtrl: NavController, public nav: NavController) {
  }

  createProfile(){
    this.AFauth.authState.take(1).subscribe(auth => {
      this.AFdatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then(() => this.nav.setRoot('MainPage'))
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
