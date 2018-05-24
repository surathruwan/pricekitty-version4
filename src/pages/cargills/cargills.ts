import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{LaunchNavigator , LaunchNavigatorOptions } from  '@ionic-native/launch-navigator';
declare var google;
/**
 * Generated class for the CargillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cargills',
  templateUrl: 'cargills.html',
})
export class CargillsPage {

  cstart:any = '';
  Destination :any='' ; 
  service : any='';
  constructor(public navCtrl: NavController, public navParams: NavParams,private launchNavigator: LaunchNavigator) {
  }

  ionViewDidLoad() {
    this.calculatorCargills();
  }

  calculatorCargills(){
    var origin = 'SLIIT',
    destination = 'Cargills Food City – Malabe 1, 766 Kaduwela Rd, Malabe',
    service = new google.maps.DistanceMatrixService();
  
  service.getDistanceMatrix(
    {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        avoidHighways: true,
        avoidTolls: true
    }, 
    callback
  );
  
  
  
  function callback(response, status) {
    //var orig = document.getElementById("orig"),
    

        if(status=="OK") {
        
        document.getElementById("dist").innerHTML = response.rows[0].elements[0].distance.text;
        var distance = response.rows[0].elements[0].distance.text;
        var index = distance.indexOf( "km" ); 
        var intIndex = parseInt(index);
        
        var TotDistance = distance.substring(0,intIndex);
        document.getElementById("price").innerHTML = "Rs. " +(TotDistance *30).toString() ;
    } else {
        alert("Error: " + status);
    }
  }
  }

  navme(address){
    this.launchNavigator.navigate(address);
  }

}

 