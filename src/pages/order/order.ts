
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import{AngularFireModule} from 'angularfire2';
import { SUPER_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afd: AngularFireDatabase, private alertCtrl: AlertController,  public loading: LoadingController,public loadingCtrl: LoadingController)
 {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  


  showAlert(main_title, sub_title){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
      
    
      setTimeout(() => {
        loading.dismiss();
      
      
        
          }, 5000)
          let alert = this.alertCtrl.create({
            title: main_title,
            subTitle: sub_title,
            buttons: ['OK']
          });
          ;

   
       
        
      
      
    }
    
     
    

    canceItem(){
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
}
