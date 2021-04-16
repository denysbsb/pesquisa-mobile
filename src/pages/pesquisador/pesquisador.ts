import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PesquisadorService } from '../../services/pesquisador';
import { Storage } from '@ionic/storage';
import { BaseService } from '../../services/base-service';

/**
 * Generated class for the PesquisadorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisador',
  templateUrl: 'pesquisador.html',
  providers: [PesquisadorService, BaseService]
})
export class PesquisadorPage {

  key: string;
  nomePesquisador: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: PesquisadorService,
    private base: BaseService,
    public toastCtrl: ToastController,
    private storage: Storage
  ) {
    this.key = '12345';
  }

  ionViewWillLeave() {

  }

  next() {
    this.checarCodigo();
  }

  checarCodigo()
  {
    let key: string = this.key;
    let nomePesquisador = this.nomePesquisador;

    if (!nomePesquisador) {
      const toast = this.toastCtrl.create({
        message: 'Digite o nome do Pesquisador',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      return;
    }

    this.storage.set('nomePesquisador', nomePesquisador);

    if (!this.base.isOnline()) {
      let pesquisador = this.storage.get('pesquisador');

      if (pesquisador) {
        this.navCtrl.push('QuizPage');
      } else {
        const toast = this.toastCtrl.create({
          message: 'Você está OFFLINE, e não existe usuário gravado, tente algum ponto de acesso para iniciar a pesquisa',
          duration: 5000,
          position: 'top'
        });
        toast.present();
      }

      return;
    }

    this.service.verificarChave(key).then((response: any) => {
      if (response.status === 'success') {
        if (response.data) {
          this.storage.set('pesquisador', JSON.stringify(response.data));
          this.navCtrl.push('QuizPage');
        } else {
          const toast = this.toastCtrl.create({
            message: 'Chave inválida',
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }

        return;
      }

      const toast = this.toastCtrl.create({
        message: response.messages,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }).catch(() => {
      let pesquisador = this.storage.get('pesquisador');

      if (pesquisador) {
        this.navCtrl.push('QuizPage');
      } else {
        const toast = this.toastCtrl.create({
          message: 'Você está OFFLINE, e não existe usuário gravado, tente algum ponto de acesso para iniciar a pesquisa',
          duration: 5000,
          position: 'top'
        });
        toast.present();
      }
    });
  }
}
