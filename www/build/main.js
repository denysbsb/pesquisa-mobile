webpackJsonp([7],{

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/descricao/descricao.module": [
		610,
		6
	],
	"../pages/home/home.module": [
		611,
		3
	],
	"../pages/mensagem/mensagem.module": [
		612,
		5
	],
	"../pages/participante/participante.module": [
		613,
		2
	],
	"../pages/pesquisa/pesquisa.module": [
		614,
		4
	],
	"../pages/pesquisador/pesquisador.module": [
		615,
		1
	],
	"../pages/quiz/quiz.module": [
		616,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(285);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export extraMessageError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_env__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mbamobi_configuration__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mbamobi_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mbamobi_url_resolver__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_text_mask__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// extração mensagem de erro do serviço
function extraMessageError() { }
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */], {
                    links: [
                        { loadChildren: '../pages/descricao/descricao.module#DescricaoPageModule', name: 'DescricaoPage', segment: 'descricao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mensagem/mensagem.module#MensagemPageModule', name: 'MensagemPage', segment: 'mensagem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/participante/participante.module#ParticipantePageModule', name: 'ParticipantePage', segment: 'participante', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pesquisa/pesquisa.module#PesquisaPageModule', name: 'PesquisaPage', segment: 'pesquisa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pesquisador/pesquisador.module#PesquisadorPageModule', name: 'PesquisadorPage', segment: 'pesquisador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quiz/quiz.module#QuizPageModule', name: 'QuizPage', segment: 'quiz', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_8__mbamobi_configuration__["b" /* ConfigurationModule */].initialize(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* Env */]),
                __WEBPACK_IMPORTED_MODULE_10__mbamobi_url_resolver__["b" /* UrlResolverModule */].initialize(),
                __WEBPACK_IMPORTED_MODULE_9__mbamobi_http__["c" /* HttpModule */].initialize(__WEBPACK_IMPORTED_MODULE_9__mbamobi_http__["a" /* DefaultPlugins */])
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_9__mbamobi_http__["d" /* ThrowExceptionStatusToken */], useValue: extraMessageError },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["LOCALE_ID"], useValue: 'pt-BR' },
                __WEBPACK_IMPORTED_MODULE_2__app_env__["b" /* ProviderEnv */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__["a" /* Network */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, splashscreen, statusBar) {
        var _this = this;
        this.platform = platform;
        this.splashscreen = splashscreen;
        this.statusBar = statusBar;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
        });
    }
    MyApp.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.openHome();
        });
    };
    MyApp.prototype.openHome = function () {
        var _this = this;
        this.nav.setRoot('home').then(function () {
            _this.splashscreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-nav></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APP_ROUTES_DEV */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
// TODO link para documentação do URL resolver com docs e exemplos
var APP_ROUTES_DEV = {
    '_defaults': {
        'host': 'http://ec2-18-231-113-162.sa-east-1.compute.amazonaws.com/pesquisa/quiz_ws/web/app.php/api',
        'variables': {
            'mock': 'http://ec2-18-231-113-162.sa-east-1.compute.amazonaws.com/pesquisa/quiz_ws/web/app.php/api'
        }
    },
    'quiz': {
        'url': '{mock}/quiz'
    },
    'pesquisador-codigo': {
        'url': '{mock}/pesquisador/key/{key}'
    },
    'google': {
        'url': 'https://api.opencagedata.com/geocode/v1/json?q={latlng}&key=ad3d91912fc04caf8a912af30e99ae04'
    }
};
var AppConfig = {
    preloadModules: true,
    authentication: {
        http: {
            url: 'login',
            paramNameIdentity: 'cpf',
            paramNameCredential: 'senha',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }
    },
    urlResolver: {
        dev: APP_ROUTES_DEV
    },
    http: {
        defaultOptions: {
            timeout: 2000
        }
    }
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Env; });
/* unused harmony export EnvToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProviderEnv; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var Env = 'dev';
var EnvToken = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('ENVTOKEN');
var ProviderEnv = { provide: EnvToken, useValue: Env };
//# sourceMappingURL=app.env.js.map

/***/ })

},[280]);
//# sourceMappingURL=main.js.map