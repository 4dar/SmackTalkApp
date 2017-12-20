webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_login_login_component__ = __webpack_require__("../../../../../src/app/landing/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_register_register_component__ = __webpack_require__("../../../../../src/app/landing/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__choose_team_create_team_create_team_component__ = __webpack_require__("../../../../../src/app/choose-team/create-team/create-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choose_team_choose_team_component__ = __webpack_require__("../../../../../src/app/choose-team/choose-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__join_team_join_team_component__ = __webpack_require__("../../../../../src/app/join-team/join-team.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__["a" /* LandingComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__landing_register_register_component__["a" /* RegisterComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__landing_login_login_component__["a" /* LoginComponent */] },
        ] },
    { path: 'chooseTeam', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_6__choose_team_choose_team_component__["a" /* ChooseTeamComponent */] },
    { path: 'createTeam', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__choose_team_create_team_create_team_component__["a" /* CreateTeamComponent */] },
    { path: 'joinTeam', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_8__join_team_join_team_component__["a" /* JoinTeamComponent */] },
    { path: 'home', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] }
];
// export const routing = RouterModule.forRoot(routes);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__join_team_join_team_component__ = __webpack_require__("../../../../../src/app/join-team/join-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__landing_login_login_component__ = __webpack_require__("../../../../../src/app/landing/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landing_register_register_component__ = __webpack_require__("../../../../../src/app/landing/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__choose_team_create_team_create_team_component__ = __webpack_require__("../../../../../src/app/choose-team/create-team/create-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__choose_team_choose_team_component__ = __webpack_require__("../../../../../src/app/choose-team/choose-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__landing_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__landing_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_11__choose_team_create_team_create_team_component__["a" /* CreateTeamComponent */],
                __WEBPACK_IMPORTED_MODULE_7__join_team_join_team_component__["a" /* JoinTeamComponent */],
                __WEBPACK_IMPORTED_MODULE_12__choose_team_choose_team_component__["a" /* ChooseTeamComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/choose-team/choose-team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container{\n    /* -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n    -o-filter: blur(5px);\n    -ms-filter: blur(5px);\n    filter: blur(5px); */\n    background-image: url(" + __webpack_require__("../../../../../src/app/landing/static/smacktalkerspic.jpg") + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-height: 1200px;\n    /* padding-top: 100px; */\n}\n\n#headerbar{\n    height: 100px;\n    padding-top: 20px;\n    width: auto;\n}\n\n#logo{\n    height: 100px;\n    width: 210px;\n    background-color: white;\n    background-image: url(" + __webpack_require__("../../../../../src/app/landing/static/smacktestlogo.png") + ");\n    background-size: cover;\n    border-radius: 40px;\n    opacity: .95;\n    margin-left: 20px;\n    \n}\n\n#buttonContainer{\n    height: 400px;\n    width: 500px;\n    margin: 0px auto;\n}\nh1{\n    margin: 0px 393px 30px;\n    font-size: 40px;\n    font-family: 'Open Sans', sans-serif;    \n    color: #282946;   \n}\n\n.buttonTitle{\n    color: #282946;   \n    font-size: 30px;\n    font-family: 'Open Sans', sans-serif;    \n    \n}\np{\n    color: #282946;   \n    font-size: 20px;\n    font-weight: 250;\n    font-family: 'Open Sans', sans-serif;        \n}\n\nbutton{\n    color: #282946;       \n    height: 200px;\n    width: 500px;\n    margin: 30px auto;\n    background-color: white;\n    /* background-image: url(./static/smacktestlogo.png); */\n    /* background-size: cover; */\n    border-radius: 40px;\n    opacity: .95;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/choose-team/choose-team.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"headerbar\">\n        <div id=\"logo\"></div>\n    </div>\n    <h1>Prepare your palms.</h1>\n    <div id=\"buttonContainer\">\n        <button [routerLink]=\"['/createTeam']\">\n            <h3 class=\"buttonTitle\">Create a new team</h3>\n            <p>Start a new space for your friends.</p>\n        </button>\n        <button [routerLink]=\"['/joinTeam']\">\n            <h3 class=\"buttonTitle\">Find your team</h3>\n            <p>Join an existing team.</p>\n        </button>\n    </div>\n</div>\n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/choose-team/choose-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseTeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChooseTeamComponent = (function () {
    function ChooseTeamComponent(_dataService, _route, _router) {
        this._dataService = _dataService;
        this._route = _route;
        this._router = _router;
    }
    ChooseTeamComponent.prototype.ngOnInit = function () {
    };
    ChooseTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-choose-team',
            template: __webpack_require__("../../../../../src/app/choose-team/choose-team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/choose-team/choose-team.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ChooseTeamComponent);
    return ChooseTeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/choose-team/create-team/create-team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n    display: inline-block;\n    vertical-align: top;\n    margin: 25px;\n} \n\nbutton {\n    display: block;\n}\nfieldset {\n    width: 150px;\n}\n\nli {\n    list-style: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/choose-team/create-team/create-team.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div>\n    <fieldset>\n      <legend>Invite friends to join your new team</legend>\n      <button *ngFor=\"let user of allUsers, let idx = index\">{{ user.username }}</button>\n    </fieldset>\n  </div>\n\n  <div>\n    <fieldset>\n      <legend>Team Name</legend>\n      <input type=\"text\" name=\"teamName\" >\n    </fieldset>\n  </div>\n\n  <div>\n    <fieldset>\n      <legend>Write a description of your Team</legend>\n      <textarea name=\"teamDesc\" cols=\"30\" rows=\"10\"></textarea>\n    </fieldset>\n  </div>\n\n\n  <div>\n    <fieldset>\n      <legend>New Team Members</legend>\n      <ul>\n        <li>User 1</li>\n        <li>User 4</li>\n      </ul>\n    </fieldset>\n  </div>\n\n    <br><br>\n<button (click)=\"createTeam()\">Create Team</button>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/choose-team/create-team/create-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateTeamComponent = (function () {
    function CreateTeamComponent(_dataService, _route, _router) {
        this._dataService = _dataService;
        this._route = _route;
        this._router = _router;
    }
    CreateTeamComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    CreateTeamComponent.prototype.createTeam = function () {
        console.log('Create team button clicked.');
    };
    CreateTeamComponent.prototype.getAllUsers = function () {
        var _this = this;
        this._dataService.getAllUsers()
            .then(function (response) {
            _this.allUsers = response.userKey;
            console.log('Returned all users from db', _this.allUsers);
        });
    };
    CreateTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-team',
            template: __webpack_require__("../../../../../src/app/choose-team/create-team/create-team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/choose-team/create-team/create-team.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CreateTeamComponent);
    return CreateTeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.addUser = function (newUser) {
        return this._http.post('/api/registerUser', newUser)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    DataService.prototype.getAllUsers = function () {
        console.log('reached the getAllUsers function in service.ts file');
        return this._http.get('/api/getAllUsers')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    DataService.prototype.login = function (user) {
        return this._http.post('/api/loginUser', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Home</h1>\n\n<a [routerLink]=\"['/chooseTeam']\">Go to chooseTeam page</a>\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/join-team/join-team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/join-team/join-team.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Hello this is some html for join-team component</h1>"

/***/ }),

/***/ "../../../../../src/app/join-team/join-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinTeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinTeamComponent = (function () {
    function JoinTeamComponent() {
    }
    JoinTeamComponent.prototype.ngOnInit = function () {
    };
    JoinTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-join-team',
            template: __webpack_require__("../../../../../src/app/join-team/join-team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/join-team/join-team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JoinTeamComponent);
    return JoinTeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container{\n    /* -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n    -o-filter: blur(5px);\n    -ms-filter: blur(5px);\n    filter: blur(5px); */\n    background-image: url(" + __webpack_require__("../../../../../src/app/landing/static/smacktalkerspic.jpg") + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-height: 1200px;\n    padding-top: 100px;\n}\n\n#logo{\n    height: 300px;\n    width: 700px;\n    margin: 0px auto;\n    background-color: white;\n    background-image: url(" + __webpack_require__("../../../../../src/app/landing/static/smacktestlogo.png") + ");\n    background-size: cover;\n    border-radius: 40px;\n    opacity: .95;\n    \n}\n\n/* \n#loginRegBox{\n    width: 700px;\n    height: 300px;\n    margin: 80px auto 0px;\n    background-color: #FFFFFF;\n    opacity: .95;\n    border-radius: 40px;\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"logo\">\n\n  </div>\n  <div id=\"loginRegBox\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#login{\n    width: 700px;\n    height: 430px;\n    margin: 80px auto 0px;\n    background-color: #FFFFFF;\n    opacity: .95;\n    border-radius: 40px;\n}\n\n#logTitle{\n    font-family: 'Open Sans', sans-serif;\n    color: #282946;\n    text-decoration: none;\n    font-size: 50px;\n    text-align: center;\n    font-weight: 800;\n    letter-spacing: 15px;\n    padding-top: 40px;\n    line-height: 1;\n    /* text-shadow: #FFFFFF 3px 2px 0; */\n    position: relative;\n    \n}\n\n\n.inputfields{\n    font-size: 30px;\n    height: 60px;\n    width: 600px;\n    margin-top: 20px;\n    margin-left: 50px;\n    font-weight: 10;  \n    letter-spacing: 1px;    \n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    text-align: center;\n}\n\n\n#loginButton{\n    height: 60px;\n    width: 200px;\n    font-size: 30px;\n    font-weight: 1000;\n    color: #282946;\n    margin-top: 30px;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\nh3{\n    /* display: inline-block; */\n    margin-left: 350px;\n    margin-top: -18px;\n}\n\n::-webkit-input-placeholder { \n    color: #D8D8D8;\n    text-align: center;\n}\n::-moz-placeholder { \n    color: #D8D8D8;\n    text-align: center;\n}\n:-ms-input-placeholder { \n    color: #D8D8D8;\n    text-align: center;\n}\n:-moz-placeholder { \n    color: #D8D8D8;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"logo\">\n\n  </div>\n  <div id=\"loginBox\">\n    <div id=\"login\">\n      <h1 id=\"logTitle\">Login</h1>\n      <form class=\"inputs\" (submit)=\"onSubmit()\">\n        <input placeholder=\"Email Address\" class=\"inputfields\" type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\"><br>\n        <input placeholder=\"Password\" class=\"inputfields\" type=\"text\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\"><br>\n        <input class=\"inputfields\" id=\"loginButton\" type=\"submit\" value=\"Login\">\n      </form>\n      <h3>Don't have an account? <a [routerLink]=\"['']\">Register here!</a></h3>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/landing/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._dataService.login(this.user).then(function (data) {
            if (data.error) {
                console.log(data.error);
            }
            else {
                _this._router.navigateByUrl('home');
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/landing/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#registration{\n    width: 700px;\n    height: 600px;\n    margin: 80px auto 0px;\n    background-color: #FFFFFF;\n    opacity: .95;\n    border-radius: 40px;\n}\n\n#regTitle{\n    font-family: 'Open Sans', sans-serif;\n    color: #282946;\n    text-decoration: none;\n    font-size: 50px;\n    text-align: center;\n    font-weight: 800;\n    letter-spacing: 15px;\n    padding-top: 40px;\n    line-height: 1;\n    /* text-shadow: #FFFFFF 3px 2px 0; */\n    position: relative;\n    \n}\n\n\n.inputfields{\n    font-size: 30px;\n    height: 60px;\n    width: 600px;\n    margin-top: 20px;\n    margin-left: 50px;\n    font-weight: 10;  \n    letter-spacing: 1px;    \n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    text-align: center;\n}\n\n\n#registerButton{\n    height: 60px;\n    width: 200px;\n    color: #282946;\n    font-size: 30px;\n    font-weight: 1000;\n    margin-top: 30px;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\nh3{\n    /* display: inline-block; */\n    margin-left: 350px;\n    margin-top: -18px;\n\n}\n\n::-webkit-input-placeholder { \n    color: #D8D8D8;\n    text-align: center;\n}\n::-moz-placeholder { \n    color: #D8D8D8;\n    text-align: center;\n}\n:-ms-input-placeholder { \n    color: #D8D8D8;\n    text-align: center;\n}\n:-moz-placeholder { \n    color: #D8D8D8;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"logo\">\n  </div>\n    <div id=\"registration\">\n      <h1 id=\"regTitle\">Register</h1>\n      <form class=\"inputs\" (submit)=\"onSubmit()\">\n        <input placeholder=\"Username\" class=\"inputfields\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" #username required minlength=\"2\"><br>\n        <input placeholder=\"Email Address\" class=\"inputfields\" type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" #email required minlength=\"5\"><br>\n        <input placeholder=\"Password\" class=\"inputfields\" type=\"text\" name=\"password\" [(ngModel)]=\"user.password\" #password required minlength=\"4\"><br>\n        <input placeholder=\"Confirm Password\" class=\"inputfields\" type=\"text\" name=\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\" #confirmPassword required minlength=\"4\"><br>\n        <input class=\"inputfields\" id=\"registerButton\" type=\"submit\" value=\"Register\">\n      </form>\n      <h3>Already using Smack Talk? <a [routerLink]=\"['login']\">Sign in.</a></h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/landing/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this._dataService.addUser(this.user).then(function (data) {
            if (data.error) {
                console.log(data.error);
            }
            else {
                _this._router.navigateByUrl('chooseTeam');
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/landing/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/static/smacktalkerspic.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "smacktalkerspic.683b734aa0dd1ecb7632.jpg";

/***/ }),

/***/ "../../../../../src/app/landing/static/smacktestlogo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "smacktestlogo.f27ac345af0ce87f5e8f.png";

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map