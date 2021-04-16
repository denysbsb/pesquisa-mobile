webpackJsonp([4],{

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesquisaPageModule", function() { return PesquisaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pesquisa__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PesquisaPageModule = (function () {
    function PesquisaPageModule() {
    }
    PesquisaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pesquisa__["a" /* PesquisaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pesquisa__["a" /* PesquisaPage */]),
            ],
        })
    ], PesquisaPageModule);
    return PesquisaPageModule;
}());

//# sourceMappingURL=pesquisa.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
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
 * Generated class for the PesquisaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PesquisaPage = (function () {
    function PesquisaPage(navCtrl, navParams, modalCtrl, platform, toastCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.active = false;
        this.optionDescription = false;
        this.pesquisa = {};
        this.post = {};
        this.selecteds = [];
        this.post = {};
        this.selecteds = [];
        this.start = new Date();
        this.events.subscribe('pesquisa.descricao', function (item) {
            _this.activeNext(item);
        });
        platform.registerBackButtonAction(function () {
            console.log('disabilitando back button');
        }, 1);
    }
    PesquisaPage.prototype.ionViewDidLoad = function () {
        this.pesquisa = this.navParams.data;
    };
    PesquisaPage.prototype.activeNext = function (item, item2) {
        if (item2 === void 0) { item2 = null; }
        if (item2 != null) {
            if (item.opcao.toString().toLocaleLowerCase().indexOf('outros') >= 0) {
                var modal = this.modalCtrl.create('DescricaoPage', { item: item, title: item2.questao });
                modal.present();
                this.active = false;
                return;
            }
        }
        var check = this.selecteds.filter(function (data) { return data.id === item.id; });
        if (check.length === 0) {
            this.selecteds.push(item);
        }
        this.active = true;
        if (item.hasOwnProperty('descricao')) {
            this.slider.slideNext();
        }
    };
    PesquisaPage.prototype.activePrev = function () {
        this.slider.slidePrev();
    };
    PesquisaPage.prototype.proximo = function () {
        if (this.slider.isEnd()) {
            this.navCtrl.push('ParticipantePage', this.selecteds);
            return;
        }
        this.slider.slideNext();
        this.active = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], PesquisaPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wizard'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], PesquisaPage.prototype, "slider", void 0);
    PesquisaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pesquisa',template:/*ion-inline-start:"/Users/marioeugenio/Sites/htdocs/PESSOAL/pesquisa/src/pages/pesquisa/pesquisa.html"*/'<!--\n  Generated template for the PesquisaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ pesquisa.nome }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides #wizard>\n    <ion-slide class="swiper-no-swiping" *ngFor="let item of pesquisa.questoes">\n\n      <div class="title-question">\n        {{ item.questao }}\n      </div>\n\n      <div class="box white">\n        <ion-list radio-group [(ngModel)]="optionSelect">\n          <ion-item *ngFor="let option of item.opcoes">\n            <ion-label>{{ option.opcao }}</ion-label>\n            <ion-radio value="{{ option.id }}" (click)="activeNext(option, item)"></ion-radio>\n          </ion-item>\n        </ion-list>\n\n      </div>\n\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n\n<ion-footer>\n  <ion-fab bottom center *ngIf="active">\n    <button ion-fab *ngIf="!slider.isBeginning()" class="btn-back" (click)="activePrev()">\n      <ion-icon name="ios-arrow-round-back"></ion-icon>\n    </button>\n    <button ion-fab *ngIf="!slider.isEnd()" class="btn-forward" (click)="proximo()">\n      <ion-icon name="ios-arrow-round-forward"></ion-icon>\n    </button>\n    <button ion-fab *ngIf="slider.isEnd()" class="btn-forward" (click)="proximo()">\n      <ion-icon name="ios-arrow-round-forward"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-footer>\n'/*ion-inline-end:"/Users/marioeugenio/Sites/htdocs/PESSOAL/pesquisa/src/pages/pesquisa/pesquisa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], PesquisaPage);
    return PesquisaPage;
}());

//# sourceMappingURL=pesquisa.js.map

/***/ })

});
//# sourceMappingURL=4.js.map