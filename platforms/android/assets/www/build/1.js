webpackJsonp([1],{

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesquisadorPageModule", function() { return PesquisadorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pesquisador__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PesquisadorPageModule = (function () {
    function PesquisadorPageModule() {
    }
    PesquisadorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pesquisador__["a" /* PesquisadorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pesquisador__["a" /* PesquisadorPage */]),
            ],
        })
    ], PesquisadorPageModule);
    return PesquisadorPageModule;
}());

//# sourceMappingURL=pesquisador.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pesquisador__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_base_service__ = __webpack_require__(751);
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
 * Generated class for the PesquisadorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PesquisadorPage = (function () {
    function PesquisadorPage(navCtrl, navParams, service, base, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.base = base;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.key = '12345';
    }
    PesquisadorPage.prototype.ionViewWillLeave = function () {
    };
    PesquisadorPage.prototype.next = function () {
        this.checarCodigo();
    };
    PesquisadorPage.prototype.checarCodigo = function () {
        var _this = this;
        var key = this.key;
        var nomePesquisador = this.nomePesquisador;
        if (!nomePesquisador) {
            var toast = this.toastCtrl.create({
                message: 'Digite o nome do Pesquisador',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
        this.storage.set('nomePesquisador', nomePesquisador);
        if (!this.base.isOnline()) {
            var pesquisador = this.storage.get('pesquisador');
            if (pesquisador) {
                this.navCtrl.push('QuizPage');
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Você está OFFLINE, e não existe usuário gravado, tente algum ponto de acesso para iniciar a pesquisa',
                    duration: 5000,
                    position: 'top'
                });
                toast.present();
            }
            return;
        }
        this.service.verificarChave(key).then(function (response) {
            if (response.status === 'success') {
                if (response.data) {
                    _this.storage.set('pesquisador', JSON.stringify(response.data));
                    _this.navCtrl.push('QuizPage');
                }
                else {
                    var toast_1 = _this.toastCtrl.create({
                        message: 'Chave inválida',
                        duration: 3000,
                        position: 'top'
                    });
                    toast_1.present();
                }
                return;
            }
            var toast = _this.toastCtrl.create({
                message: response.messages,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }).catch(function () {
            var pesquisador = _this.storage.get('pesquisador');
            if (pesquisador) {
                _this.navCtrl.push('QuizPage');
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Você está OFFLINE, e não existe usuário gravado, tente algum ponto de acesso para iniciar a pesquisa',
                    duration: 5000,
                    position: 'top'
                });
                toast.present();
            }
        });
    };
    PesquisadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pesquisador',template:/*ion-inline-start:"/Users/marioeugenio/Sites/htdocs/PESSOAL/pesquisa/src/pages/pesquisador/pesquisador.html"*/'<!--\n  Generated template for the PesquisadorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pesquisador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img class="icone" src="assets/img/key.png">\n\n  <div class="mensagem">\n    <h2>Pesquisador</h2>\n    <p>Preencha o campo abaixo com seu nome de pesquisador.</p>\n  </div>\n\n  <div class="content">\n    <ion-input type="text" class="input-key" maxlength="100" [(ngModel)]="nomePesquisador" placeholder="DIGITE O NOME DO PESQUISADOR"></ion-input>\n\n    <button ion-button block type="button" (click)="next()">ENTRAR</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/marioeugenio/Sites/htdocs/PESSOAL/pesquisa/src/pages/pesquisador/pesquisador.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_pesquisador__["a" /* PesquisadorService */], __WEBPACK_IMPORTED_MODULE_4__services_base_service__["a" /* BaseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_pesquisador__["a" /* PesquisadorService */],
            __WEBPACK_IMPORTED_MODULE_4__services_base_service__["a" /* BaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], PesquisadorPage);
    return PesquisadorPage;
}());

//# sourceMappingURL=pesquisador.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisadorService; });
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



var PesquisadorService = (function () {
    function PesquisadorService(http) {
        this.http = http;
    }
    PesquisadorService.prototype.verificarChave = function (key) {
        var params = {
            key: key
        };
        var observable = this.http.get('pesquisador-codigo', params);
        return new Promise(function (resolve, reject) {
            observable.subscribe(function (res) {
                resolve(res.json());
            }, function (error) {
                reject(error);
            });
        });
    };
    PesquisadorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mbamobi_http__["b" /* Http */]])
    ], PesquisadorService);
    return PesquisadorService;
}());

//# sourceMappingURL=pesquisador.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseService = (function () {
    function BaseService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.TIMEOUT = 20000;
        this.arrParams = [];
        this.mensagemSemConexao = 'Sem conexão de dados.';
        this.mensagemServicoIndisponivel = 'O acesso ao serviço está impossibilitado no momento.';
        this.mensagemErroSalvarDados = 'Não foi possível salvar os dados.';
        this.mensagemErroExcluirDados = 'Não foi possível excluir os dados.';
        this.mensagemTimeout = 'Não foi possível realizar sua solicitação. Tente novamente mais tarde';
        this.arrParams = [];
    }
    BaseService.prototype.get = function (url, options) {
        var _this = this;
        if (!this.isOnline()) {
            return new Promise(function (resolve, reject) {
                resolve(null);
                reject(_this.mensagemSemConexao);
            });
        }
        options = this.montarOptions(options);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.getUrl() + url, options).subscribe(function (data) {
                try {
                    _this.storage.set(url, JSON.stringify(data.json()));
                    resolve(data.json());
                }
                catch (error) {
                    console.log('Erro = ', error);
                    reject(error);
                }
            }, function (error) {
                console.log('Erro = ', error);
                reject('Não foi possível recuperar os dados.');
            });
        });
    };
    BaseService.prototype.post = function (url, body, options) {
        var _this = this;
        if (!this.isOnline()) {
            return new Promise(function (resolve, reject) {
                resolve(null);
                reject(_this.mensagemSemConexao);
            });
        }
        options = this.montarOptions(options);
        this.arrParams.push(url);
        this.arrParams.push(body);
        this.arrParams.push(options);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.getUrl() + url, body, options).timeout(_this.TIMEOUT).subscribe(function (data) {
                try {
                    var dados = data.json();
                    if (dados.sucesso) {
                        resolve(dados);
                    }
                    else {
                        reject(dados.mensagem);
                    }
                }
                catch (error) {
                    console.log('Erro = ', error);
                    reject(error);
                }
            }, function (error) {
                console.log('POST error = ', error);
                if (typeof error === 'string' && error.toLowerCase().indexOf('timeout') !== -1) {
                    reject(_this.mensagemTimeout);
                    return;
                }
                else if (error && error.status === 403) {
                }
                else {
                    console.log('ERROR GERAL ');
                    reject(_this.mensagemErroSalvarDados);
                }
            });
        });
    };
    BaseService.prototype.delete = function (url, options) {
        var _this = this;
        if (!this.isOnline()) {
            return new Promise(function (resolve, reject) {
                resolve(null);
                reject(_this.mensagemSemConexao);
            });
        }
        options = this.montarOptions(options);
        this.arrParams.push(url);
        this.arrParams.push(options);
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.getUrl() + url, options).timeout(_this.TIMEOUT).subscribe(function () {
                resolve();
            }, function (error) {
                if (typeof error === 'string' && error.toLowerCase().indexOf('timeout') !== -1) {
                    reject(_this.mensagemTimeout);
                    return;
                }
                else if (error && error.status === 403) {
                }
                else {
                    console.log('ERROR GERAL ');
                    reject(_this.mensagemErroExcluirDados);
                }
            });
        });
    };
    BaseService.prototype.put = function (url, body, options) {
        var _this = this;
        if (!this.isOnline()) {
            return new Promise(function (resolve, reject) {
                resolve(null);
                reject(_this.mensagemSemConexao);
            });
        }
        options = this.montarOptions(options);
        this.arrParams.push(url);
        this.arrParams.push(body);
        this.arrParams.push(options);
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.getUrl() + url, body, options).timeout(_this.TIMEOUT).subscribe(function () {
                resolve();
            }, function (error) {
                if (typeof error === 'string' && error.toLowerCase().indexOf('timeout') !== -1) {
                    reject(_this.mensagemTimeout);
                    return;
                }
                else if (error && error.status === 403) {
                }
                else {
                    console.log('ERROR GERAL ');
                    reject(_this.mensagemServicoIndisponivel);
                }
            });
        });
    };
    BaseService.prototype.montarOptions = function (options) {
        if (!options) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ headers: headers });
        }
        return options;
    };
    BaseService.prototype.isOnline = function () {
        /*if (this.network.type === 'unknown' || this.network.type === 'none') {
            return false;
        }*/
        return true;
    };
    BaseService.prototype.getUrl = function () {
        this.urlOficial = this.urlBase;
        return this.urlOficial;
    };
    BaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], BaseService);
    return BaseService;
}());

//# sourceMappingURL=base-service.js.map

/***/ })

});
//# sourceMappingURL=1.js.map