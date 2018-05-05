import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainCartPage } from '../main-cart/main-cart';

@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingPage');
  }

  navigateToMainCartPage() {
    //navigate the user to MainCartPage
    this.navCtrl.push(MainCartPage);
  }

}
