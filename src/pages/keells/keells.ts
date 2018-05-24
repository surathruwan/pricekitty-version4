import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
declare var google;
/**
 * Generated class for the KeellsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-keells',
  templateUrl: 'keells.html',
})
export class KeellsPage {
  start:any = '';
  Destination :any='' ; 
  service : any='';
  constructor(public navCtrl: NavController, public navParams: NavParams,private launchNavigator: LaunchNavigator) {
  }

  ionViewDidLoad() {
    this.calculatorKeells();
    
  }

  calculatorKeells(){
    var origin = 'SLIIT',
    destination = 'Keells Super, 296 Kaduwela Rd, Malabe',
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

