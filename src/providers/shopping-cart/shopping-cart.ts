import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';
import { BiscuitItem } from '../../models/shopping-item/biscuit-item.interface';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs/Rx';


/*
  Generated class for the ShoppingCartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShoppingCartProvider {
  public cart = {};
  //cartRef$:Observable<any[]>;
  constructor(public http: HttpClient  , private db: AngularFireDatabase) {
    console.log('Hello ShoppingCartProvider Provider');

  }

  //////////----4
  async getCart(){
    let cartId = await this.getOrCreateCartId();
    return this.db.object('shopping-carts' + cartId);
  }

    ////////-----1
    private create(){
      return this.db.list('shopping-carts').push({
        //dateCreated: new Date().getTime()
      });
    }

  ////////////--2
  private getItem(cartId: string , productId:string){
    return this.db.object('/shopping_carts/' + cartId +'/items/' + productId);
  }

  //////////----3
  async getOrCreateCartId(){
    let cartId = localStorage.getItem('cartId');

    if(cartId) return cartId;

      let result = await this.create();
      localStorage.setItem('cartId' , result.key);

      return result.key;
  }
/////////////////////////////////////////////////////////////
  getCartId(){
    let cartId = localStorage.getItem('cartId');

    if(cartId) return cartId;

      let result =  this.create();
      localStorage.setItem('cartId' , result.key);

      return result.key;
  }

  setCart(biscuitItem: BiscuitItem): void {
    let cartId = this.getCartId();
    const cartRef: firebase.database.Reference = firebase.database().ref('/shopping_carts/' + cartId + '/items/' + biscuitItem.itemName);

    biscuitItem.quantity=1;

    cartRef.set({
    itemUrl:biscuitItem.itemUrl,
    itemName:biscuitItem.itemName,
    itemWeight:biscuitItem.itemWeight,
    cargillsItemPrice:biscuitItem.cargillsItemPrice,
    keellsItemPrice:biscuitItem.keellsItemPrice,
    quantity:biscuitItem.quantity
    });
  }

  updateCart(biscuitItem: BiscuitItem): void {
    let cartId = this.getCartId();
    const cartRef: firebase.database.Reference = firebase.database().ref('/shopping_carts/' + cartId + '/items/' + biscuitItem.itemName);

    cartRef.update({
    itemUrl:biscuitItem.itemUrl,
    itemName:biscuitItem.itemName,
    itemWeight:biscuitItem.itemWeight,
    cargillsItemPrice:biscuitItem.cargillsItemPrice,
    keellsItemPrice:biscuitItem.keellsItemPrice,
    quantity:(biscuitItem.quantity+1)
    });
  }
/////////////////////////////////////////////////////////////
  async addToCart(biscuitItem : BiscuitItem){

    let cartId = await this.getOrCreateCartId();
                                                                                                       
    let item$ : any= this.db.object('/shopping_carts/' + cartId + '/items/' + biscuitItem.itemName );

     item$.valueChanges().take(1).subscribe(item => {
      if(item!==null)
        this.updateCart(biscuitItem); 
      
      else
      this.setCart(biscuitItem);
      
     });
  
  }

  async getQuantity(biscuitItem : BiscuitItem ){

    let cartId = await this.getOrCreateCartId();

    /*let cartRef$:any= this.db.list('/shopping_carts/' + cartId + '/items/' + biscuitItem.itemName).snapshotChanges();

    //console.log(cartId);
     cartRef$.take(1).subscribe(item => {
      if(item==null) return 0;
      else return item.quantity;
     });*/
     
     const cartRef: firebase.database.Reference = firebase.database().ref('/shopping_carts/' + cartId + '/items/' + biscuitItem.itemName  );
     cartRef.on('value', cartSnapshot => {
      this.cart = cartSnapshot.val();
      
    })
    
   // return this.cart;
  }

}
