import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopmodPage } from './popmod';

@NgModule({
  declarations: [
    PopmodPage,
  ],
  imports: [
    IonicPageModule.forChild(PopmodPage),
  ],
  exports: [
    PopmodPage
  ]
})
export class PopmodPageModule {}
