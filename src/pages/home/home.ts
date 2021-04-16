import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage({
  name: 'home'
})
@Component({
    selector: 'home-page',
    templateUrl: 'home.html',
    providers: [EmailComposer]
})
export class HomePage {
  nuPesuquisa: any;
  registro: any;

  constructor(
    private storage: Storage,
    public navCtrl: NavController,
    private emailComposer: EmailComposer
  ) {
  }

  ionViewDidLoad() {
    this.storage.get('respostas').then((respostas: any) => {
      if (respostas) {
        this.registro = 'SIM';
        let data = JSON.parse(respostas);

        this.nuPesuquisa = data.length;
      } else {
        this.registro = 'NÃO';
      }
    });
  }

  startQuiz() {
    this.navCtrl.push('PesquisadorPage');
  }

  sendEmail() {
    this.storage.get('respostas').then((respostas: any) => {
      if (respostas) {
        let email = {
          to: 'mario.eugenio@gmail.com',
          cc: '',
          bcc: [],
          attachments: [],
          subject: 'DADOS PESQUISA',
          body: respostas,
          isHtml: true
        };

        this.emailComposer.open(email);
      }
    });
  }
}
