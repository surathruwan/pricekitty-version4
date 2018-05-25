import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  //biscuitListRef$ : Observable<any[]>;
  constructor(public http: HttpClient , private db: AngularFireDatabase) {
    console.log('Hello ProductProvider Provider');

  }

  //getting all item details from 'biscuit-list' node 
  getAllList(){
    return this.db.list('biscuit-list').valueChanges();
    
  }
}
