import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';


import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

/**
 * Generated class for the ViewlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewlist',
  templateUrl: 'viewlist.html',
})
export class ViewlistPage {

  placesRef: AngularFireList<any>;
  places: Observable<any[]>;
  placesLoaded: Observable<any[]>;


  constructor(public afd: AngularFireDatabase, public nav: NavController, 
   public loading: LoadingController) {

    let loader = this.loading.create({
      content: "Please wait..."
    });
    loader.present();

    this.placesRef = afd.list('/Items');
    // Use snapshotChanges().map() to store the key
    this.places = this.placesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });


    this.places.subscribe(snapshots => {
      loader.dismiss();
      this.placesLoaded = this.places;
    },
      (err) => {
        console.warn(err);
      }
    )
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewlistPage');
  }

}
