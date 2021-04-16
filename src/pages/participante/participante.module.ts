import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParticipantePage } from './participante';
import {Ionic2MaskDirective} from 'ionic2-mask-directive';

@NgModule({
  declarations: [
    ParticipantePage,
    Ionic2MaskDirective
  ],
  imports: [
    IonicPageModule.forChild(ParticipantePage)
  ],
})
export class ParticipantePageModule {}
