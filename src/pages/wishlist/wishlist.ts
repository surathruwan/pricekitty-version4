import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import{AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from "angularfire2/database";
import { SUPER_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {

date : any;
  i1: any;
 i2: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afd: AngularFireDatabase, public loading: LoadingController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }
  addwishlist(date,i1,i2){

    if ((this.i2 != null)) {
      
   
      this.afd.list('/Items').push({
        date1:date,
        Item1: i1,
        Item2: i2,
        
      }).then(newVendor => {

        let alert = this.alertCtrl.create({
          title: 'Item Added',
          subTitle: 'Item Requested',
          buttons: ['Dismiss']
        });
        alert.present();

        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      // location.reload();

      }, error => {
        console.log(error);
        
      });
    }else{
      this.showAlert('Requesting Items','Please select the Item First');
    }
    }

    showAlert(main_title, sub_title){
      let alert = this.alertCtrl.create({
        title: main_title,
        subTitle: sub_title,
        buttons: ['OK']
      });
  
      alert.present();
    }

    canceItem(){
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
}
