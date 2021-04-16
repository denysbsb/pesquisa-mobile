import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController, Events } from 'ionic-angular';

/**
 * Generated class for the DescricaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descricao',
  templateUrl: 'descricao.html',
})
export class DescricaoPage {
  title: string;
  description: any;
  item: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public events: Events
  ) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.data.item;
    this.title = this.navParams.data.title;
  }

  salvar() {
    if (!this.description) {
      const toast = this.toastCtrl.create({
        message: 'Digite sua descrição',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      return;
    }

    this.item.descricao = this.description;
    this.events.publish('pesquisa.descricao', this.item);
    this.viewCtrl.dismiss();
  }
}
