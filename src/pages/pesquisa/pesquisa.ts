import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController, ToastController, NavParams, ModalController, Events, Content, Platform } from 'ionic-angular';

/**
 * Generated class for the PesquisaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html'
})
export class PesquisaPage {
  @ViewChild(Content) content: Content;
  @ViewChild('wizard') slider: Slides;
  active: boolean = false;
  optionDescription: boolean = false;

  pesquisa: any = {};
  optionSelect: any;
  start: any;
  post: any = {};
  selecteds: any = [];
  unregisterBackButtonAction: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public platform: Platform,
    public toastCtrl: ToastController,
    private events: Events
  ) {
    this.post = {};
    this.selecteds = [];
    this.start = new Date();

    this.events.subscribe('pesquisa.descricao', (item: any) => {
      this.activeNext(item);
    });

    platform.registerBackButtonAction(() => {
      console.log('disabilitando back button');
    },1);
  }

  ionViewDidLoad() {
    this.pesquisa = this.navParams.data;
  }

  activeNext(item: any, item2: any = null) {
    if (item2 != null) {
      if (item.opcao.toString().toLocaleLowerCase().indexOf('outros') >= 0) {
        const modal = this.modalCtrl.create('DescricaoPage', { item: item, title: item2.questao });
        modal.present();
        this.active = false;

        return;
      }
    }

    let check = this.selecteds.filter((data: any) => { return data.id === item.id; });

    if (check.length === 0) {
      this.selecteds.push(item);
    }

    this.active = true;

    if (item.hasOwnProperty('descricao')) {
      this.slider.slideNext();
    }
  }

  activePrev()
  {
    this.slider.slidePrev();
  }

  proximo() {
    if (this.slider.isEnd()) {
      this.navCtrl.push('ParticipantePage', this.selecteds );
      return;
    }

    this.slider.slideNext();
    this.active = false;
  }
}
