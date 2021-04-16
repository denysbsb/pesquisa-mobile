webpackJsonp([2],{

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantePageModule", function() { return ParticipantePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__participante__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_mask_directive__ = __webpack_require__(747);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ParticipantePageModule = (function () {
    function ParticipantePageModule() {
    }
    ParticipantePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__participante__["a" /* ParticipantePage */],
                __WEBPACK_IMPORTED_MODULE_3_ionic2_mask_directive__["a" /* Ionic2MaskDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__participante__["a" /* ParticipantePage */])
            ],
        })
    ], ParticipantePageModule);
    return ParticipantePageModule;
}());

//# sourceMappingURL=participante.module.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mbamobi_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/**
 * Created by marioeugenio on 8/10/18.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizService = (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.loadQuiz = function () {
        var observable = this.http.get('quiz');
        return new Promise(function (resolve, reject) {
            observable.subscribe(function (res) {
                resolve(res.json());
            }, function (error) {
                reject(error);
            });
        });
    };
    QuizService.prototype.save = function (params) {
        var observable = this.http.post('quiz', params);
        return new Promise(function (resolve, reject) {
            observable.subscribe(function (res) {
                resolve(res.json());
            }, function (error) {
                reject(error);
            });
        });
    };
    QuizService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mbamobi_http__["b" /* Http */]])
    ], QuizService);
    return QuizService;
}());

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quiz__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ParticipantePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ParticipantePage = (function () {
    function ParticipantePage(navCtrl, navParams, viewCtrl, alertCtrl, service, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.form = {};
        this.post = {};
        this.isEnabled = true;
        this.cities = [
            { nome: 'Asa Sul' },
            { nome: 'Asa Norte' },
            { nome: 'Águas Claras' },
            { nome: 'Brazlândia' },
            { nome: 'Candangolândia' },
            { nome: 'Ceilândia' },
            { nome: 'Cruzeiro' },
            { nome: 'Estrutural' },
            { nome: 'Fercal' },
            { nome: 'Gama' },
            { nome: 'Guará' },
            { nome: 'Itapoã' },
            { nome: 'Jardim Botânico' },
            { nome: 'Lago Sul' },
            { nome: 'Lago Norte' },
            { nome: 'Núcleo Bandeirante' },
            { nome: 'Park Way' },
            { nome: 'Paranoá' },
            { nome: 'Planaltina' },
            { nome: 'Plano Piloto' },
            { nome: 'Recanto das Emas' },
            { nome: 'Riacho Fundo' },
            { nome: 'Riacho Fundo II' },
            { nome: 'SIA' },
            { nome: 'Samambaia' },
            { nome: 'Santa Maria' },
            { nome: 'São Sebastião' },
            { nome: 'Sobradinho II' },
            { nome: 'Sobradinho' },
            { nome: 'Sudoeste/Octogonal' },
            { nome: 'Taguatinga' },
            { nome: 'Varjão' },
            { nome: 'Vicente Pires' }
        ];
        this.states = [
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
        this.ages = [
            { key: 1, value: '16 a 19 anos' },
            { key: 2, value: '20 a 24 anos' },
            { key: 3, value: '25 a 29 anos' },
            { key: 4, value: '30 a 39 anos' },
            { key: 5, value: '40 a 49 anos' },
            { key: 6, value: '50 a 59 anos' },
            { key: 7, value: '60 a 69 anos' },
            { key: 8, value: '70 ou mais' },
        ];
        this.start = new Date();
        this.form = { uf: 'DF' };
    }
    ParticipantePage.prototype.ngOnInit = function () {
        this.start = new Date();
        this.form = { uf: 'DF' };
    };
    ParticipantePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = this.navParams.data;
        this.storage.get('offline').then(function (value) {
            _this.isOffline = (value) ? value : _this.isOffline;
        });
        this.storage.get('nomePesquisador').then(function (value) {
            _this.nomePesquisador = value;
        });
        this.storage.get('pesquisador').then(function (value) {
            _this.storage.get('latitude').then(function (value) { _this.post.latitude = value; });
            _this.storage.get('longitude').then(function (value) { _this.post.longitude = value; });
            _this.storage.get('endereco').then(function (value) { _this.post.endereco = value; });
            _this.post = {
                inicio: _this.start,
                pesquisador: JSON.parse(value),
                selecoes: params
            };
        });
    };
    ParticipantePage.prototype.detail = function (address) {
        console.log(address);
    };
    ParticipantePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ParticipantePage.prototype._validForm = function () {
        if (!this.form.sexo) {
            var toast = this.toastCtrl.create({
                message: 'Selecione o campo Sexo',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return false;
        }
        if (!this.form.nome) {
            var toast = this.toastCtrl.create({
                message: 'Preencha o campo nome',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return false;
        }
        if (!this.form.celular) {
            var toast = this.toastCtrl.create({
                message: 'Preencha o campo celular',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return false;
        }
        if (this.form.hasOwnProperty('celular')) {
            if (this.form.celular.length < 15) {
                var toast = this.toastCtrl.create({
                    message: 'Preencha o campo celular corretamente',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                return false;
            }
        }
        if (!this.form.idade) {
            var toast = this.toastCtrl.create({
                message: 'Preencha o campo idade',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return false;
        }
        if (!this.form.endereco) {
            var toast = this.toastCtrl.create({
                message: 'Preencha o campo endereço',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return false;
        }
        if (!this.form.uf) {
            var toast = this.toastCtrl.create({
                message: 'Preencha o campo UF',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return false;
        }
        if (!this.form.cidade) {
            var toast = this.toastCtrl.create({
                message: 'Preencha o campo cidade',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return false;
        }
        if (!this.nomePesquisador) {
            var toast = this.toastCtrl.create({
                message: 'Preencha o campo nome pesquisador',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return false;
        }
        return true;
    };
    ParticipantePage.prototype.offline = function () {
        var _this = this;
        this.isEnabled = false;
        this.storage.get('respostas').then(function (respostas) {
            var result = [];
            if (!respostas) {
                result.push(_this.post);
            }
            else {
                result = JSON.parse(respostas);
                result.push(_this.post);
            }
            _this.storage.set('respostas', JSON.stringify(result));
            _this.storage.set('auditoria', JSON.stringify(result));
            _this.navCtrl.push('MensagemPage', _this.post);
            _this.isEnabled = true;
        });
    };
    ParticipantePage.prototype.proximo = function () {
        var _this = this;
        if (!this._validForm()) {
            return;
        }
        this.post.participante = this.form;
        this.post.observacoes = (this.observacoes) ? this.observacoes : '-';
        this.post.nomePesquisador = this.nomePesquisador;
        var result = [];
        result.push(this.post);
        this.isEnabled = false;
        this.service.save({ data: result }).then(function (response) {
            if (response.status === 'success') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Alerta',
                    message: 'Sua pesquisa foi sincronizada',
                    buttons: [
                        {
                            text: 'OK',
                            role: 'cancel',
                            handler: function () {
                            }
                        }
                    ]
                });
                alert_1.present();
                _this.navCtrl.push('MensagemPage', _this.post);
            }
            _this.isEnabled = true;
        }).catch(function () {
            _this.offline();
        });
    };
    ParticipantePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-participante',template:/*ion-inline-start:"/Users/marioeugenio/Sites/htdocs/PESSOAL/pesquisa/src/pages/participante/participante.html"*/'<!--\n  Generated template for the ParticipantePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>participante</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list radio-group [(ngModel)]="form.sexo">\n    <ion-item>\n      <ion-label stacked>* Sexo</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Masculino</ion-label>\n      <ion-radio value="M"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Feminino</ion-label>\n      <ion-radio value="F"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>* Nome</ion-label>\n      <ion-input [(ngModel)]="form.nome" type="text" maxlength="100"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>* Celular</ion-label>\n      <ion-input [(ngModel)]="form.celular" mask="(99)9 9999-9999" type="tel" maxlength="20"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>* Idade</ion-label>\n      <ion-select [(ngModel)]="form.idade">\n        <ion-option *ngFor="let age of ages" value="{{age.key}}">{{age.value}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>* Endereço</ion-label>\n      <ion-input [(ngModel)]="form.endereco" type="text" maxlength="100"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>* UF</ion-label>\n      <ion-select [(ngModel)]="form.uf">\n        <ion-option *ngFor="let state of states" value="{{state.key}}">{{state.value}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>* Cidade</ion-label>\n      <ion-select [(ngModel)]="form.cidade">\n        <ion-option *ngFor="let city of cities" value="{{city.nome}}">{{city.nome}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Observações</ion-label>\n      <ion-input [(ngModel)]="observacoes" type="text" maxlength="100"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>* Nome Pesquisador</ion-label>\n      <ion-input [disabled]="true" [(ngModel)]="nomePesquisador" type="text" maxlength="100"></ion-input>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-fab bottom center>\n    <button ion-fab (click)="proximo()" [disabled]="!isEnabled">\n      <ion-icon name="ios-checkmark"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-footer>\n'/*ion-inline-end:"/Users/marioeugenio/Sites/htdocs/PESSOAL/pesquisa/src/pages/participante/participante.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_quiz__["a" /* QuizService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_quiz__["a" /* QuizService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ParticipantePage);
    return ParticipantePage;
}());

//# sourceMappingURL=participante.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2MaskDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);


var Ionic2MaskDirective = /** @class */ (function () {
    /**
     * @param {?} control
     */
    function Ionic2MaskDirective(control) {
        this.control = control;
    }
    /**
     * @return {?}
     */
    Ionic2MaskDirective.prototype.ngOnChanges = function () {
        var /** @type {?} */ value = this.control.control.value;
        if (value) {
            this.control.control.setValue(this.format(value));
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Ionic2MaskDirective.prototype.onKeyUp = function ($event) {
        if ($event.keyCode !== 13 && $event.keyCode !== 9) {
            var /** @type {?} */ value = this.control.control.value;
            this.control.control.setValue(this.format(value));
        }
    };
    /**
     * @param {?} v
     * @return {?}
     */
    Ionic2MaskDirective.prototype.format = function (v) {
        var /** @type {?} */ s = '';
        var /** @type {?} */ matches = v.match(/[a-zA-Z0-9]+/g);
        if (matches !== null) {
            var /** @type {?} */ value = matches.join('').split('');
            var /** @type {?} */ chars = this.mask.split('');
            for (var _i = 0, chars_1 = chars; _i < chars_1.length; _i++) {
                var c = chars_1[_i];
                if (value.length === 0) {
                    break;
                }
                switch (c) {
                    case '#':
                        s += value[0];
                        value = value.slice(1);
                        break;
                    case '9':
                        if (value[0].match(/\d/) !== null) {
                            s += value[0];
                            value = value.slice(1);
                        }
                        break;
                    case 'A':
                        if (value[0].match(/[a-zA-Z]/) !== null) {
                            s += value[0];
                            value = value.slice(1);
                        }
                        break;
                    default:
                        s += c;
                }
            }
        }
        return s;
    };
    return Ionic2MaskDirective;
}());
Ionic2MaskDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mask]'
            },] },
];
/**
 * @nocollapse
 */
Ionic2MaskDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"], },
]; };
Ionic2MaskDirective.propDecorators = {
    'mask': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ngOnChanges': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['change',] },],
    'onKeyUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keyup', ['$event'],] },],
};
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ionic2-mask-directive.es5.js.map


/***/ })

});
//# sourceMappingURL=2.js.map