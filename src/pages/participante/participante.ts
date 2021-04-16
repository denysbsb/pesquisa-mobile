import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, ViewController } from 'ionic-angular';
import { QuizService } from '../../services/quiz';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ParticipantePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participante',
  templateUrl: 'participante.html',
  providers: [QuizService]
})
export class ParticipantePage {

  form: any = {};
  isOffline: boolean;
  post: any = {};
  start: any;
  observacoes: any;
  nomePesquisador: any;
  IMEI: any;
  isEnabled: boolean = true;

  cities: any = [
    { nome : 'Asa Sul' },
    { nome : 'Asa Norte' },
    { nome : 'Águas Claras' },
    { nome : 'Brazlândia' },
    { nome : 'Candangolândia' },
    { nome : 'Ceilândia' },
    { nome : 'Cruzeiro' },
    { nome : 'Estrutural' },
    { nome : 'Fercal' },
    { nome : 'Gama' },
    { nome : 'Guará' },
    { nome : 'Itapoã' },
    { nome : 'Jardim Botânico' },
    { nome : 'Lago Sul' },
    { nome : 'Lago Norte' },
    { nome : 'Núcleo Bandeirante' },
    { nome : 'Park Way' },
    { nome : 'Paranoá' },
    { nome : 'Planaltina' },
    { nome : 'Plano Piloto' },
    { nome : 'Recanto das Emas' },
    { nome : 'Riacho Fundo' },
    { nome : 'Riacho Fundo II' },
    { nome : 'SIA' },
    { nome : 'Samambaia' },
    { nome : 'Santa Maria' },
    { nome : 'São Sebastião' },
    { nome : 'Sobradinho II' },
    { nome : 'Sobradinho' },
    { nome : 'Sudoeste/Octogonal' },
    { nome : 'Taguatinga' },
    { nome : 'Varjão' },
    { nome : 'Vicente Pires' }
  ];

  states: any = [
    { key: 'AC', value: 'Acre' },
    { key: 'AL', value: 'Alagoas' },
    { key: 'AP', value: 'Amapá' },
    { key: 'AM', value: 'Amazonas' },
    { key: 'BA', value: 'Bahia' },
    { key: 'CE', value: 'Ceará' },
    { key: 'DF', value: 'Distrito Federal' },
    { key: 'ES', value: 'Espírito Santo' },
    { key: 'GO', value: 'Goiás' },
    { key: 'MA', value: 'Maranhão' },
    { key: 'MT', value: 'Mato Grosso' },
    { key: 'MS', value: 'Mato Grosso do Sul' },
    { key: 'MG', value: 'Minas Gerais' },
    { key: 'PA', value: 'Pará' },
    { key: 'PB', value: 'Paraíba' },
    { key: 'PR', value: 'Paraná' },
    { key: 'PE', value: 'Pernambuco' },
    { key: 'PI', value: 'Piauí' },
    { key: 'RJ', value: 'Rio de Janeiro' },
    { key: 'RN', value: 'Rio Grande do Norte' },
    { key: 'RS', value: 'Rio Grande do Sul' },
    { key: 'RO', value: 'Rondônia' },
    { key: 'RR', value: 'Roraima' },
    { key: 'SC', value: 'Santa Catarina' },
    { key: 'SP', value: 'São Paulo' },
    { key: 'SE', value: 'Sergipe' },
    { key: 'TO', value: 'Tocantins' }
  ];
  ages: any = [
    { key: 1, value: '16 a 19 anos' },
    { key: 2, value: '20 a 24 anos' },
    { key: 3, value: '25 a 29 anos' },
    { key: 4, value: '30 a 39 anos' },
    { key: 5, value: '40 a 49 anos' },
    { key: 6, value: '50 a 59 anos' },
    { key: 7, value: '60 a 69 anos' },
    { key: 8, value: '70 ou mais' },
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private service: QuizService,
    private storage: Storage,
    public toastCtrl: ToastController
  ) {
    this.start = new Date();
    this.form = { uf: 'DF' };
  }

  ngOnInit() {
    this.start = new Date();
    this.form = { uf: 'DF' };
  }

  ionViewDidLoad() {

    let params = this.navParams.data;

    this.storage.get('offline').then((value: boolean) => {
      this.isOffline = (value)? value: this.isOffline;
    });

    this.storage.get('nomePesquisador').then((value: boolean) => {
      this.nomePesquisador = value;
    });

    this.storage.get('pesquisador').then((value: any) => {

      this.storage.get('latitude').then((value: any) => { this.post.latitude = value; });
      this.storage.get('longitude').then((value: any) => { this.post.longitude = value; });
      this.storage.get('endereco').then((value: any) => { this.post.endereco = value; });

      this.post = {
        inicio: this.start,
        pesquisador: JSON.parse(value),
        selecoes: params
      };
    });
  }

  detail(address: any) {
    console.log(address);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  _validForm() {

    if (!this.form.sexo) {
      const toast = this.toastCtrl.create({
        message: 'Selecione o campo Sexo',
        duration: 3000,
        position: 'top'
      });
      toast.present();

      return false;
    }

    if (!this.form.nome) {
      const toast = this.toastCtrl.create({
        message: 'Preencha o campo nome',
        duration: 3000,
        position: 'top'
      });
      toast.present();

      return false;
    }

    if (!this.form.celular) {
      const toast = this.toastCtrl.create({
        message: 'Preencha o campo celular',
        duration: 3000,
        position: 'top'
      });
      toast.present();

      return false;
    }

    if (this.form.hasOwnProperty('celular')) {
      if (this.form.celular.length < 15) {
        const toast = this.toastCtrl.create({
          message: 'Preencha o campo celular corretamente',
          duration: 3000,
          position: 'top'
        });
        toast.present();

        return false;
      }
    }


    if (!this.form.idade) {
      const toast = this.toastCtrl.create({
        message: 'Preencha o campo idade',
        duration: 3000,
        position: 'top'
      });
      toast.present();

      return false;
    }

    if (!this.form.endereco) {
      const toast = this.toastCtrl.create({
        message: 'Preencha o campo endereço',
        duration: 3000,
        position: 'top'
      });
      toast.present();

      return false;
    }

    if (!this.form.uf) {
      const toast = this.toastCtrl.create({
        message: 'Preencha o campo UF',
        duration: 3000,
        position: 'top'
      });
      toast.present();

      return false;
    }

    if (!this.form.cidade) {
      const toast = this.toastCtrl.create({
        message: 'Preencha o campo cidade',
        duration: 3000,
        position: 'top'
      });
      toast.present();

      return false;
    }

    if (!this.nomePesquisador) {
      const toast = this.toastCtrl.create({
        message: 'Preencha o campo nome pesquisador',
        duration: 3000,
        position: 'top'
      });
      toast.present();

      return false;
    }

    return true;
  }

  offline() {
    this.isEnabled = false;

    this.storage.get('respostas').then((respostas: any) => {
      let result: any = [];
      if (!respostas) {
        result.push(this.post);
      } else {
        result = JSON.parse(respostas);
        result.push(this.post);
      }

      this.storage.set('respostas', JSON.stringify(result));
      this.storage.set('auditoria', JSON.stringify(result));

      this.navCtrl.push('MensagemPage', this.post );

      this.isEnabled = true;
    });
  }

  proximo() {
    if (!this._validForm()) {
      return;
    }

    this.post.participante = this.form;
    this.post.observacoes = (this.observacoes)? this.observacoes : '-';
    this.post.nomePesquisador = this.nomePesquisador;

    let result: any = [];
    result.push(this.post);

    this.isEnabled = false;

    this.service.save({ data: result }).then((response: any) => {
      if (response.status === 'success') {
        let alert = this.alertCtrl.create({
          title: 'Alerta',
          message: 'Sua pesquisa foi sincronizada',
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

        this.navCtrl.push('MensagemPage', this.post);
      }
      this.isEnabled = true;

    }).catch(() => {
      this.offline();
    });

  }
}
