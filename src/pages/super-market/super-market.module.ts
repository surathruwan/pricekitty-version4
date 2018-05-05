import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuperMarketPage } from './super-market';

@NgModule({
  declarations: [
    SuperMarketPage,
  ],
  imports: [
    IonicPageModule.forChild(SuperMarketPage),
  ],
})
export class SuperMarketPageModule {}
