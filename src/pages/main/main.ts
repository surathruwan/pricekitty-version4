import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, RootNode } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Profile } from '../../Models/profile';
//import { Observable} from 'rxjs';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})


export class MainPage {


  constructor(private AFauth: AngularFireAuth, private toast: ToastController, private AFdatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.AFauth.authState.subscribe(data => {
      if(data.email && data.uid){ 
        this.toast.create({
          message: `Welcome, ${data.email}`,
          duration: 7000
        }).present();


      }

      else{
        this.toast.create({
          message: `You have encountered an error when signing in. Please try again`,
          duration: 7000
        }).present();
      } 
    });
 
   }

  

   

  }




