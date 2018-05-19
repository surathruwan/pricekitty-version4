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
    destination = 'Cargills Food City – Malabe 1',
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
    var orig = "SLIIT",
        dest = "Cargills Food City – Malabe 1",
        dist = document.getElementById("dist");
  
    if(status=="OK") {
        //orig.value = response.destinationAddresses[0];
       // dest.value = response.originAddresses[0];
        //dist.value = response.rows[0].elements[0].distance.text;
        
        //alert(response.destinationAddresses[0] +" "+ response.originAddresses[0] + " "+ response.rows[0].elements[0].distance.text);
        
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

 