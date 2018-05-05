import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CargillsPage } from '../cargills/cargills';
import { KeellsPage } from '../keells/keells';

/**
 * Generated class for the SuperMarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-super-market',
  templateUrl: 'super-market.html',
})
export class SuperMarketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToCargills(){
    this.navCtrl.push(CargillsPage);
  }
  
  goToKeellsMalabe(){
    this.navCtrl.push(KeellsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuperMarketPage');
  }

}
