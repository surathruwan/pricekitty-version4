import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainCartPage } from './main-cart';

@NgModule({
  declarations: [
    MainCartPage,
  ],
  imports: [
    IonicPageModule.forChild(MainCartPage),
  ],
})
export class MainCartPageModule {}
