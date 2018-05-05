import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BiscuitCategoryPage } from '../biscuit-category/biscuit-category';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToBiscuitCategoryPage() {
    //navigate the user to BiscuitCategoryPag
    this.navCtrl.push(BiscuitCategoryPage);
  }

}
