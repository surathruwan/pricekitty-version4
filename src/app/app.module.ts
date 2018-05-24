import { MyApp } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from'./firebase.credentials';


import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddShoppingPage } from '../pages/add-shopping/add-shopping';
import { BiscuitCategoryPage } from '../pages/biscuit-category/biscuit-category';
import { MainCartPage } from '../pages/main-cart/main-cart';
import { MainCartPageModule } from '../pages/main-cart/main-cart.module';
import { GlobalProvider } from '../providers/global/global';



import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { CargillsPage } from '../pages/cargills/cargills';
import { KeellsPage } from '../pages/keells/keells';
import { SuperMarketPage } from '../pages/super-market/super-market';

import { WishlistPage } from '../pages/wishlist/wishlist';
import { RequestFormPage } from '../pages/request-form/request-form';
import { ViewlistPage } from '../pages/viewlist/viewlist';
import { OrderPage } from '../pages/order/order';

import { AboutusPage } from '../pages/aboutus/aboutus';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../providers/auth-service/auth-service';
import { Push } from '@ionic-native/push';










@NgModule({
  declarations: [

    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    BiscuitCategoryPage,
    MainCartPage,
     
    CargillsPage,
    KeellsPage,
    SuperMarketPage,

    WishlistPage,
    RequestFormPage,
    ViewlistPage,
    OrderPage,
    AboutusPage,
    LoginPage,
    
 

  

    
  ], 
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule,
    
    

    //Initialise AngularFire with credentials from the dashboard
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS)
  ],
  bootstrap: [IonicApp],
  entryComponents: [

    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    BiscuitCategoryPage,
    MainCartPage,

    CargillsPage,
    KeellsPage,
    SuperMarketPage,

    WishlistPage,
    RequestFormPage,
    ViewlistPage,
    OrderPage,
    AboutusPage,
    LoginPage,
   

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    AuthService,
    Push
  ]
})
export class AppModule {}
