import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiscuitCategoryPage } from './biscuit-category';

@NgModule({
  declarations: [
    BiscuitCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(BiscuitCategoryPage),
  ],
})
export class BiscuitCategoryPageModule {}
