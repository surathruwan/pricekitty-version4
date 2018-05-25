

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, App } from 'ionic-angular';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';

import { SuperMarketPage } from '../pages/super-market/super-market';
//import { MainCartPage } from '../pages/main-cart/main-cart';
import { CargillsPage } from '../pages/cargills/cargills';
import { KeellsPage } from '../pages/keells/keells';

import { WishlistPage } from '../pages/wishlist/wishlist';
import { RequestFormPage } from '../pages/request-form/request-form';
import { ViewlistPage } from '../pages/viewlist/viewlist';
import { OrderPage } from '../pages/order/order';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { LoginPage } from '../pages/login/login';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { ProfilePage } from '../pages/profile/profile';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,app: App,
    private push: Push) {
    this.initializeApp();
    

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Super Market', component: SuperMarketPage },
      { title: 'Item List', component: ShoppingListPage },
     
      
      { title: 'Request Form', component: RequestFormPage },
      { title: 'Order', component: OrderPage },
      { title: 'Wish List', component: WishlistPage },
     
      { title: 'View List', component: ViewlistPage },
   
      { title: 'About Us', component: AboutusPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'LogOut', component: LoginPage },
      
 
      



    ];

    



  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushSetup();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }



  pushSetup(){
    const options: PushOptions = {
      android: {
        senderID:'63868819248'

      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
   
   };
   
   const pushObject: PushObject = this.push.init(options);
   
   
   pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
   
   pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
   
   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
  
}

