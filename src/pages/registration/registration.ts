import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import{AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from "angularfire2/database";
import { SUPER_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  fName : any;
  lName: any;
  username: any;
  phone: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afd: AngularFireDatabase, public loading: LoadingController, private alertCtrl: AlertController) {

  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
  }
  addItem(fName,lName,username,phone){

    if ((this.fName != null)&&(this.lName != null)&&(this.username != null)&&(this.phone != null)) {
      
   
      this.afd.list('/users').push({
        fName: fName,
        lName: lName,
        username: username,
        phone: phone,

      }).then(newVendor => {

        let alert = this.alertCtrl.create({
          title: 'User Registration ',
          subTitle: 'Successfully',
          buttons: ['OK']
        });
        alert.present();

        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      // location.reload();

      }, error => {
        console.log(error);
        
      });
    }else{
      this.showAlert('User Registration','Please fill out the all fields');
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

