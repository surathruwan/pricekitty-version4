import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the MainCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-cart',
  templateUrl: 'main-cart.html',
})
export class MainCartPage {
  biscuitListRef$: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db: AngularFireDatabase) {

    this.biscuitListRef$ = this.db.list('/shopping_carts/').valueChanges();
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainCartPage');
  }

}
