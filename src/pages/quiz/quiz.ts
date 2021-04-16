import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { QuizService } from '../../services/quiz';
import { PesquisaService } from '../../services/pesquisa';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the QuizPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
  providers: [QuizService, PesquisaService, Geolocation]
})
export class QuizPage {

  items: any = [];
  address: string;
  pesquisador: string;
  spinner: boolean = true;
  isEnabled: boolean = true;
  spinnerPesquisa: boolean = true;

  isOffline: any = true;

  constructor(
    public navCtrl: NavController,
    public network: Network,
    public navParams: NavParams,
    public service: QuizService,
    public pesquisaService: PesquisaService,
    public geolocation: Geolocation,
    public toastCtrl: ToastController,
    private storage: Storage,
    private alertCtrl: AlertController
  ) {
    this.loadCoords();
  }

  ionViewDidLoad() {
    setTimeout( () => {
      this.storage.get('pesquisador').then((value: any) => {
        let pesq = JSON.parse(value);
        if (value) {
          this.pesquisador = pesq.nome;
        }
      });
    }, 500);

  }

  offlineSet() {
    if (!this.isOffline) {
      this.isOffline = true;
    } else {
      this.isOffline = false;
    }

    this.storage.set('offline', this.isOffline);
  }

  loadCoords() {

    if (!this.isOffline) {
      this.loadQuiz();
      return;
    }

    this.storage.set('endereco', '-');
    this.storage.set('latitude', '-1000000');
    this.storage.set('longitude', '-100000');
    this.spinner = false;
    this.loadQuiz();
  }

  offlineSync() {
      this.storage.get('respostas').then((respostas: any) => {

        if (!respostas) {

          let alert = this.alertCtrl.create({
            title: 'Alerta',
            message: 'Não há pesquisa(s) para sincronização',
            buttons: [
              {
                text: 'OK',
                role: 'cancel',
                handler: () => {
                }
              }
            ]
          });
          alert.present();

          return;
        }

        if (respostas) {
          let alert = this.alertCtrl.create({
            title: 'Alerta',
            message: 'Você tem pesquisas pendentes para envio, deseja sincronizar?',
            buttons: [
              {
                text: 'Cancelar',
                role: 'cancel',
                handler: () => {
                }
              },
              {
                text: 'Sincronizar',
                handler: () => {
                  this.sincronyze(respostas);
                }
              }
            ]
          });
          alert.present();
        }
      });
  }

  sincronyze(respostas: any) {
    let result: any = JSON.parse(respostas);
    let count: any = result.length;

    this.isEnabled = false;

        this.service.save({ data: result }).then(() => {

          this.storage.remove('respostas');
          this.isEnabled = true;

          let alert = this.alertCtrl.create({
            title: 'Alerta',
            message: 'Foram sincronizada(s) ' + count + ' pesquisa(s)',
            buttons: [
              {
                text: 'OK',
                role: 'cancel',
                handler: () => {
                }
              }
            ]
          });
          alert.present();

        }).catch(() => {
          let alert = this.alertCtrl.create({
            title: 'Alerta',
            message: 'Não foi possível realizar a requizição, tente mais tarde',
            buttons: [
              {
                text: 'OK',
                role: 'cancel',
                handler: () => {
                }
              }
            ]
          });
          alert.present();

          this.isEnabled = true;
        });
  }

  offline() {
    this.storage.get('pesquisa').then((value: any) => {
      if (value) {

        this.items = JSON.parse(value);

        this.storage.get('endereco').then((value: any) => {
          this.address = value;
        });

        this.spinner = false;
        this.spinnerPesquisa = false;
      } else {

        let alert = this.alertCtrl.create({
          title: 'Alerta',
          message: 'Você está OFFLINE, e não existe pesquisa gravada, tente algum ponto de acesso para iniciar a pesquisa',
          buttons: [
            {
              text: 'OK',
              role: 'cancel',
              handler: () => {
              }
            }
          ]
        });
        alert.present();
      }
    });
  }

  loadQuiz() {
    if (!this.isOffline) {
      this.offline();
      return;
    }

    this.service.loadQuiz().then((response: any) => {
      this.items = response.data;

      this.storage.set('pesquisa', JSON.stringify(this.items));
      this.spinner = false;
      this.spinnerPesquisa = false;
    }).catch(() => {
      this.spinner = false;
      this.spinnerPesquisa = false;
      this.offline();
    });
  }

  itemSelected(item: any) {
    this.navCtrl.push('PesquisaPage', item);
  }
}
