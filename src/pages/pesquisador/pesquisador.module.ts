import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisadorPage } from './pesquisador';

@NgModule({
  declarations: [
    PesquisadorPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisadorPage),
  ],
})
export class PesquisadorPageModule {}
