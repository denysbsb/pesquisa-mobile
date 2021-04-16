import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizPage } from './quiz';
import { DataFormatterModule } from '../../pipes/data-formatter-module';

@NgModule({
  declarations: [
    QuizPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizPage),
    DataFormatterModule
  ],
})
export class QuizPageModule {}
