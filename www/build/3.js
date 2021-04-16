webpackJsonp([3],{

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(743);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(744);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(storage, navCtrl, emailComposer) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.emailComposer = emailComposer;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('respostas').then(function (respostas) {
            if (respostas) {
                _this.registro = 'SIM';
                var data = JSON.parse(respostas);
                _this.nuPesuquisa = data.length;
            }
            else {
                _this.registro = 'NÃO';
            }
        });
    };
    HomePage.prototype.startQuiz = function () {
        this.navCtrl.push('PesquisadorPage');
    };
    HomePage.prototype.sendEmail = function () {
        var _this = this;
        this.storage.get('respostas').then(function (respostas) {
            if (respostas) {
                var email = {
                    to: 'mario.eugenio@gmail.com',
                    cc: '',
                    bcc: [],
                    attachments: [],
                    subject: 'DADOS PESQUISA',
                    body: respostas,
                    isHtml: true
                };
                _this.emailComposer.open(email);
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])({
            name: 'home'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-page',template:/*ion-inline-start:"/Users/marioeugenio/Sites/htdocs/PESSOAL/pesquisa/src/pages/home/home.html"*/'<ion-content>\n  <img class="logo" src="assets/icon/logo.png">\n  <div class="content">\n    <button ion-button block class="start" disabled="true" type="button" (click)="startQuiz()">\n      INICIAR PESQUISA\n    </button>\n    <div class="relatorio-final">\n      <p><span>Tem Registros: </span>{{registro}}</p>\n      <p *ngIf="registro === \'SIM\'"><span>Nº de pesquisas: </span>{{nuPesuquisa}}</p><br><br>\n\n      <button *ngIf="registro === \'SIM\'" ion-button block class="start" type="button" (click)="sendEmail()">\n        ENVIAR PESQUISA\n      </button>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="contact">\n    <div class="title">RMI Tecnologia - V0.1.9</div>\n    <div class="phone">tel.: (61) 99334-5445</div>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/marioeugenio/Sites/htdocs/PESSOAL/pesquisa/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComposer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(76);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Email Composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/hypery2k/cordova-email-plugin).
 *
 *
 * @usage
 * ```typescript
 * import { EmailComposer } from '@ionic-native/email-composer';
 *
 * constructor(private emailComposer: EmailComposer) { }
 *
 * ...
 *
 *
 * this.emailComposer.isAvailable().then((available: boolean) =>{
 *  if(available) {
 *    //Now we know we can send
 *  }
 * });
 *
 * let email = {
 *   to: 'max@mustermann.de',
 *   cc: 'erika@mustermann.de',
 *   bcc: ['john@doe.com', 'jane@doe.com'],
 *   attachments: [
 *     'file://img/logo.png',
 *     'res://icon.png',
 *     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
 *     'file://README.pdf'
 *   ],
 *   subject: 'Cordova Icons',
 *   body: 'How are you? Nice greetings from Leipzig',
 *   isHtml: true
 * };
 *
 * // Send a text message using default options
 * this.emailComposer.open(email);
 * ```
 *
 * You can also assign aliases to email apps
 * ```ts
 * // add alias
 * this.email.addAlias('gmail', 'com.google.android.gm');
 *
 * // then use alias when sending email
 * this.email.open({
 *   app: 'gmail',
 *   ...
 * });
 * ```
 * @interfaces
 * EmailComposerOptions
 */
var EmailComposer = (function (_super) {
    __extends(EmailComposer, _super);
    function EmailComposer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposer_1 = EmailComposer;
    /**
     * Checks if the app has a permission to access email accounts information
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the permission was granted
     */
    /**
       * Checks if the app has a permission to access email accounts information
       * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the permission was granted
       */
    EmailComposer.prototype.hasPermission = /**
       * Checks if the app has a permission to access email accounts information
       * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the permission was granted
       */
    function () {
        return;
    };
    /**
     * Request permission to access email accounts information
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the permission was granted
     */
    /**
       * Request permission to access email accounts information
       * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the permission was granted
       */
    EmailComposer.prototype.requestPermission = /**
       * Request permission to access email accounts information
       * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the permission was granted
       */
    function () {
        return;
    };
    /**
     * Verifies if sending emails is supported on the device.
     *
     * @param {string} [app] App id or uri scheme.
     * @returns {Promise<any>} Resolves if available, rejects if not available
     */
    /**
       * Verifies if sending emails is supported on the device.
       *
       * @param {string} [app] App id or uri scheme.
       * @returns {Promise<any>} Resolves if available, rejects if not available
       */
    EmailComposer.prototype.isAvailable = /**
       * Verifies if sending emails is supported on the device.
       *
       * @param {string} [app] App id or uri scheme.
       * @returns {Promise<any>} Resolves if available, rejects if not available
       */
    function (app) {
        return new Promise(function (resolve, reject) {
            if (app) {
                EmailComposer_1.getPlugin().isAvailable(app, function (isAvailable) {
                    if (isAvailable) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
            else {
                EmailComposer_1.getPlugin().isAvailable(function (isAvailable) {
                    if (isAvailable) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    /**
     * Displays the email composer pre-filled with data.
     *
     * @param {EmailComposerOptions} options Email
     * @param {any} [scope] Scope for the promise
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    /**
       * Displays the email composer pre-filled with data.
       *
       * @param {EmailComposerOptions} options Email
       * @param {any} [scope] Scope for the promise
       * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
       */
    EmailComposer.prototype.open = /**
       * Displays the email composer pre-filled with data.
       *
       * @param {EmailComposerOptions} options Email
       * @param {any} [scope] Scope for the promise
       * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
       */
    function (options, scope) {
        return;
    };
    /**
     * Adds a new mail app alias.
     *
     * @param {string} alias The alias name
     * @param {string} packageName The package name
     */
    /**
       * Adds a new mail app alias.
       *
       * @param {string} alias The alias name
       * @param {string} packageName The package name
       */
    EmailComposer.prototype.addAlias = /**
       * Adds a new mail app alias.
       *
       * @param {string} alias The alias name
       * @param {string} packageName The package name
       */
    function (alias, packageName) { };
    EmailComposer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 0,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], EmailComposer.prototype, "hasPermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 0,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], EmailComposer.prototype, "requestPermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], EmailComposer.prototype, "isAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], EmailComposer.prototype, "open", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], EmailComposer.prototype, "addAlias", null);
    /**
     * @name Email Composer
     * @description
     *
     * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/hypery2k/cordova-email-plugin).
     *
     *
     * @usage
     * ```typescript
     * import { EmailComposer } from '@ionic-native/email-composer';
     *
     * constructor(private emailComposer: EmailComposer) { }
     *
     * ...
     *
     *
     * this.emailComposer.isAvailable().then((available: boolean) =>{
     *  if(available) {
     *    //Now we know we can send
     *  }
     * });
     *
     * let email = {
     *   to: 'max@mustermann.de',
     *   cc: 'erika@mustermann.de',
     *   bcc: ['john@doe.com', 'jane@doe.com'],
     *   attachments: [
     *     'file://img/logo.png',
     *     'res://icon.png',
     *     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
     *     'file://README.pdf'
     *   ],
     *   subject: 'Cordova Icons',
     *   body: 'How are you? Nice greetings from Leipzig',
     *   isHtml: true
     * };
     *
     * // Send a text message using default options
     * this.emailComposer.open(email);
     * ```
     *
     * You can also assign aliases to email apps
     * ```ts
     * // add alias
     * this.email.addAlias('gmail', 'com.google.android.gm');
     *
     * // then use alias when sending email
     * this.email.open({
     *   app: 'gmail',
     *   ...
     * });
     * ```
     * @interfaces
     * EmailComposerOptions
     */
    EmailComposer = EmailComposer_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* Plugin */])({
            pluginName: 'EmailComposer',
            plugin: 'cordova-plugin-email-composer',
            pluginRef: 'cordova.plugins.email',
            repo: 'https://github.com/katzer/cordova-plugin-email-composer',
            platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Windows', 'macOS']
        })
    ], EmailComposer);
    return EmailComposer;
    var EmailComposer_1;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=3.js.map