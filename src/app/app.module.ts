import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from'./firebase.credentials';

import { MyApp } from './app.component';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddShoppingPage } from '../pages/add-shopping/add-shopping';
import { BiscuitCategoryPage } from '../pages/biscuit-category/biscuit-category';
import { MainCartPage } from '../pages/main-cart/main-cart';
import { MainCartPageModule } from '../pages/main-cart/main-cart.module';
import { GlobalProvider } from '../providers/global/global';
import { HomePage } from '../pages/home/home';


import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { CargillsPage } from '../pages/cargills/cargills';
import { KeellsPage } from '../pages/keells/keells';
import { SuperMarketPage } from '../pages/super-market/super-market';
import { RegistrationPage } from '../pages/registration/registration';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { RequestFormPage } from '../pages/request-form/request-form';
import { ViewlistPage } from '../pages/viewlist/viewlist';
import { OrderPage } from '../pages/order/order';

import { AboutusPage } from '../pages/aboutus/aboutus';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    BiscuitCategoryPage,
    MainCartPage,
    HomePage,
    CargillsPage,
    KeellsPage,
    SuperMarketPage,
    RegistrationPage,
    WishlistPage,
    RequestFormPage,
    ViewlistPage,
    OrderPage,
    AboutusPage,

    
  ], 
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
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
    HomePage,
    CargillsPage,
    KeellsPage,
    SuperMarketPage,
    RegistrationPage,
    WishlistPage,
    RequestFormPage,
    ViewlistPage,
    OrderPage,
    AboutusPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
