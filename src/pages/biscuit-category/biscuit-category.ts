import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase , AngularFireList } from "angularfire2/database";
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { Observable } from 'rxjs/Observable';

import { BiscuitItem } from '../../models/shopping-item/biscuit-item.interface';
import { GlobalProvider } from "../../providers/global/global";
/**
 * Generated class for the BiscuitCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biscuit-category',
  templateUrl: 'biscuit-category.html',
})
export class BiscuitCategoryPage {

  biscuitListRef$ : Observable<any[]>;
  private currentNumber = 1;
  constructor(public navCtrl: NavController , public navParams: NavParams , private database: AngularFireDatabase , public globalQ: GlobalProvider) {

    //pointing shoppingListRef$ at Firebase -> 'biscuit-list' node.
    this.biscuitListRef$ = this.database.list('biscuit-list').valueChanges();;

   //this.biscuitListRef$.valueChanges().subscribe(x => c onsole.log(x));
   this.globalQ.shoppingCartQ=1;
  }

  

private increment () {
  this.currentNumber++;
}

private decrement () {
  this.currentNumber--;
}
  
  increaseQuantity(){
    this.globalQ.shoppingCartQ + 1;
  }

  decreaseQuantity(){
    this.globalQ.shoppingCartQ - 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiscuitCategoryPage');
  }

  navigateToAddShoppingPage() {
    //navigate the user to navigateToAddShoppingPage
    this.navCtrl.push(AddShoppingPage);
  }

}
