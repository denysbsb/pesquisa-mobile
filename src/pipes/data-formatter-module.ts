import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataFormatterPipe } from './data-formatter-pipe';

@NgModule({
  imports: [
    IonicPageModule.forChild(DataFormatterPipe),
  ],
  declarations: [DataFormatterPipe],
  exports: [DataFormatterPipe]
})

export class DataFormatterModule { }