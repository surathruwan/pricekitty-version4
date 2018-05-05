import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import{AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from "angularfire2/database";
import { SUPER_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the RequestFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-form',
  templateUrl: 'request-form.html',
})
export class RequestFormPage {

  name : any;
  quantity: any;
  supermarket: any;
  brand: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afd: AngularFireDatabase, public loading: LoadingController, private alertCtrl: AlertController) {

  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
  }
  addItem(name,quantity1,supermarket1,brand){

    if ((this.name != null)&&(this.quantity != null)&&(this.supermarket != null)&&(this.brand != null)) {
      
   
      this.afd.list('/Items').push({
        Item: name,
        Quantity1: quantity1,
        Supermarket1: supermarket1,
        Brand: brand,

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
