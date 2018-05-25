import { Component , Input ,OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { MainCartPage } from '../main-cart/main-cart';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

import { BiscuitItem } from '../../models/shopping-item/biscuit-item.interface';
import { GlobalProvider } from '../../providers/global/global';
import { ProductProvider } from '../../providers/product/product';
import { ShoppingCartProvider } from '../../providers/shopping-cart/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/take';

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
                                 //implements OnInit, OnDestroy
export class BiscuitCategoryPage  {
  /*@Input('shopping-cart') shoppingCart;
  @Input('biscuit-item') biscuitItem: BiscuitItem;
  cart: any;
  subscription: Subscription;*/

  //*test biscuitListRef$ : Observable<any[]>;
  biscuitListRef$: Observable<any[]>;
  public cartQ={};
  public qty={};
  public iconQ=0;

  constructor(
    public navCtrl: NavController ,
    public navParams: NavParams , 
    public globalQ: GlobalProvider ,
    private productProvider: ProductProvider , 
    private cartProvider: ShoppingCartProvider,
    private db: AngularFireDatabase ) {

    //pointing shoppingListRef$ at Firebase -> 'biscuit-list' node.
    //*test this.biscuitListRef$ = this.database.list('biscuit-list').valueChanges();;
    this.biscuitListRef$ = this.productProvider.getAllList();

  }

  //callling addToCart() in biscuit-category.html
  addToCart(biscuitItem : BiscuitItem){
    ////callling addToCart() in shopping-cart.ts
    this.cartProvider.addToCart(biscuitItem);
  }

  //get itenm quantity
  getQuantity(biscuitItem: BiscuitItem){
    /*this.cartProvider.getQuantity(biscuitItem);
    this.cartQ=this.cartProvider.cart;
    console.log(this.cartQ);*/
    let cartId=this.cartProvider.getCartId();
    const cartRef: firebase.database.Reference = firebase.database().ref('/shopping_carts/' + cartId + '/items/' + biscuitItem.itemName  );
    cartRef.on('value', cartSnapshot => {
      this.cartQ = cartSnapshot.val();
      if(this.cartQ!==null)
        this.qty=this.cartQ;
    })
    }

    incrementIcon(){
      this.iconQ=this.iconQ+1;
    }

    increment(){
      
    }
    decrement(){

    }

    gocart(){
      this.navCtrl.push(MainCartPage);
    }
  
  /*getQuantity(biscuitItem: BiscuitItem){ 

    //let cartId = localStorage.getItem('cartId');
    //let cart$: any= this.db.list('/shopping_carts/' + cartId + '/items/' + biscuitItem.itemName);
    let cart$=this.cart;
    cart$.valueChanges().subscribe(cart => {
      if(cart==null) return 0;
      else return cart.quantity;
     });
  }*/
  /*
    getQuantity(){
    if(!this.shoppingCart) 
      return 0;

    let item=this.shoppingCart.items[this.biscuitItem.itemName];
    return item ? item.quantity :0;

     }*/
/////////////////
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad BiscuitCategoryPage');
    
  }

  navigateToAddShoppingPage() {
    //navigate the user to navigateToAddShoppingPage
    this.navCtrl.push(AddShoppingPage);
  }

  /*async ngOnInit(){
    this.subscription = (await this.cartProvider.getCart()).valueChanges()
    .subscribe(cart => this.cart = cart);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }*/

}
