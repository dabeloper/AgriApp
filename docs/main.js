(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/layouts/auth-layout/auth-layout.component */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth.gaurd */ "./src/app/shared/services/auth.gaurd.ts");
/* harmony import */ var _shared_components_layouts_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/layouts/blank-layout/blank-layout.component */ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts");
/* harmony import */ var _shared_components_layouts_map_layout_map_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/layouts/map-layout/map-layout.component */ "./src/app/shared/components/layouts/map-layout/map-layout.component.ts");








var adminRoutes = [
    {
        path: 'dashboard',
        loadChildren: function () { return __webpack_require__.e(/*! import() | views-dashboard-dashboard-module */ "AgriApp/views-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./views/dashboard/dashboard.module */ "./src/app/views/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'calendar',
        loadChildren: function () { return __webpack_require__.e(/*! import() | views-calendar-calendar-module */ "AgriApp/views-calendar-calendar-module").then(__webpack_require__.bind(null, /*! ./views/calendar/calendar.module */ "./src/app/views/calendar/calendar.module.ts")).then(function (m) { return m.CalendarAppModule; }); }
    }
];
var routes = [
    {
        path: '',
        redirectTo: 'dashboard/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _shared_components_layouts_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_4__["BlankLayoutComponent"],
        children: [
            {
                path: 'others',
                loadChildren: function () { return __webpack_require__.e(/*! import() | views-others-others-module */ "AgriApp/views-others-others-module").then(__webpack_require__.bind(null, /*! ./views/others/others.module */ "./src/app/views/others/others.module.ts")).then(function (m) { return m.OthersModule; }); }
            }
        ]
    },
    {
        path: '',
        component: _shared_components_layouts_map_layout_map_layout_component__WEBPACK_IMPORTED_MODULE_5__["MapLayoutComponent"],
        canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]],
        children: adminRoutes
    },
    {
        path: '**',
        redirectTo: 'others/404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/loading.service */ "./src/app/shared/services/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");






function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(loadingService) {
        var _this = this;
        this.loadingService = loadingService;
        this.title = 'bootDash';
        this.isLoading = false;
        this.loadingService.loading$.subscribe(function (isLoading) {
            _this.isLoading = isLoading;
        });
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [["id", "loading", 4, "ngIf"], ["id", "loading"], [1, "spinner-glow", "spinner-glow-warning"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#loading[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 9999999999;\r\n    position: absolute;\r\n    background: rgba(255,255,255,0.5);\r\n}\r\n\r\n#loading[_ngcontent-%COMP%]   .spinner-glow[_ngcontent-%COMP%] {\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    position: absolute;\r\n    border: 2px #FFF;\r\n    border-style: solid;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2FkaW5nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxufVxyXG5cclxuI2xvYWRpbmcgLnNwaW5uZXItZ2xvdyB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMnB4ICNGRkY7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59Il19 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var _shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/inmemory-db/inmemory-db.service */ "./src/app/shared/inmemory-db/inmemory-db.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_7__["InMemoryDataService"], { passThruUnknownUrl: true }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["InMemoryWebApiModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_7__["InMemoryDataService"], { passThruUnknownUrl: true }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/animations/shared-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/shared-animations.ts ***!
  \********************************************************/
/*! exports provided: SharedAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedAnimations", function() { return SharedAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");

var reusable = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
var SharedAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(reusable)])]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            display: 'block'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
];


/***/ }),

/***/ "./src/app/shared/components/btn-loading/btn-loading.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/btn-loading/btn-loading.component.ts ***!
  \************************************************************************/
/*! exports provided: BtnLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnLoadingComponent", function() { return BtnLoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



function BtnLoadingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function BtnLoadingComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BtnLoadingComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.loadingText);
} }
var _c0 = function (a0) { return { loading: a0 }; };
var _c1 = ["*"];
var BtnLoadingComponent = /** @class */ (function () {
    function BtnLoadingComponent() {
        this.loadingText = 'Please wait';
        this.type = 'submit';
    }
    BtnLoadingComponent.prototype.ngOnInit = function () {
    };
    BtnLoadingComponent.ɵfac = function BtnLoadingComponent_Factory(t) { return new (t || BtnLoadingComponent)(); };
    BtnLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BtnLoadingComponent, selectors: [["btn-loading"]], inputs: { loading: "loading", btnClass: "btnClass", loadingText: "loadingText", type: "type" }, ngContentSelectors: _c1, decls: 4, vars: 11, consts: [[3, "type", "disabled", "ngClass"], ["class", "btn-spinner float-left", 4, "ngIf"], [4, "ngIf"], [1, "btn-spinner", "float-left"]], template: function BtnLoadingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BtnLoadingComponent_div_1_Template, 1, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BtnLoadingComponent_span_2_Template, 2, 0, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BtnLoadingComponent_span_3_Template, 2, 1, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn ", ctx.btnClass, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("disabled", ctx.loading)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.loading));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["button[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all .15s ease-in-out;\n}\n\nbutton.loading[_ngcontent-%COMP%] {\n  padding-left: 36px;\n}\n\nbutton[_ngcontent-%COMP%]   .btn-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnRuLWxvYWRpbmcvWTpcXFBST1lFQ1RPU1xcSVQyNzBcXFNUQU5EQVJEXFxhZ3JpYXBwL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGJ0bi1sb2FkaW5nXFxidG4tbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnRuLWxvYWRpbmcvYnRuLWxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0FDQ3BDOztBREhBO0VBSVEsa0JBQWtCO0FDRzFCOztBRFBBO0VBT1Esa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVU7QUNJbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9idG4tbG9hZGluZy9idG4tbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICYubG9hZGluZyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzZweDtcbiAgICB9XG4gICAgLmJ0bi1zcGlubmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgIH1cbn1cbiIsImJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ1dHRvbi5sb2FkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xufVxuXG5idXR0b24gLmJ0bi1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBsZWZ0OiAxMHB4O1xufVxuIl19 */"] });
    return BtnLoadingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BtnLoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'btn-loading',
                templateUrl: './btn-loading.component.html',
                styleUrls: ['./btn-loading.component.scss']
            }]
    }], function () { return []; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['loading']
        }], btnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['btnClass']
        }], loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['loadingText']
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['type']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/customizer/customizer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _services_customizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customizer.service */ "./src/app/shared/services/customizer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};












var _c0 = function (a0) { return { active: a0 }; };
function CustomizerComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var l_r16 = ctx.$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.selectLayout(l_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var l_r16 = ctx.$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r15.customizer.selectedLayout.name === l_r16.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", l_r16.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomizerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomizerComponent_ng_template_7_div_1_Template, 3, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "More layouts coming...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.layouts);
} }
function CustomizerComponent_ngb_panel_8_ng_template_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ngb_panel_8_ng_template_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var c_r21 = ctx.$implicit; var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.selectSidebarColor(c_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r21 = ctx.$implicit;
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("color ", c_r21.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, (ctx_r20.customizer == null ? null : ctx_r20.customizer.selectedSidebarColor == null ? null : ctx_r20.customizer.selectedSidebarColor.class) === c_r21.class))("title", c_r21.class);
} }
function CustomizerComponent_ngb_panel_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomizerComponent_ngb_panel_8_ng_template_1_a_1_Template, 2, 7, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.colors);
} }
function CustomizerComponent_ngb_panel_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-panel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomizerComponent_ngb_panel_8_ng_template_1_Template, 2, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizerComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizerComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_12_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.isRTL = $event; })("change", function CustomizerComponent_ng_template_12_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.toggleDir(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enable RTL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.isRTL);
} }
var _c1 = function (a0) { return { open: a0 }; };
var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(navService, customizer, router) {
        this.navService = navService;
        this.customizer = customizer;
        this.router = router;
        this.isOpen = true;
        this.colors = [];
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav = __spread(this.navService.defaultMenu);
        this.layouts = this.customizer.layouts;
        this.colors = this.customizer.colors;
        if (!this.customizer.selectedLayout) {
            this.layouts.forEach(function (layout) {
                if (layout.active) {
                    _this.selectLayout(layout);
                }
            });
        }
        if (!this.customizer.selectedSidebarColor) {
            this.colors.forEach(function (color) {
                if (color.active) {
                    _this.selectSidebarColor(color);
                }
            });
        }
    };
    CustomizerComponent.prototype.ngOnDestroy = function () { };
    CustomizerComponent.prototype.selectLayout = function (selectedLayout) {
        this.customizer.selectedLayout = selectedLayout;
        this.customizer.modifySidebarUrls(this.nav, selectedLayout.name);
        // this.navService.menuItems.next(this.nav);
        this.changeLayoutRoute(selectedLayout.name);
        // reset color on layout change
        if (this.customizer.selectedSidebarColor) {
            this.selectSidebarColor(this.customizer.selectedSidebarColor);
        }
    };
    CustomizerComponent.prototype.selectSidebarColor = function (color) {
        var _this = this;
        setTimeout(function () {
            var adminWrap = document.querySelector(".app-admin-wrap");
            var selectedColor = __assign({}, _this.customizer.selectedSidebarColor);
            _this.customizer.removeClass(adminWrap, selectedColor.sidebarClass);
            _this.customizer.addClass(adminWrap, color.sidebarClass);
            _this.customizer.selectedSidebarColor = color;
        }, 40);
    };
    CustomizerComponent.prototype.changeLayoutRoute = function (route) {
        var currentRoute = this.router.url;
        var changedRoute = this.customizer.replaceUrlString(route, currentRoute);
        this.router.navigateByUrl(changedRoute);
    };
    CustomizerComponent.prototype.toggleDir = function () {
        this.customizer.toggleDir(this.isRTL);
    };
    CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) { return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_2__["CustomizerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    CustomizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizerComponent, selectors: [["app-customizer"]], decls: 13, vars: 4, consts: [[1, "customizer", 3, "ngClass"], [1, "handle", 3, "click"], [1, "i-Gear", "spin"], ["perfectScrollbar", "", 1, "customizer-body"], ["activeIds", "tab-layouts, tab-sidebar-colors"], ["acc", "ngbAccordion"], ["title", "Layouts", "id", "tab-layouts"], ["ngbPanelContent", ""], ["id", "tab-sidebar-colors", "title", "Sidebar Colors", 4, "ngIf"], ["title", "Bootstrap themes"], ["title", "Others"], [1, "layouts"], ["class", "layout-box", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "text-center", "pt-3"], [1, "layout-box", 3, "ngClass", "click"], ["alt", "", 3, "src"], [1, "i-Eye"], ["id", "tab-sidebar-colors", "title", "Sidebar Colors"], [1, "colors"], [3, "class", "ngClass", "title", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "title", "click"], ["href", "http://gull.ui-lib.com/purple/", 1, "color", "purple"], ["href", "http://gull.ui-lib.com/blue/", 1, "color", "blue"], [1, "checkbox", "checkbox-primary"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "checkmark"]], template: function CustomizerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_div_click_1_listener() { return ctx.isOpen = !ctx.isOpen; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-accordion", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-panel", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomizerComponent_ng_template_7_Template, 4, 1, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomizerComponent_ngb_panel_8_Template, 2, 0, "ngb-panel", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-panel", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomizerComponent_ng_template_10_Template, 3, 0, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-panel", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CustomizerComponent_ng_template_12_Template, 5, 1, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.isOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customizer.selectedLayout.name !== "applayout-sidebar-large");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPanelContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1c3RvbWl6ZXIvY3VzdG9taXplci5jb21wb25lbnQuc2NzcyJ9 */"] });
    return CustomizerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-customizer",
                templateUrl: "./customizer.component.html",
                styleUrls: ["./customizer.component.scss"]
            }]
    }], function () { return [{ type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }, { type: _services_customizer_service__WEBPACK_IMPORTED_MODULE_2__["CustomizerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/feather-icon/feather-icon.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/feather-icon/feather-icon.component.ts ***!
  \**************************************************************************/
/*! exports provided: FeatherIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatherIconComponent", function() { return FeatherIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FeatherIconComponent = /** @class */ (function () {
    function FeatherIconComponent() {
    }
    FeatherIconComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            feather.replace();
        });
    };
    FeatherIconComponent.ɵfac = function FeatherIconComponent_Factory(t) { return new (t || FeatherIconComponent)(); };
    FeatherIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatherIconComponent, selectors: [["feather-icon"]], inputs: { name: "name" }, decls: 1, vars: 1, template: function FeatherIconComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-feather", ctx.name);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZlYXRoZXItaWNvbi9mZWF0aGVyLWljb24uY29tcG9uZW50LnNjc3MifQ== */"] });
    return FeatherIconComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatherIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'feather-icon',
                templateUrl: './feather-icon.component.html',
                styleUrls: ['./feather-icon.component.scss']
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['name']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 0, vars: 0, template: function FooterComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
    AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 3, vars: 0, consts: [[1, "auth-layout-wrap", 2, "background-image", "url(./assets/images/photo-wide-4.jpg)"], [1, "auth-content"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return AuthLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html',
                styleUrls: ['./auth-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BlankLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLayoutComponent", function() { return BlankLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var BlankLayoutComponent = /** @class */ (function () {
    function BlankLayoutComponent() {
    }
    BlankLayoutComponent.prototype.ngOnInit = function () {
    };
    BlankLayoutComponent.ɵfac = function BlankLayoutComponent_Factory(t) { return new (t || BlankLayoutComponent)(); };
    BlankLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankLayoutComponent, selectors: [["app-blank-layout"]], decls: 1, vars: 0, template: function BlankLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvYmxhbmstbGF5b3V0L2JsYW5rLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return BlankLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank-layout',
                templateUrl: './blank-layout.component.html',
                styleUrls: ['./blank-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/layouts/layouts.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/layouts/layouts.module.ts ***!
  \*************************************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank-layout/blank-layout.component */ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/search.module */ "./src/app/shared/components/search/search.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../customizer/customizer.component */ "./src/app/shared/components/customizer/customizer.component.ts");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _map_layout_map_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map-layout/map-layout.component */ "./src/app/shared/components/layouts/map-layout/map-layout.component.ts");
/* harmony import */ var _map_layout_sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map-layout/sidebar-large/sidebar-large.component */ "./src/app/shared/components/layouts/map-layout/sidebar-large/sidebar-large.component.ts");
















var components = [
    _map_layout_sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_14__["SidebarLargeComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
    _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__["CustomizerComponent"],
    _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__["AuthLayoutComponent"],
    _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_3__["BlankLayoutComponent"],
    _map_layout_map_layout_component__WEBPACK_IMPORTED_MODULE_13__["MapLayoutComponent"],
];
var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    LayoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutsModule });
    LayoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); }, imports: [[
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__["SharedPipesModule"],
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return LayoutsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_map_layout_sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_14__["SidebarLargeComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__["CustomizerComponent"],
        _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__["AuthLayoutComponent"],
        _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_3__["BlankLayoutComponent"],
        _map_layout_map_layout_component__WEBPACK_IMPORTED_MODULE_13__["MapLayoutComponent"]], imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__["SharedPipesModule"],
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_map_layout_sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_14__["SidebarLargeComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__["CustomizerComponent"],
        _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__["AuthLayoutComponent"],
        _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_3__["BlankLayoutComponent"],
        _map_layout_map_layout_component__WEBPACK_IMPORTED_MODULE_13__["MapLayoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
                    _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__["SharedPipesModule"],
                    _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: components,
                exports: components
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/layouts/map-layout/map-layout.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/layouts/map-layout/map-layout.component.ts ***!
  \******************************************************************************/
/*! exports provided: MapLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapLayoutComponent", function() { return MapLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar-large/sidebar-large.component */ "./src/app/shared/components/layouts/map-layout/sidebar-large/sidebar-large.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");












function MapLayoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { "sidenav-open": a0 }; };
var _c1 = function () { return { suppressScrollX: true }; };
var MapLayoutComponent = /** @class */ (function () {
    function MapLayoutComponent(navService, searchService, router) {
        this.navService = navService;
        this.searchService = searchService;
        this.router = router;
    }
    MapLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ResolveStart"]) {
                _this.moduleLoading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ResolveEnd"]) {
                _this.moduleLoading = false;
            }
        });
    };
    MapLayoutComponent.ɵfac = function MapLayoutComponent_Factory(t) { return new (t || MapLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    MapLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapLayoutComponent, selectors: [["app-map-layout"]], viewQuery: function MapLayoutComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.perfectScrollbar = _t.first);
        } }, decls: 7, vars: 6, consts: [[1, "app-admin-wrap", "layout-sidebar-large"], [1, "side-content-wrap"], [1, "main-content-wrap", "d-flex", "flex-column", 3, "ngClass", "perfectScrollbar"], [1, "flex-grow-1"], ["class", "module-loader", 4, "ngIf"], [1, "module-loader"], [1, "spinner", "spinner-bubble", "spinner-bubble-primary", "mr-3"]], template: function MapLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar-large");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MapLayoutComponent_div_6_Template, 2, 0, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.navService.sidebarState.sidenavOpen))("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moduleLoading);
        } }, directives: [_sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_5__["SidebarLargeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".main-content-wrap[_ngcontent-%COMP%], .sidebar-overlay[_ngcontent-%COMP%] {\n  width: calc(100% - 120px) !important;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  margin-left: 120px;\n  position: absolute;\n  z-index: 1050;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9tYXAtbGF5b3V0L1k6XFxQUk9ZRUNUT1NcXElUMjcwXFxTVEFOREFSRFxcYWdyaWFwcC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxsYXlvdXRzXFxtYXAtbGF5b3V0XFxtYXAtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUNDakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQtd3JhcCwgLnNpZGViYXItb3ZlcmxheSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwNTA7XHJcbn1cclxuIiwiLm1haW4tY29udGVudC13cmFwLCAuc2lkZWJhci1vdmVybGF5IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEyMHB4KSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDUwO1xufVxuIl19 */"] });
    return MapLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-layout',
                templateUrl: './map-layout.component.html',
                styleUrls: ['./map-layout.component.scss']
            }]
    }], function () { return [{ type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }, { type: src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { perfectScrollbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/layouts/map-layout/sidebar-large/sidebar-large.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/map-layout/sidebar-large/sidebar-large.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SidebarLargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLargeComponent", function() { return SidebarLargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils */ "./src/app/shared/utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../directives/dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
/* harmony import */ var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../directives/dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");
/* harmony import */ var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../directives/dropdown-anchor.directive */ "./src/app/shared/directives/dropdown-anchor.directive.ts");














function SidebarLargeComponent_li_4_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarLargeComponent_li_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.closeChildNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r31.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("nav-icon " + item_r31.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r31.name);
} }
function SidebarLargeComponent_li_4_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SidebarLargeComponent_li_4_div_2_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); var item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.selectItem(item_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("nav-icon " + item_r31.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r31.name);
} }
function SidebarLargeComponent_li_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r31.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("nav-icon " + item_r31.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r31.name);
} }
var _c0 = function (a0) { return { active: a0 }; };
function SidebarLargeComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarLargeComponent_li_4_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); var item_r31 = ctx.$implicit; var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.onClickChangeActiveFlag(item_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarLargeComponent_li_4_div_1_Template, 4, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarLargeComponent_li_4_div_2_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarLargeComponent_li_4_div_3_Template, 5, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r31.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r31.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r31.type === "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r31.type === "extLink");
} }
function SidebarLargeComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function SidebarLargeComponent_ng_template_12_li_1_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    var item_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("nav-icon " + item_r47.icon);
} }
function SidebarLargeComponent_ng_template_12_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarLargeComponent_ng_template_12_li_1_a_1_i_1_Template, 1, 2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r47.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r47.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r47.name);
} }
function SidebarLargeComponent_ng_template_12_li_1_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    var item_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("nav-icon " + item_r47.icon);
} }
function SidebarLargeComponent_ng_template_12_li_1_div_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
var _c1 = function (a0) { return { open: a0 }; };
var _c2 = function (a0) { return { parentItem: a0 }; };
function SidebarLargeComponent_ng_template_12_li_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarLargeComponent_ng_template_12_li_1_div_2_i_2_Template, 1, 2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarLargeComponent_ng_template_12_li_1_div_2_ng_container_6_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, item_r47.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r47.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r47.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r29)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, item_r47));
} }
function SidebarLargeComponent_ng_template_12_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarLargeComponent_ng_template_12_li_1_a_1_Template, 4, 3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarLargeComponent_ng_template_12_li_1_div_2_Template, 7, 9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r47.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r47.type === "dropDown");
} }
function SidebarLargeComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarLargeComponent_ng_template_12_li_1_Template, 3, 2, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var parentItem_r45 = ctx.parentItem;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", parentItem_r45 == null ? null : parentItem_r45.sub);
} }
var _c3 = function () { return { suppressScrollX: true }; };
var SidebarLargeComponent = /** @class */ (function () {
    function SidebarLargeComponent(router, navService) {
        var _this = this;
        this.router = router;
        this.navService = navService;
        setTimeout(function () {
            _this.psContainerSecSidebar = _this.psContainers.toArray()[1];
        });
    }
    SidebarLargeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSidebar();
        // CLOSE SIDENAV ON ROUTE CHANGE
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (routeChange) {
            _this.closeChildNav();
            if (_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isMobile()) {
                _this.navService.sidebarState.sidenavOpen = false;
            }
        });
        this.navService.menuItems$.subscribe(function (items) {
            _this.nav = items;
            _this.setActiveFlag();
        });
    };
    SidebarLargeComponent.prototype.selectItem = function (item) {
        var _this = this;
        this.navService.sidebarState.childnavOpen = true;
        this.navService.selectedItem = item;
        this.setActiveMainItem(item);
        // Scroll to top secondary sidebar
        setTimeout(function () {
            _this.psContainerSecSidebar.update();
            _this.psContainerSecSidebar.scrollToTop(0, 400);
        });
    };
    SidebarLargeComponent.prototype.closeChildNav = function () {
        this.navService.sidebarState.childnavOpen = false;
        this.setActiveFlag();
    };
    SidebarLargeComponent.prototype.onClickChangeActiveFlag = function (item) {
        this.setActiveMainItem(item);
    };
    SidebarLargeComponent.prototype.setActiveMainItem = function (item) {
        this.nav.forEach(function (i) {
            i.active = false;
        });
        item.active = true;
    };
    SidebarLargeComponent.prototype.setActiveFlag = function () {
        var _this = this;
        if (window && window.location) {
            var activeRoute_1 = window.location.hash || window.location.pathname;
            this.nav.forEach(function (item) {
                item.active = false;
                if (activeRoute_1.indexOf(item.state) !== -1) {
                    _this.navService.selectedItem = item;
                    item.active = true;
                }
                if (item.sub) {
                    item.sub.forEach(function (subItem) {
                        subItem.active = false;
                        if (activeRoute_1.indexOf(subItem.state) !== -1) {
                            _this.navService.selectedItem = item;
                            item.active = true;
                        }
                        if (subItem.sub) {
                            subItem.sub.forEach(function (subChildItem) {
                                if (activeRoute_1.indexOf(subChildItem.state) !== -1) {
                                    _this.navService.selectedItem = item;
                                    item.active = true;
                                    subItem.active = true;
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    SidebarLargeComponent.prototype.updateSidebar = function () {
        if (_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isMobile()) {
            this.navService.sidebarState.sidenavOpen = false;
            this.navService.sidebarState.childnavOpen = false;
        }
        else {
            this.navService.sidebarState.sidenavOpen = true;
        }
    };
    SidebarLargeComponent.prototype.onResize = function (event) {
        this.updateSidebar();
    };
    SidebarLargeComponent.ɵfac = function SidebarLargeComponent_Factory(t) { return new (t || SidebarLargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"])); };
    SidebarLargeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarLargeComponent, selectors: [["app-sidebar-large"]], viewQuery: function SidebarLargeComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.psContainers = _t);
        } }, hostBindings: function SidebarLargeComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SidebarLargeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 15, vars: 18, consts: [[1, "sidebar-left", "rtl-ps-none", "world", 3, "ngClass", "perfectScrollbar"], [1, "logo"], ["src", "./assets/images/logo.png", "alt", ""], [1, "navigation-left"], ["class", "nav-item lvl1", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "sidebar-left-secondary", "rtl-ps-none", 3, "ngClass", "perfectScrollbar", "mouseleave"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["menuTemplate", ""], [1, "sidebar-overlay", 3, "ngClass", "click"], [1, "nav-item", "lvl1", 3, "ngClass", "click"], ["class", "nav-item-hold", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-item-hold", 3, "mouseenter", 4, "ngIf"], ["class", "nav-item-hold", 4, "ngIf"], [1, "triangle"], [1, "nav-item-hold", 3, "routerLink", "click"], [1, "nav-text"], [1, "nav-item-hold", 3, "mouseenter"], [1, "nav-item-hold"], ["target", "_blank", 3, "href"], ["appDropdown", "", 1, "childNav"], ["appDropdownLink", "", "class", "nav-item", 4, "ngFor", "ngForOf"], ["appDropdownLink", "", 1, "nav-item"], ["class", "", "routerLinkActive", "open", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["routerLinkActive", "open", 1, "", 3, "routerLink"], [3, "class", 4, "ngIf"], [1, "item-name", "lvl1"], ["appDropdownToggle", "", "routerLinkActive", "open", 3, "ngClass"], [1, "item-name"], [1, "dd-arrow", "i-Arrow-Down"]], template: function SidebarLargeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarLargeComponent_li_4_Template, 5, 6, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function SidebarLargeComponent_Template_div_mouseleave_5_listener() { return ctx.closeChildNav(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Apps");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidebarLargeComponent_ng_container_11_Template, 1, 0, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidebarLargeComponent_ng_template_12_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarLargeComponent_Template_div_click_14_listener() { return ctx.closeChildNav(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.navService.sidebarState.sidenavOpen))("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nav);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.navService.sidebarState.childnavOpen))("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r29)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.navService.selectedItem));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.navService.sidebarState.childnavOpen));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__["AppDropdownDirective"], _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_8__["DropdownLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_9__["DropdownAnchorDirective"]], styles: [".sidebar-left-secondary[_ngcontent-%COMP%], .sidebar-left[_ngcontent-%COMP%] {\n  top: 0px !important;\n  height: 100% !important;\n}\n\n.sidebar-left-secondary[_ngcontent-%COMP%] {\n  z-index: 1051;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9tYXAtbGF5b3V0L3NpZGViYXItbGFyZ2UvWTpcXFBST1lFQ1RPU1xcSVQyNzBcXFNUQU5EQVJEXFxhZ3JpYXBwL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxheW91dHNcXG1hcC1sYXlvdXRcXHNpZGViYXItbGFyZ2VcXHNpZGViYXItbGFyZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvbWFwLWxheW91dC9zaWRlYmFyLWxhcmdlL3NpZGViYXItbGFyZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsdUJBQXVCO0FDQzNCOztBREVBO0VBQ0ksYUFBYTtBQ0NqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvbWFwLWxheW91dC9zaWRlYmFyLWxhcmdlL3NpZGViYXItbGFyZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci1sZWZ0LXNlY29uZGFyeSwgLnNpZGViYXItbGVmdCB7XHJcbiAgICB0b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxlZnQtc2Vjb25kYXJ5IHtcclxuICAgIHotaW5kZXg6IDEwNTE7XHJcbn0iLCIuc2lkZWJhci1sZWZ0LXNlY29uZGFyeSwgLnNpZGViYXItbGVmdCB7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uc2lkZWJhci1sZWZ0LXNlY29uZGFyeSB7XG4gIHotaW5kZXg6IDEwNTE7XG59XG4iXX0= */"] });
    return SidebarLargeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarLargeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar-large',
                templateUrl: './sidebar-large.component.html',
                styleUrls: ['./sidebar-large.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }]; }, { psContainers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"]]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/search/search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-layer.service */ "./src/app/shared/services/data-layer.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _animations_shared_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};














var _c0 = function (a0) { return { delay: a0, y: "50px" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
function SearchComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Gadget");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "del", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r6 = ctx.$implicit;
    var i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, i_r7 * 100 + "ms")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r6.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, item_r6 == null ? null : item_r6.price == null ? null : item_r6.price.sale), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, item_r6 == null ? null : item_r6.price == null ? null : item_r6.price.previous));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-outline-", item_r6 == null ? null : item_r6.badge == null ? null : item_r6.badge.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6 == null ? null : item_r6.badge == null ? null : item_r6.badge.text);
} }
function SearchComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination-controls", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function SearchComponent_div_13_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c2 = function () { return { y: "120px", opacity: "0", delay: "100ms", duration: "400ms" }; };
var _c3 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
var SearchComponent = /** @class */ (function () {
    function SearchComponent(dl, searchService) {
        this.dl = dl;
        this.searchService = searchService;
        this.page = 1;
        this.pageSize = 6;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.results$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.dl.getProducts(), this.searchCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var _b = __read(_a, 2), products = _b[0], searchTerm = _b[1];
            return products.filter(function (p) {
                return p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
        }));
    };
    SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__["DataLayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"])); };
    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 15, vars: 17, consts: [["perfectScrollbar", "", 1, "search-ui", "rtl-ps-none"], [1, "search-header"], ["src", "./assets/images/logo.png", "alt", "", 1, "logo"], [1, "btn", "btn-icon", "bg-transparent", "float-right", "mt-2", 3, "click"], [1, "i-Close-Window", "text-22", "text-muted"], ["type", "text", "placeholder", "Type here", "autofocus", "", 1, "search-input", 3, "formControl"], [1, "search-title"], [1, "text-muted"], [1, "search-results", "list-horizontal"], ["class", "list-item col-md-12 p-0", 4, "ngFor", "ngForOf"], ["class", "col-md-12 mt-3", 4, "ngIf"], [1, "list-item", "col-md-12", "p-0"], [1, "card", "o-hidden", "flex-row", "mb-4", "d-flex"], [1, "list-thumb", "d-flex"], ["alt", "", 3, "src"], [1, "flex-grow-1", "pl-2", "d-flex"], [1, "card-body", "align-self-center", "d-flex", "flex-column", "justify-content-between", "align-items-lg-center", "flex-lg-row"], ["href", "", 1, "w-40", "w-sm-100"], [1, "item-title"], [1, "m-0", "text-muted", "text-small", "w-15", "w-sm-100"], [1, "text-secondary"], [1, "m-0", "text-muted", "text-small", "w-15", "w-sm-100", "d-none", "d-lg-block", "item-badges"], [1, "col-md-12", "mt-3"], ["previousLabel", "", "nextLabel", "", 3, "pageChange"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_3_listener() { return ctx.searchService.searchOpen = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search results");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComponent_div_10_Template, 20, 17, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "paginate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SearchComponent_div_13_Template, 2, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchCtrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx.results$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c3, ctx.pageSize, ctx.page)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, ctx.results$));
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [_animations_shared_animations__WEBPACK_IMPORTED_MODULE_5__["SharedAnimations"]] } });
    return SearchComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss'],
                animations: [_animations_shared_animations__WEBPACK_IMPORTED_MODULE_5__["SharedAnimations"]]
            }]
    }], function () { return [{ type: _services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__["DataLayerService"] }, { type: _services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/search/search.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/search/search.module.ts ***!
  \***********************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component */ "./src/app/shared/components/search/search.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");







var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchModule });
    SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]
            ]] });
    return SearchModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]], exports: [_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]
                ],
                declarations: [_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]],
                exports: [_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/shared-components.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/shared-components.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btn-loading/btn-loading.component */ "./src/app/shared/components/btn-loading/btn-loading.component.ts");
/* harmony import */ var _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feather-icon/feather-icon.component */ "./src/app/shared/components/feather-icon/feather-icon.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.module */ "./src/app/shared/components/search/search.module.ts");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/layouts.module */ "./src/app/shared/components/layouts/layouts.module.ts");












var components = [
    _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_2__["BtnLoadingComponent"],
    _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconComponent"],
];
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
    SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_10__["LayoutsModule"],
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__["SharedPipesModule"],
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                _search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ]] });
    return SharedComponentsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_2__["BtnLoadingComponent"],
        _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_10__["LayoutsModule"],
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__["SharedPipesModule"],
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
        _search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]], exports: [_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_2__["BtnLoadingComponent"],
        _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_10__["LayoutsModule"],
                    _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__["SharedPipesModule"],
                    _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                    _search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
                ],
                declarations: components,
                exports: components
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/directives/dropdown-anchor.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-anchor.directive.ts ***!
  \****************************************************************/
/*! exports provided: DropdownAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownAnchorDirective", function() { return DropdownAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");




var DropdownAnchorDirective = /** @class */ (function () {
    function DropdownAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    DropdownAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    DropdownAnchorDirective.ɵfac = function DropdownAnchorDirective_Factory(t) { return new (t || DropdownAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"])); };
    DropdownAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownAnchorDirective, selectors: [["", "appDropdownToggle", ""]], hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } } });
    return DropdownAnchorDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDropdownToggle]'
            }]
    }], function () { return [{ type: _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"]]
            }] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/dropdown-link.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-link.directive.ts ***!
  \**************************************************************/
/*! exports provided: DropdownLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownLinkDirective", function() { return DropdownLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");




var DropdownLinkDirective = /** @class */ (function () {
    function DropdownLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(DropdownLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    DropdownLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    DropdownLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    DropdownLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    DropdownLinkDirective.ɵfac = function DropdownLinkDirective_Factory(t) { return new (t || DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"])); };
    DropdownLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownLinkDirective, selectors: [["", "appDropdownLink", ""]], hostVars: 2, hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open);
        } }, inputs: { group: "group", open: "open" } });
    return DropdownLinkDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDropdownLink]'
            }]
    }], function () { return [{ type: _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"]]
            }] }]; }, { group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.open']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/dropdown.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/*! exports provided: AppDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDropdownDirective", function() { return AppDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AppDropdownDirective = /** @class */ (function () {
    function AppDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AppDropdownDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AppDropdownDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AppDropdownDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AppDropdownDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AppDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (event) {
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AppDropdownDirective.ɵfac = function AppDropdownDirective_Factory(t) { return new (t || AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AppDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppDropdownDirective, selectors: [["", "appDropdown", ""]] });
    return AppDropdownDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDropdown]'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/directives/full-screen.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/full-screen.directive.ts ***!
  \************************************************************/
/*! exports provided: FullScreenWindowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenWindowDirective", function() { return FullScreenWindowDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FullScreenWindowDirective = /** @class */ (function () {
    function FullScreenWindowDirective() {
    }
    // Full screen
    FullScreenWindowDirective.prototype.cancelFullScreen = function (el) {
        var requestMethod = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullscreen;
        if (requestMethod) { // cancel full screen.
            requestMethod.call(el);
        }
        // else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        //     var wscript = new ActiveXObject("WScript.Shell");
        //     if (wscript !== null) {
        //         wscript.SendKeys("{F11}");
        //     }
        // }
    };
    FullScreenWindowDirective.prototype.requestFullScreen = function (el) {
        // Supports most browsers and their versions.
        var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if (requestMethod) { // Native full screen.
            requestMethod.call(el);
        }
        // else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        //     var wscript = new ActiveXObject("WScript.Shell");
        //     if (wscript !== null) {
        //         wscript.SendKeys("{F11}");
        //     }
        // }
        return false;
    };
    FullScreenWindowDirective.prototype.toggleFullscreen = function () {
        var elem = document.body;
        var isInFullScreen = (document['fullScreenElement'] && document['fullScreenElement'] !== null) || (document['mozFullScreen'] || document['webkitIsFullScreen']);
        if (isInFullScreen) {
            this.cancelFullScreen(document);
        }
        else {
            this.requestFullScreen(elem);
        }
        return false;
    };
    FullScreenWindowDirective.ɵfac = function FullScreenWindowDirective_Factory(t) { return new (t || FullScreenWindowDirective)(); };
    FullScreenWindowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FullScreenWindowDirective, selectors: [["", "fullScreenWindow", ""]], hostBindings: function FullScreenWindowDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullScreenWindowDirective_click_HostBindingHandler($event) { return ctx.toggleFullscreen($event); });
        } } });
    return FullScreenWindowDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullScreenWindowDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[fullScreenWindow]'
            }]
    }], null, { toggleFullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/highlightjs.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/highlightjs.directive.ts ***!
  \************************************************************/
/*! exports provided: HighlightjsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightjsDirective", function() { return HighlightjsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_1__);



// import hljs from 'highlight.js/lib/highlight';
// import javascript from 'highlight.js/lib/languages/javascript';
// import typescript from 'highlight.js/lib/languages/typescript';
var HighlightjsDirective = /** @class */ (function () {
    function HighlightjsDirective(el) {
        var _this = this;
        this.el = el;
        // this.registerLanguages();
        this.nativeEl = this.el.nativeElement;
        setTimeout(function () {
            highlight_js__WEBPACK_IMPORTED_MODULE_1___default.a.highlightBlock(_this.nativeEl);
        });
    }
    HighlightjsDirective.ɵfac = function HighlightjsDirective_Factory(t) { return new (t || HighlightjsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    HighlightjsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HighlightjsDirective, selectors: [["", "highlight", ""]], inputs: { highlight: "highlight" } });
    return HighlightjsDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightjsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[highlight]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { highlight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['highlight']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/scroll-to.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/scroll-to.directive.ts ***!
  \**********************************************************/
/*! exports provided: ScrollToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ScrollToDirective = /** @class */ (function () {
    function ScrollToDirective(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ScrollToDirective.prototype.ngOnInit = function () { };
    ScrollToDirective.prototype.currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) {
            return self.pageYOffset;
        }
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
        }
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) {
            return document.body.scrollTop;
        }
        return 0;
    };
    ScrollToDirective.prototype.elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
    ScrollToDirective.prototype.smoothScroll = function () {
        if (!this.elmID) {
            return;
        }
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20) {
            speed = 20;
        }
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
                leapY += step;
                if (leapY > stopY) {
                    leapY = stopY;
                }
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
            leapY -= step;
            if (leapY < stopY) {
                leapY = stopY;
            }
            timer++;
        }
        return false;
    };
    ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) { return new (t || ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('scrollTo'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    ScrollToDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollToDirective, selectors: [["", "scrollTo", ""]], hostBindings: function ScrollToDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToDirective_click_HostBindingHandler($event) { return ctx.smoothScroll($event); });
        } } });
    return ScrollToDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollToDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[scrollTo]' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['scrollTo']
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { smoothScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/shared-directives.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/shared-directives.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDirectivesModule", function() { return SharedDirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-anchor.directive */ "./src/app/shared/directives/dropdown-anchor.directive.ts");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
/* harmony import */ var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll-to.directive */ "./src/app/shared/directives/scroll-to.directive.ts");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _highlightjs_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./highlightjs.directive */ "./src/app/shared/directives/highlightjs.directive.ts");
/* harmony import */ var _full_screen_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./full-screen.directive */ "./src/app/shared/directives/full-screen.directive.ts");










var directives = [
    _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownAnchorDirective"],
    _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownLinkDirective"],
    _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__["AppDropdownDirective"],
    _scroll_to_directive__WEBPACK_IMPORTED_MODULE_5__["ScrollToDirective"],
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarDirective"],
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarContainerDirective"],
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarContentDirective"],
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarTogglerDirective"],
    _highlightjs_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightjsDirective"],
    _full_screen_directive__WEBPACK_IMPORTED_MODULE_8__["FullScreenWindowDirective"]
];
var SharedDirectivesModule = /** @class */ (function () {
    function SharedDirectivesModule() {
    }
    SharedDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedDirectivesModule });
    SharedDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedDirectivesModule_Factory(t) { return new (t || SharedDirectivesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return SharedDirectivesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedDirectivesModule, { declarations: [_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownAnchorDirective"],
        _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownLinkDirective"],
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__["AppDropdownDirective"],
        _scroll_to_directive__WEBPACK_IMPORTED_MODULE_5__["ScrollToDirective"],
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarDirective"],
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarContainerDirective"],
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarContentDirective"],
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarTogglerDirective"],
        _highlightjs_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightjsDirective"],
        _full_screen_directive__WEBPACK_IMPORTED_MODULE_8__["FullScreenWindowDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownAnchorDirective"],
        _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownLinkDirective"],
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__["AppDropdownDirective"],
        _scroll_to_directive__WEBPACK_IMPORTED_MODULE_5__["ScrollToDirective"],
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarDirective"],
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarContainerDirective"],
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarContentDirective"],
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarTogglerDirective"],
        _highlightjs_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightjsDirective"],
        _full_screen_directive__WEBPACK_IMPORTED_MODULE_8__["FullScreenWindowDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: directives,
                exports: directives
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/directives/sidebar.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/*! exports provided: SidebarContainerDirective, SidebarContentDirective, SidebarDirective, SidebarTogglerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContainerDirective", function() { return SidebarContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContentDirective", function() { return SidebarContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarTogglerDirective", function() { return SidebarTogglerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sidebar-helper.service */ "./src/app/shared/services/sidebar-helper.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/app/shared/utils.ts");





var SidebarContainerDirective = /** @class */ (function () {
    function SidebarContainerDirective(el, _sidenavHelperService) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.nativeEl = this.el.nativeElement;
        this.nativeEl.className += ' sidebar-container';
    }
    SidebarContainerDirective.prototype.ngOnInit = function () {
    };
    SidebarContainerDirective.ɵfac = function SidebarContainerDirective_Factory(t) { return new (t || SidebarContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"])); };
    SidebarContainerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarContainerDirective, selectors: [["", "appSidebarContainer", ""]], inputs: { id: ["appSidebarContainer", "id"] } });
    return SidebarContainerDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarContainerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appSidebarContainer]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appSidebarContainer']
        }] }); })();
var SidebarContentDirective = /** @class */ (function () {
    function SidebarContentDirective(el, _sidenavHelperService, container) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.container = container;
        this.nativeEl = this.el.nativeElement;
        this.container.content = this;
        this.nativeEl.className += ' sidebar-content';
    }
    SidebarContentDirective.prototype.createBackdrop = function () {
    };
    SidebarContentDirective.ɵfac = function SidebarContentDirective_Factory(t) { return new (t || SidebarContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SidebarContainerDirective)); };
    SidebarContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarContentDirective, selectors: [["", "appSidebarContent", ""]], inputs: { id: ["appSidebarContent", "id"] } });
    return SidebarContentDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appSidebarContent]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"] }, { type: SidebarContainerDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SidebarContainerDirective]
            }] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appSidebarContent']
        }] }); })();
var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(el, _sidenavHelperService, container) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.container = container;
        this.align = 'left';
        this.mode = 'side';
        this.nativeEl = this.el.nativeElement;
        this.containerNativeEl = this.container.el.nativeElement;
        this.contentNativeEl = this.container.content.el.nativeElement;
        this.nativeEl.className += ' sidebar';
    }
    SidebarDirective.prototype.ngOnInit = function () {
        this.width = this.el.nativeElement.offsetWidth + 'px';
        this._sidenavHelperService.setSidenav(this.id, this);
        this.initSidebar();
    };
    SidebarDirective.prototype.onResize = function (event) {
        this.initSidebar();
    };
    SidebarDirective.prototype.initSidebar = function () {
        this.closed = _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isMobile();
        if (this.closed) {
            this.close();
        }
        else {
            this.open();
        }
    };
    SidebarDirective.prototype.open = function () {
        if (this.align === 'left') {
            this.nativeEl.style.left = 0;
            if (!_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isMobile()) {
                this.contentNativeEl.style.marginLeft = this.width;
            }
        }
        else if (this.align === 'right') {
            this.nativeEl.style.right = 0;
            if (!_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isMobile()) {
                this.contentNativeEl.style.marginRight = this.width;
            }
        }
        this.closed = false;
    };
    SidebarDirective.prototype.close = function () {
        if (this.align === 'left') {
            this.nativeEl.style.left = '-' + this.width;
            this.contentNativeEl.style.marginLeft = 0;
        }
        else if (this.align === 'right') {
            this.nativeEl.style.right = '-' + this.width;
            this.contentNativeEl.style.marginRight = 0;
        }
        this.closed = true;
    };
    SidebarDirective.prototype.toggle = function () {
        if (this.closed) {
            this.open();
        }
        else {
            this.close();
        }
    };
    SidebarDirective.ɵfac = function SidebarDirective_Factory(t) { return new (t || SidebarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SidebarContainerDirective)); };
    SidebarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarDirective, selectors: [["", "appSidebar", ""]], hostBindings: function SidebarDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SidebarDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, inputs: { align: "align", mode: "mode", id: ["appSidebar", "id"], closed: "closed" } });
    return SidebarDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appSidebar]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"] }, { type: SidebarContainerDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SidebarContainerDirective]
            }] }]; }, { align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['align']
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mode']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appSidebar']
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['closed']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();
var SidebarTogglerDirective = /** @class */ (function () {
    function SidebarTogglerDirective(_sidenavHelperService) {
        this._sidenavHelperService = _sidenavHelperService;
    }
    SidebarTogglerDirective.prototype.onClick = function () {
        this._sidenavHelperService.getSidenav(this.id).toggle();
    };
    SidebarTogglerDirective.ɵfac = function SidebarTogglerDirective_Factory(t) { return new (t || SidebarTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"])); };
    SidebarTogglerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarTogglerDirective, selectors: [["", "appSidebarToggler", ""]], hostBindings: function SidebarTogglerDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarTogglerDirective_click_HostBindingHandler() { return ctx.onClick(); });
        } }, inputs: { id: ["appSidebarToggler", "id"] } });
    return SidebarTogglerDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarTogglerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appSidebarToggler]'
            }]
    }], function () { return [{ type: _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appSidebarToggler']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/inmemory-db/chat-db.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/inmemory-db/chat-db.ts ***!
  \***********************************************/
/*! exports provided: ChatDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDB", function() { return ChatDB; });
var ChatDB = /** @class */ (function () {
    function ChatDB() {
    }
    ChatDB.user = [
        {
            id: '7863a6802ez0e277a0f98534',
            name: 'John Doe',
            avatar: 'assets/images/faces/1.jpg',
            status: 'online',
            chatInfo: [
                {
                    chatId: '89564a680b3249760ea21fe77',
                    contactId: '323sa680b3249760ea21rt47',
                    contactName: 'Frank Powell',
                    unread: 4,
                    lastChatTime: '2017-06-12T02:10:18.931Z'
                },
                {
                    chatId: '3289564a680b2134760ea21fe7753',
                    contactId: '14663a3406eb47ffa63d4fec9429cb71',
                    contactName: 'Betty Diaz',
                    unread: 0,
                    lastChatTime: '2017-06-12T02:10:18.931Z'
                }
            ]
        }
    ];
    ChatDB.contacts = [
        {
            id: '323sa680b3249760ea21rt47',
            name: 'Frank Powell',
            avatar: 'assets/images/faces/13.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: '14663a3406eb47ffa63d4fec9429cb71',
            name: 'Betty Diaz',
            avatar: 'assets/images/faces/12.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: '43bd9bc59d164b5aea498e3ae1c24c3c',
            name: 'Brian Stephens',
            avatar: 'assets/images/faces/3.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: '3fc8e01f3ce649d1caf884fbf4f698e4',
            name: 'Jacqueline Day',
            avatar: 'assets/images/faces/16.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: 'e929b1d790ab49968ed8e34648553df4',
            name: 'Arthur Mendoza',
            avatar: 'assets/images/faces/10.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: 'd6caf04bba614632b5fecf91aebf4564',
            name: 'Jeremy Lee',
            avatar: 'assets/images/faces/9.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: 'be0fb188c8e242f097fafa24632107e4',
            name: 'Johnny Newman',
            avatar: 'assets/images/faces/5.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: 'dea902191b964a68ba5f2d93cff37e13',
            name: 'Jeffrey Little',
            avatar: 'assets/images/faces/15.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: '0bf58f5ccc4543a9f8747350b7bda3c7',
            name: 'Barbara Romero',
            avatar: 'assets/images/faces/4.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: 'c5d7498bbcb84d81fc72168871ac6a6e',
            name: 'Daniel James',
            avatar: 'assets/images/faces/2.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: '97bfbdd9413e46efdaca2010400fe18c',
            name: 'Alice Sanders',
            avatar: 'assets/images/faces/17.jpg',
            status: 'offline',
            mood: ''
        }
    ];
    ChatDB.chatCollection = [
        {
            id: '89564a680b3249760ea21fe77',
            chats: [
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-32T08:45:28.291Z'
                }
            ]
        },
        {
            id: '3289564a680b2134760ea21fe7753',
            chats: [
                {
                    contactId: '14663a3406eb47ffa63d4fec9429cb71',
                    text: 'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-03-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Giving away your knowledge or product just to gain clients?',
                    time: '2018-03-32T08:45:28.291Z'
                },
                {
                    contactId: '14663a3406eb47ffa63d4fec9429cb71',
                    text: 'Yes',
                    time: '2018-03-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-03-32T08:45:28.291Z'
                }
            ]
        }
    ];
    return ChatDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/countries.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/inmemory-db/countries.ts ***!
  \*************************************************/
/*! exports provided: CountryDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDB", function() { return CountryDB; });
var CountryDB = /** @class */ (function () {
    function CountryDB() {
    }
    CountryDB.countries = [
        { display: 'Afghanistan', value: 'AF' },
        { display: 'Åland Islands', value: 'AX' },
        { display: 'Albania', value: 'AL' },
        { display: 'Algeria', value: 'DZ' },
        { display: 'American Samoa', value: 'AS' },
        { display: 'AndorrA', value: 'AD' },
        { display: 'Angola', value: 'AO' },
        { display: 'Anguilla', value: 'AI' },
        { display: 'Antarctica', value: 'AQ' },
        { display: 'Antigua and Barbuda', value: 'AG' },
        { display: 'Argentina', value: 'AR' },
        { display: 'Armenia', value: 'AM' },
        { display: 'Aruba', value: 'AW' },
        { display: 'Australia', value: 'AU' },
        { display: 'Austria', value: 'AT' },
        { display: 'Azerbaijan', value: 'AZ' },
        { display: 'Bahamas', value: 'BS' },
        { display: 'Bahrain', value: 'BH' },
        { display: 'Bangladesh', value: 'BD' },
        { display: 'Barbados', value: 'BB' },
        { display: 'Belarus', value: 'BY' },
        { display: 'Belgium', value: 'BE' },
        { display: 'Belize', value: 'BZ' },
        { display: 'Benin', value: 'BJ' },
        { display: 'Bermuda', value: 'BM' },
        { display: 'Bhutan', value: 'BT' },
        { display: 'Bolivia', value: 'BO' },
        { display: 'Bosnia and Herzegovina', value: 'BA' },
        { display: 'Botswana', value: 'BW' },
        { display: 'Bouvet Island', value: 'BV' },
        { display: 'Brazil', value: 'BR' },
        { display: 'British Indian Ocean Territory', value: 'IO' },
        { display: 'Brunei Darussalam', value: 'BN' },
        { display: 'Bulgaria', value: 'BG' },
        { display: 'Burkina Faso', value: 'BF' },
        { display: 'Burundi', value: 'BI' },
        { display: 'Cambodia', value: 'KH' },
        { display: 'Cameroon', value: 'CM' },
        { display: 'Canada', value: 'CA' },
        { display: 'Cape Verde', value: 'CV' },
        { display: 'Cayman Islands', value: 'KY' },
        { display: 'Central African Republic', value: 'CF' },
        { display: 'Chad', value: 'TD' },
        { display: 'Chile', value: 'CL' },
        { display: 'China', value: 'CN' },
        { display: 'Christmas Island', value: 'CX' },
        { display: 'Cocos (Keeling) Islands', value: 'CC' },
        { display: 'Colombia', value: 'CO' },
        { display: 'Comoros', value: 'KM' },
        { display: 'Congo', value: 'CG' },
        { display: 'Congo, The Democratic Republic of the', value: 'CD' },
        { display: 'Cook Islands', value: 'CK' },
        { display: 'Costa Rica', value: 'CR' },
        { display: 'Cote D\'Ivoire', value: 'CI' },
        { display: 'Croatia', value: 'HR' },
        { display: 'Cuba', value: 'CU' },
        { display: 'Cyprus', value: 'CY' },
        { display: 'Czech Republic', value: 'CZ' },
        { display: 'Denmark', value: 'DK' },
        { display: 'Djibouti', value: 'DJ' },
        { display: 'Dominica', value: 'DM' },
        { display: 'Dominican Republic', value: 'DO' },
        { display: 'Ecuador', value: 'EC' },
        { display: 'Egypt', value: 'EG' },
        { display: 'El Salvador', value: 'SV' },
        { display: 'Equatorial Guinea', value: 'GQ' },
        { display: 'Eritrea', value: 'ER' },
        { display: 'Estonia', value: 'EE' },
        { display: 'Ethiopia', value: 'ET' },
        { display: 'Falkland Islands (Malvinas)', value: 'FK' },
        { display: 'Faroe Islands', value: 'FO' },
        { display: 'Fiji', value: 'FJ' },
        { display: 'Finland', value: 'FI' },
        { display: 'France', value: 'FR' },
        { display: 'French Guiana', value: 'GF' },
        { display: 'French Polynesia', value: 'PF' },
        { display: 'French Southern Territories', value: 'TF' },
        { display: 'Gabon', value: 'GA' },
        { display: 'Gambia', value: 'GM' },
        { display: 'Georgia', value: 'GE' },
        { display: 'Germany', value: 'DE' },
        { display: 'Ghana', value: 'GH' },
        { display: 'Gibraltar', value: 'GI' },
        { display: 'Greece', value: 'GR' },
        { display: 'Greenland', value: 'GL' },
        { display: 'Grenada', value: 'GD' },
        { display: 'Guadeloupe', value: 'GP' },
        { display: 'Guam', value: 'GU' },
        { display: 'Guatemala', value: 'GT' },
        { display: 'Guernsey', value: 'GG' },
        { display: 'Guinea', value: 'GN' },
        { display: 'Guinea-Bissau', value: 'GW' },
        { display: 'Guyana', value: 'GY' },
        { display: 'Haiti', value: 'HT' },
        { display: 'Heard Island and Mcdonald Islands', value: 'HM' },
        { display: 'Holy See (Vatican City State)', value: 'VA' },
        { display: 'Honduras', value: 'HN' },
        { display: 'Hong Kong', value: 'HK' },
        { display: 'Hungary', value: 'HU' },
        { display: 'Iceland', value: 'IS' },
        { display: 'India', value: 'IN' },
        { display: 'Indonesia', value: 'ID' },
        { display: 'Iran, Islamic Republic Of', value: 'IR' },
        { display: 'Iraq', value: 'IQ' },
        { display: 'Ireland', value: 'IE' },
        { display: 'Isle of Man', value: 'IM' },
        { display: 'Israel', value: 'IL' },
        { display: 'Italy', value: 'IT' },
        { display: 'Jamaica', value: 'JM' },
        { display: 'Japan', value: 'JP' },
        { display: 'Jersey', value: 'JE' },
        { display: 'Jordan', value: 'JO' },
        { display: 'Kazakhstan', value: 'KZ' },
        { display: 'Kenya', value: 'KE' },
        { display: 'Kiribati', value: 'KI' },
        { display: 'Korea, Democratic People\'S Republic of', value: 'KP' },
        { display: 'Korea, Republic of', value: 'KR' },
        { display: 'Kuwait', value: 'KW' },
        { display: 'Kyrgyzstan', value: 'KG' },
        { display: 'Lao People\'S Democratic Republic', value: 'LA' },
        { display: 'Latvia', value: 'LV' },
        { display: 'Lebanon', value: 'LB' },
        { display: 'Lesotho', value: 'LS' },
        { display: 'Liberia', value: 'LR' },
        { display: 'Libyan Arab Jamahiriya', value: 'LY' },
        { display: 'Liechtenstein', value: 'LI' },
        { display: 'Lithuania', value: 'LT' },
        { display: 'Luxembourg', value: 'LU' },
        { display: 'Macao', value: 'MO' },
        { display: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
        { display: 'Madagascar', value: 'MG' },
        { display: 'Malawi', value: 'MW' },
        { display: 'Malaysia', value: 'MY' },
        { display: 'Maldives', value: 'MV' },
        { display: 'Mali', value: 'ML' },
        { display: 'Malta', value: 'MT' },
        { display: 'Marshall Islands', value: 'MH' },
        { display: 'Martinique', value: 'MQ' },
        { display: 'Mauritania', value: 'MR' },
        { display: 'Mauritius', value: 'MU' },
        { display: 'Mayotte', value: 'YT' },
        { display: 'Mexico', value: 'MX' },
        { display: 'Micronesia, Federated States of', value: 'FM' },
        { display: 'Moldova, Republic of', value: 'MD' },
        { display: 'Monaco', value: 'MC' },
        { display: 'Mongolia', value: 'MN' },
        { display: 'Montserrat', value: 'MS' },
        { display: 'Morocco', value: 'MA' },
        { display: 'Mozambique', value: 'MZ' },
        { display: 'Myanmar', value: 'MM' },
        { display: 'Namibia', value: 'NA' },
        { display: 'Nauru', value: 'NR' },
        { display: 'Nepal', value: 'NP' },
        { display: 'Netherlands', value: 'NL' },
        { display: 'Netherlands Antilles', value: 'AN' },
        { display: 'New Caledonia', value: 'NC' },
        { display: 'New Zealand', value: 'NZ' },
        { display: 'Nicaragua', value: 'NI' },
        { display: 'Niger', value: 'NE' },
        { display: 'Nigeria', value: 'NG' },
        { display: 'Niue', value: 'NU' },
        { display: 'Norfolk Island', value: 'NF' },
        { display: 'Northern Mariana Islands', value: 'MP' },
        { display: 'Norway', value: 'NO' },
        { display: 'Oman', value: 'OM' },
        { display: 'Pakistan', value: 'PK' },
        { display: 'Palau', value: 'PW' },
        { display: 'Palestinian Territory, Occupied', value: 'PS' },
        { display: 'Panama', value: 'PA' },
        { display: 'Papua New Guinea', value: 'PG' },
        { display: 'Paraguay', value: 'PY' },
        { display: 'Peru', value: 'PE' },
        { display: 'Philippines', value: 'PH' },
        { display: 'Pitcairn', value: 'PN' },
        { display: 'Poland', value: 'PL' },
        { display: 'Portugal', value: 'PT' },
        { display: 'Puerto Rico', value: 'PR' },
        { display: 'Qatar', value: 'QA' },
        { display: 'Reunion', value: 'RE' },
        { display: 'Romania', value: 'RO' },
        { display: 'Russian Federation', value: 'RU' },
        { display: 'RWANDA', value: 'RW' },
        { display: 'Saint Helena', value: 'SH' },
        { display: 'Saint Kitts and Nevis', value: 'KN' },
        { display: 'Saint Lucia', value: 'LC' },
        { display: 'Saint Pierre and Miquelon', value: 'PM' },
        { display: 'Saint Vincent and the Grenadines', value: 'VC' },
        { display: 'Samoa', value: 'WS' },
        { display: 'San Marino', value: 'SM' },
        { display: 'Sao Tome and Principe', value: 'ST' },
        { display: 'Saudi Arabia', value: 'SA' },
        { display: 'Senegal', value: 'SN' },
        { display: 'Serbia and Montenegro', value: 'CS' },
        { display: 'Seychelles', value: 'SC' },
        { display: 'Sierra Leone', value: 'SL' },
        { display: 'Singapore', value: 'SG' },
        { display: 'Slovakia', value: 'SK' },
        { display: 'Slovenia', value: 'SI' },
        { display: 'Solomon Islands', value: 'SB' },
        { display: 'Somalia', value: 'SO' },
        { display: 'South Africa', value: 'ZA' },
        { display: 'South Georgia and the South Sandwich Islands', value: 'GS' },
        { display: 'Spain', value: 'ES' },
        { display: 'Sri Lanka', value: 'LK' },
        { display: 'Sudan', value: 'SD' },
        { display: 'Suridisplay', value: 'SR' },
        { display: 'Svalbard and Jan Mayen', value: 'SJ' },
        { display: 'Swaziland', value: 'SZ' },
        { display: 'Sweden', value: 'SE' },
        { display: 'Switzerland', value: 'CH' },
        { display: 'Syrian Arab Republic', value: 'SY' },
        { display: 'Taiwan, Province of China', value: 'TW' },
        { display: 'Tajikistan', value: 'TJ' },
        { display: 'Tanzania, United Republic of', value: 'TZ' },
        { display: 'Thailand', value: 'TH' },
        { display: 'Timor-Leste', value: 'TL' },
        { display: 'Togo', value: 'TG' },
        { display: 'Tokelau', value: 'TK' },
        { display: 'Tonga', value: 'TO' },
        { display: 'Trinidad and Tobago', value: 'TT' },
        { display: 'Tunisia', value: 'TN' },
        { display: 'Turkey', value: 'TR' },
        { display: 'Turkmenistan', value: 'TM' },
        { display: 'Turks and Caicos Islands', value: 'TC' },
        { display: 'Tuvalu', value: 'TV' },
        { display: 'Uganda', value: 'UG' },
        { display: 'Ukraine', value: 'UA' },
        { display: 'United Arab Emirates', value: 'AE' },
        { display: 'United Kingdom', value: 'GB' },
        { display: 'United States', value: 'US' },
        { display: 'United States Minor Outlying Islands', value: 'UM' },
        { display: 'Uruguay', value: 'UY' },
        { display: 'Uzbekistan', value: 'UZ' },
        { display: 'Vanuatu', value: 'VU' },
        { display: 'Venezuela', value: 'VE' },
        { display: 'Viet Nam', value: 'VN' },
        { display: 'Virgin Islands, British', value: 'VG' },
        { display: 'Virgin Islands, U.S.', value: 'VI' },
        { display: 'Wallis and Futuna', value: 'WF' },
        { display: 'Western Sahara', value: 'EH' },
        { display: 'Yemen', value: 'YE' },
        { display: 'Zambia', value: 'ZM' },
        { display: 'Zimbabwe', value: 'ZW' }
    ];
    return CountryDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/inmemory-db.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/inmemory-db/inmemory-db.service.ts ***!
  \***********************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./src/app/shared/inmemory-db/products.ts");
/* harmony import */ var _mails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mails */ "./src/app/shared/inmemory-db/mails.ts");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries */ "./src/app/shared/inmemory-db/countries.ts");
/* harmony import */ var _chat_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-db */ "./src/app/shared/inmemory-db/chat-db.ts");
/* harmony import */ var _invoices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoices */ "./src/app/shared/inmemory-db/invoices.ts");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users */ "./src/app/shared/inmemory-db/users.ts");






var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return {
            'products': _products__WEBPACK_IMPORTED_MODULE_0__["ProductDB"].products,
            'invoices': _invoices__WEBPACK_IMPORTED_MODULE_4__["InvoiceDB"].invoices,
            'mails': _mails__WEBPACK_IMPORTED_MODULE_1__["MailDB"].messages,
            'countries': _countries__WEBPACK_IMPORTED_MODULE_2__["CountryDB"].countries,
            'contacts': _chat_db__WEBPACK_IMPORTED_MODULE_3__["ChatDB"].contacts,
            'chat-collections': _chat_db__WEBPACK_IMPORTED_MODULE_3__["ChatDB"].chatCollection,
            'chat-user': _chat_db__WEBPACK_IMPORTED_MODULE_3__["ChatDB"].user,
            'users': _users__WEBPACK_IMPORTED_MODULE_5__["UserDB"].users
        };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/invoices.ts":
/*!************************************************!*\
  !*** ./src/app/shared/inmemory-db/invoices.ts ***!
  \************************************************/
/*! exports provided: InvoiceDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDB", function() { return InvoiceDB; });
var InvoiceDB = /** @class */ (function () {
    function InvoiceDB() {
    }
    InvoiceDB.invoices = [
        {
            id: '5a9ae2106518248b68251fd1',
            orderNumber: '232',
            orderStatus: 'Pending',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'Schoen, Conn and Mills',
                address: 'rodriguez.trent@senger.com \n 61 Johnson St. Shirley, NY 11967. \n \n +202-555-0170',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                    name: 'Item 1',
                    unit: 9,
                    unitPrice: 200
                }, {
                    name: 'Item 2',
                    unit: 15,
                    unitPrice: 300
                }]
        },
        {
            id: '5a9ae2106518248b68251fd2',
            orderNumber: '233',
            orderStatus: 'Processing',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'New Age Inc.',
                address: 'this is a test address \n 7664 Rockcrest Road. Longview, TX 75604. \n \n +1-202-555-0153',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                    name: 'Item 1',
                    unit: 3,
                    unitPrice: 2000
                }, {
                    name: 'Item 2',
                    unit: 2,
                    unitPrice: 4000
                }]
        },
        {
            id: '5a9ae2106518248b68251fd3',
            orderNumber: '234',
            orderStatus: 'Delivered',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'Predovic, Schowalter and Haag',
                address: 'linwood53@price.com \n 7178 Plumb Branch Dr. South Bend, IN 46614 \n \n +999 9999 9999',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                    name: 'Item 1',
                    unit: 5,
                    unitPrice: 1000
                }, {
                    name: 'Item 2',
                    unit: 2,
                    unitPrice: 4000
                }]
        },
        {
            id: '5a9ae2106518248b68251fd4',
            orderNumber: '235',
            orderStatus: 'Delivered',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'Hane PLC',
                address: 'nader.savanna@lindgren.org \n 858 8th St. Nanuet, NY 10954. \n \n +202-555-0131',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                    name: 'Item 1',
                    unit: 3,
                    unitPrice: 4000
                }, {
                    name: 'Item 2',
                    unit: 1,
                    unitPrice: 5000
                }]
        }
    ];
    return InvoiceDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/mails.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/inmemory-db/mails.ts ***!
  \*********************************************/
/*! exports provided: MailDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailDB", function() { return MailDB; });
var MailDB = /** @class */ (function () {
    function MailDB() {
    }
    MailDB.messages = [
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/2.jpg'
            },
            date: new Date('1/25/2018'),
            selected: false,
            subject: 'Welcome to Angular World',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote class=\"blockquote\">\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/3.jpg'
            },
            date: new Date('4/3/2017'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/4.jpg'
            },
            date: new Date('1/20/2017'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote class=\"blockquote\">\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/5.jpg'
            },
            date: new Date('1/8/2017'),
            selected: false,
            subject: 'Welcome to Angular Gull',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/9.jpg'
            },
            date: new Date('10/3/2016'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/10.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/15.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Welcome to Angular Gull',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/12.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/13.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/16.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/17.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/2.jpg'
            },
            date: new Date('10/3/2012'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        }
    ];
    return MailDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/products.ts":
/*!************************************************!*\
  !*** ./src/app/shared/inmemory-db/products.ts ***!
  \************************************************/
/*! exports provided: ProductDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDB", function() { return ProductDB; });
var ProductDB = /** @class */ (function () {
    function ProductDB() {
    }
    ProductDB.products = [
        {
            '_id': '5a9ae2106518248b68251fdf',
            'name': 'Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'Lorem ipsum dolor sit amet, et nec putent quodsi, admodum assentior ad duo. Pri ad sapientem ocurreret incorrupte',
            'category': 'speaker',
            'tags': [
                'sunt',
                'sunt',
                'culpa'
            ],
            'price': {
                'sale': 32,
                'previous': 54
            },
            'ratings': {
                'rating': 3.86,
                'ratingCount': 26
            },
            'features': [
                'aliquip aliquip',
                'nulla laboris',
                'pariatur consequat'
            ],
            'photo': './assets/images/products/speaker-1.jpg',
            'gallery': [
                './assets/images/products/speaker-1.jpg',
                './assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': '20% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210b7b4d3ad2f048bbe',
            'name': 'Portable Speaker with HD Sound',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'cillum eiusmod',
            'category': 'speaker',
            'tags': [
                'Lorem',
                'nisi',
                'ad'
            ],
            'price': {
                'sale': 25,
                'previous': 43
            },
            'ratings': {
                'rating': 3.72,
                'ratingCount': 18
            },
            'features': [
                'magna est',
                'consectetur dolor',
                'est proident'
            ],
            'photo': './assets/images/products/speaker-2.jpg',
            'gallery': [
                './assets/images/products/speaker-1.jpg',
                './assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': 'Sale',
                'color': 'primary'
            }
        },
        {
            '_id': '5a9ae210d9a8d6dda7256417',
            'name': 'Lightweight On-Ear Headphones - Black',
            'subtitle': 'On-ear fit to minimize noise so you can hear every beat',
            'description': 'sit laborum',
            'category': 'headphone',
            'tags': [
                'eu',
                'irure',
                'proident'
            ],
            'price': {
                'sale': 29,
                'previous': 55
            },
            'ratings': {
                'rating': 3.79,
                'ratingCount': 77
            },
            'features': [
                'laboris id',
                'magna eu',
                'sint quis'
            ],
            'photo': './assets/images/products/headphone-2.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '-40%',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210e8329237332e56d7',
            'name': 'Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'eiusmod elit',
            'category': 'watch',
            'tags': [
                'laborum',
                'minim',
                'tempor'
            ],
            'price': {
                'sale': 33,
                'previous': 58
            },
            'ratings': {
                'rating': 4.74,
                'ratingCount': 64
            },
            'features': [
                'cillum ullamco',
                'ad minim',
                'duis exercitation'
            ],
            'photo': './assets/images/products/watch-1.jpg',
            'gallery': [
                './assets/images/products/watch-1.jpg',
                './assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '10% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210cb9937d28c6eca1a',
            'name': 'Automatic-self-wind mens Watch 5102PR-001',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore tempor',
            'category': 'watch',
            'tags': [
                'Lorem',
                'dolor',
                'duis'
            ],
            'price': {
                'sale': 38,
                'previous': 50
            },
            'ratings': {
                'rating': 4.43,
                'ratingCount': 98
            },
            'features': [
                'aliquip consequat',
                'excepteur non',
                'aliquip eu'
            ],
            'photo': './assets/images/products/watch-2.jpg',
            'gallery': [
                './assets/images/products/watch-1.jpg',
                './assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '4% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae2106f155194e5c95d67',
            'name': 'On-Ear Headphones - Black',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'elit Lorem',
            'category': 'headphone',
            'tags': [
                'magna',
                'veniam',
                'sunt'
            ],
            'price': {
                'sale': 38,
                'previous': 54
            },
            'ratings': {
                'rating': 4.84,
                'ratingCount': 52
            },
            'features': [
                'est mollit',
                'adipisicing exercitation',
                'esse incididunt'
            ],
            'photo': './assets/images/products/headphone-3.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '$4 off',
                'color': 'success'
            }
        },
        {
            '_id': '5a9ae2101625a02fee92e27f',
            'name': 'In-Ear Headphone',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'proident non',
            'category': 'headphone',
            'tags': [
                'Lorem',
                'occaecat',
                'laborum'
            ],
            'price': {
                'sale': 31,
                'previous': 58
            },
            'ratings': {
                'rating': 3.18,
                'ratingCount': 90
            },
            'features': [
                'ullamco quis',
                'veniam laboris',
                'nulla sunt'
            ],
            'photo': './assets/images/products/headphone-4.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '$5 off',
                'color': 'primary'
            }
        },
        {
            '_id': '5a9ae2108970b01447ec34aa',
            'name': 'Duis exercitation nostrud anim',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore enim',
            'category': 'phone',
            'tags': [
                'do',
                'aliqua',
                'irure'
            ],
            'price': {
                'sale': 22,
                'previous': 44
            },
            'ratings': {
                'rating': 3.53,
                'ratingCount': 47
            },
            'features': [
                'sunt laboris',
                'incididunt nulla',
                'ullamco qui'
            ],
            'photo': './assets/images/products/iphone-2.jpg',
            'gallery': [
                './assets/images/products/iphone-1.jpg',
                './assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2103c04707145e21300',
            'name': 'Dolor eu nostrud excepteur',
            'description': 'enim fugiat',
            'category': 'phone',
            'tags': [
                'laborum',
                'nulla',
                'sit'
            ],
            'price': {
                'sale': 31,
                'previous': 40
            },
            'ratings': {
                'rating': 3.42,
                'ratingCount': 35
            },
            'features': [
                'exercitation excepteur',
                'eiusmod mollit',
                'irure adipisicing'
            ],
            'photo': './assets/images/products/iphone-1.jpg',
            'gallery': [
                './assets/images/products/iphone-1.jpg',
                './assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae21021b2911c97ad6c5b',
            'name': 'Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'sit commodo',
            'category': 'headphone',
            'tags': [
                'adipisicing',
                'labore',
                'voluptate'
            ],
            'price': {
                'sale': 33,
                'previous': 57
            },
            'ratings': {
                'rating': 3.51,
                'ratingCount': 60
            },
            'features': [
                'culpa id',
                'eu excepteur',
                'incididunt aute'
            ],
            'photo': './assets/images/products/headphone-1.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        }, {
            '_id': '5a9ae2106518248b68251fdf',
            'name': 'Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'Lorem ipsum dolor sit amet, et nec putent quodsi, admodum assentior ad duo. Pri ad sapientem ocurreret incorrupte',
            'category': 'speaker',
            'tags': [
                'sunt',
                'sunt',
                'culpa'
            ],
            'price': {
                'sale': 32,
                'previous': 54
            },
            'ratings': {
                'rating': 3.86,
                'ratingCount': 26
            },
            'features': [
                'aliquip aliquip',
                'nulla laboris',
                'pariatur consequat'
            ],
            'photo': './assets/images/products/speaker-1.jpg',
            'gallery': [
                './assets/images/products/speaker-1.jpg',
                './assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': '20% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210b7b4d3ad2f048dsbbe',
            'name': 'Portable Speaker with HD Sound',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'cillum eiusmod',
            'category': 'speaker',
            'tags': [
                'Lorem',
                'nisi',
                'ad'
            ],
            'price': {
                'sale': 25,
                'previous': 43
            },
            'ratings': {
                'rating': 3.72,
                'ratingCount': 18
            },
            'features': [
                'magna est',
                'consectetur dolor',
                'est proident'
            ],
            'photo': './assets/images/products/speaker-2.jpg',
            'gallery': [
                './assets/images/products/speaker-1.jpg',
                './assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': 'Sale',
                'color': 'primary'
            }
        },
        {
            '_id': '5a9ae2sd10d9a8d6dda7256417',
            'name': 'Lightweight On-Ear Headphones - Black',
            'subtitle': 'On-ear fit to minimize noise so you can hear every beat',
            'description': 'sit laborum',
            'category': 'headphone',
            'tags': [
                'eu',
                'irure',
                'proident'
            ],
            'price': {
                'sale': 29,
                'previous': 55
            },
            'ratings': {
                'rating': 3.79,
                'ratingCount': 77
            },
            'features': [
                'laboris id',
                'magna eu',
                'sint quis'
            ],
            'photo': './assets/images/products/headphone-2.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '-40%',
                'color': 'warning'
            }
        },
        {
            '_id': '5a9ae210e8329fs237332e56d7',
            'name': 'Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'eiusmod elit',
            'category': 'watch',
            'tags': [
                'laborum',
                'minim',
                'tempor'
            ],
            'price': {
                'sale': 33,
                'previous': 58
            },
            'ratings': {
                'rating': 4.74,
                'ratingCount': 64
            },
            'features': [
                'cillum ullamco',
                'ad minim',
                'duis exercitation'
            ],
            'photo': './assets/images/products/watch-1.jpg',
            'gallery': [
                './assets/images/products/watch-1.jpg',
                './assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae210cba9937d28c6eca1a',
            'name': 'Automatic-self-wind mens Watch 5102PR-001',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore tempor',
            'category': 'watch',
            'tags': [
                'Lorem',
                'dolor',
                'duis'
            ],
            'price': {
                'sale': 38,
                'previous': 50
            },
            'ratings': {
                'rating': 4.43,
                'ratingCount': 98
            },
            'features': [
                'aliquip consequat',
                'excepteur non',
                'aliquip eu'
            ],
            'photo': './assets/images/products/watch-2.jpg',
            'gallery': [
                './assets/images/products/watch-1.jpg',
                './assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5ad9ae2106f155194e5c95d67',
            'name': 'On-Ear Headphones - Black',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'elit Lorem',
            'category': 'headphone',
            'tags': [
                'magna',
                'veniam',
                'sunt'
            ],
            'price': {
                'sale': 38,
                'previous': 54
            },
            'ratings': {
                'rating': 4.84,
                'ratingCount': 52
            },
            'features': [
                'est mollit',
                'adipisicing exercitation',
                'esse incididunt'
            ],
            'photo': './assets/images/products/headphone-3.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2101625a02fee92fe27f',
            'name': 'In-Ear Headphone',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'proident non',
            'category': 'headphone',
            'tags': [
                'Lorem',
                'occaecat',
                'laborum'
            ],
            'price': {
                'sale': 31,
                'previous': 58
            },
            'ratings': {
                'rating': 3.18,
                'ratingCount': 90
            },
            'features': [
                'ullamco quis',
                'veniam laboris',
                'nulla sunt'
            ],
            'photo': './assets/images/products/headphone-4.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2108970bs01447ec34aa',
            'name': 'Duis exercitation nostrud anim',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore enim',
            'category': 'phone',
            'tags': [
                'do',
                'aliqua',
                'irure'
            ],
            'price': {
                'sale': 22,
                'previous': 44
            },
            'ratings': {
                'rating': 3.53,
                'ratingCount': 47
            },
            'features': [
                'sunt laboris',
                'incididunt nulla',
                'ullamco qui'
            ],
            'photo': './assets/images/products/iphone-2.jpg',
            'gallery': [
                './assets/images/products/iphone-1.jpg',
                './assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2103c0470f7145e21300',
            'name': 'Dolor eu nostrud excepteur',
            'description': 'enim fugiat',
            'category': 'phone',
            'tags': [
                'laborum',
                'nulla',
                'sit'
            ],
            'price': {
                'sale': 31,
                'previous': 40
            },
            'ratings': {
                'rating': 3.42,
                'ratingCount': 35
            },
            'features': [
                'exercitation excepteur',
                'eiusmod mollit',
                'irure adipisicing'
            ],
            'photo': './assets/images/products/iphone-1.jpg',
            'gallery': [
                './assets/images/products/iphone-1.jpg',
                './assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9aef21021b2911c97ad6c5b',
            'name': 'Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'sit commodo',
            'category': 'headphone',
            'tags': [
                'adipisicing',
                'labore',
                'voluptate'
            ],
            'price': {
                'sale': 33,
                'previous': 57
            },
            'ratings': {
                'rating': 3.51,
                'ratingCount': 60
            },
            'features': [
                'culpa id',
                'eu excepteur',
                'incididunt aute'
            ],
            'photo': './assets/images/products/headphone-1.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        }
    ];
    return ProductDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/users.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/inmemory-db/users.ts ***!
  \*********************************************/
/*! exports provided: UserDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDB", function() { return UserDB; });
var UserDB = /** @class */ (function () {
    function UserDB() {
    }
    UserDB.users = [
        {
            _id: "5a7b73f76bed15c94d1e46d4",
            index: 0,
            guid: "c01da2d1-07f8-4acc-a1e3-72dda7310af8",
            isActive: false,
            balance: 2838.08,
            age: 30,
            name: "Stefanie Marsh",
            gender: "female",
            company: "ACIUM",
            email: "stefaniemarsh@acium.com",
            phone: "+1 (857) 535-2066",
            address: "163 Poplar Avenue, Cliffside, Virginia, 4592",
            bd: "2015-02-08T04:28:44 -06:00",
            avatar: "assets/images/faces/1.jpg"
        },
        {
            _id: "5a7b73f7f79f4250b96a355a",
            index: 1,
            guid: "3f04aa40-62da-466d-ac14-2b8a5da3d1ce",
            isActive: true,
            balance: 3043.81,
            age: 39,
            name: "Elena Bennett",
            gender: "female",
            company: "FIBRODYNE",
            email: "elenabennett@fibrodyne.com",
            phone: "+1 (994) 570-2070",
            address: "526 Grace Court, Cherokee, Oregon, 7017",
            bd: "2017-11-15T09:04:57 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f78b64a02a67204d6e",
            index: 2,
            guid: "e7d9d61e-b657-4fcf-b069-2eb9bfdc44fa",
            isActive: true,
            balance: 1796.92,
            age: 23,
            name: "Joni Cabrera",
            gender: "female",
            company: "POWERNET",
            email: "jonicabrera@powernet.com",
            phone: "+1 (848) 410-2368",
            address: "554 Barlow Drive, Alamo, Michigan, 3686",
            bd: "2017-10-15T12:55:51 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f7572e59b231149b94",
            index: 3,
            guid: "47673d82-ab31-48a1-8a16-2c6701573c67",
            isActive: false,
            balance: 2850.27,
            age: 37,
            name: "Gallagher Shaw",
            gender: "male",
            company: "ZILLAR",
            email: "gallaghershaw@zillar.com",
            phone: "+1 (896) 422-3786",
            address: "111 Argyle Road, Graball, Idaho, 7272",
            bd: "2017-11-19T03:38:30 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f70f9d074552e13090",
            index: 4,
            guid: "bc9c7cd3-04e0-4095-a933-af28efaf3b3e",
            isActive: false,
            balance: 3743.48,
            age: 26,
            name: "Blanchard Knapp",
            gender: "male",
            company: "ACRODANCE",
            email: "blanchardknapp@acrodance.com",
            phone: "+1 (867) 542-2772",
            address: "707 Malta Street, Yukon, Wyoming, 6861",
            bd: "2014-05-28T01:33:58 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f78988bd6e92650473",
            index: 5,
            guid: "08cb947c-e49c-4736-9687-0fca0992ec38",
            isActive: false,
            balance: 3453.79,
            age: 34,
            name: "Parker Rivas",
            gender: "male",
            company: "SLAMBDA",
            email: "parkerrivas@slambda.com",
            phone: "+1 (997) 413-2418",
            address: "543 Roosevelt Place, Tibbie, Minnesota, 6944",
            bd: "2015-01-05T09:55:23 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f72488770f90649570",
            index: 6,
            guid: "771c85d5-7762-4bae-96fd-09892a9c4374",
            isActive: false,
            balance: 3334.73,
            age: 20,
            name: "Alexandria Forbes",
            gender: "female",
            company: "EQUITOX",
            email: "alexandriaforbes@equitox.com",
            phone: "+1 (869) 521-2533",
            address: "663 Minna Street, Omar, Alabama, 5265",
            bd: "2017-03-09T05:48:57 -06:00",
            avatar: "assets/images/faces/2.jpg"
        },
        {
            _id: "5a7b73f7c576e368b321a705",
            index: 7,
            guid: "2455a7ef-a537-46e1-a210-75e5e2187460",
            isActive: false,
            balance: 3488.64,
            age: 37,
            name: "Lessie Wise",
            gender: "female",
            company: "AFFLUEX",
            email: "lessiewise@affluex.com",
            phone: "+1 (820) 404-2967",
            address: "752 Woodhull Street, Utting, Oklahoma, 2739",
            bd: "2014-10-21T03:09:34 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f705f8a9c6e35c8ca2",
            index: 8,
            guid: "a90d65a8-681d-462f-bf08-eceeef366375",
            isActive: true,
            balance: 3786.67,
            age: 36,
            name: "Carrie Gates",
            gender: "female",
            company: "VIRVA",
            email: "carriegates@virva.com",
            phone: "+1 (845) 463-3986",
            address: "561 Boulevard Court, Rote, Louisiana, 8458",
            bd: "2017-03-30T02:06:23 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7a3e2be2dbb7b093e",
            index: 9,
            guid: "fb3d0f97-91ae-4336-b0b4-19f4a00fe567",
            isActive: false,
            balance: 3335.5,
            age: 33,
            name: "Dalton Spears",
            gender: "male",
            company: "MIRACLIS",
            email: "daltonspears@miraclis.com",
            phone: "+1 (919) 541-3528",
            address: "167 Lester Court, Glasgow, Arkansas, 6311",
            bd: "2017-04-01T01:41:12 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f716de69a9217c1273",
            index: 10,
            guid: "129a92fd-848f-48eb-98a1-aebf6e92b079",
            isActive: false,
            balance: 3811.15,
            age: 30,
            name: "Delia Merrill",
            gender: "female",
            company: "COMTEST",
            email: "deliamerrill@comtest.com",
            phone: "+1 (879) 401-2304",
            address: "761 Polhemus Place, Kidder, Puerto Rico, 5901",
            bd: "2014-08-29T08:42:59 -06:00",
            avatar: "assets/images/faces/9.jpg"
        },
        {
            _id: "5a7b73f7ed19007bed2d29fb",
            index: 11,
            guid: "d799b69a-192d-4ee3-9a69-9e8e5afc45b0",
            isActive: false,
            balance: 3935.82,
            age: 28,
            name: "Vance Aguilar",
            gender: "male",
            company: "CYCLONICA",
            email: "vanceaguilar@cyclonica.com",
            phone: "+1 (972) 549-2681",
            address: "653 Billings Place, Gardners, Connecticut, 7805",
            bd: "2015-02-21T03:06:14 -06:00",
            avatar: "assets/images/faces/1.jpg"
        },
        {
            _id: "5a7b73f78d0dc0858a70c44a",
            index: 12,
            guid: "8cbb37bb-7644-4993-b48b-df3a69deb339",
            isActive: true,
            balance: 3868.95,
            age: 28,
            name: "Adams Harper",
            gender: "male",
            company: "NORSUP",
            email: "adamsharper@norsup.com",
            phone: "+1 (824) 494-3395",
            address: "571 Turner Place, Norris, Mississippi, 3829",
            bd: "2014-01-30T02:05:53 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f7e929494a8568a885",
            index: 13,
            guid: "22ec32d7-0ba9-4366-b6d8-ca16389a2cd9",
            isActive: false,
            balance: 3954.41,
            age: 34,
            name: "Bass Sexton",
            gender: "male",
            company: "CIRCUM",
            email: "basssexton@circum.com",
            phone: "+1 (930) 476-3634",
            address: "563 Victor Road, Richmond, Kansas, 7742",
            bd: "2014-05-04T10:16:32 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f767e97ce3136444fd",
            index: 14,
            guid: "031d282f-0be9-49e1-a211-9aa59d449d91",
            isActive: false,
            balance: 3287.33,
            age: 24,
            name: "Howard Velez",
            gender: "male",
            company: "ECOSYS",
            email: "howardvelez@ecosys.com",
            phone: "+1 (920) 556-2885",
            address: "378 Grimes Road, Websterville, Marshall Islands, 3506",
            bd: "2015-12-19T08:17:58 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f7fba076653cc18925",
            index: 15,
            guid: "d76ab6d6-d1db-4286-8516-ce6c9db3972a",
            isActive: false,
            balance: 3279.98,
            age: 21,
            name: "Lola Morton",
            gender: "female",
            company: "PROVIDCO",
            email: "lolamorton@providco.com",
            phone: "+1 (963) 458-2788",
            address: "991 Ashland Place, Richville, New York, 3529",
            bd: "2016-11-29T07:58:24 -06:00",
            avatar: "assets/images/faces/2.jpg"
        },
        {
            _id: "5a7b73f7c6d408bc853be87c",
            index: 16,
            guid: "30c2d1c7-770b-4adb-b6df-cc205d748323",
            isActive: false,
            balance: 3955.55,
            age: 37,
            name: "Bishop Rutledge",
            gender: "male",
            company: "DAYCORE",
            email: "bishoprutledge@daycore.com",
            phone: "+1 (886) 539-3156",
            address: "870 Vanderveer Place, Bridgetown, California, 7593",
            bd: "2014-11-10T04:47:00 -06:00",
            avatar: "assets/images/faces/2.jpg"
        },
        {
            _id: "5a7b73f7abe6c78719d2f494",
            index: 17,
            guid: "2d8e77a1-4a88-4642-b6a8-693de296661c",
            isActive: true,
            balance: 1832.83,
            age: 23,
            name: "Lea Reese",
            gender: "female",
            company: "GLUID",
            email: "leareese@gluid.com",
            phone: "+1 (866) 413-2199",
            address: "811 Dunne Place, Vowinckel, Rhode Island, 8646",
            bd: "2014-03-16T04:30:06 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f72d64af126b8080be",
            index: 18,
            guid: "e1e8ee63-6d08-48fc-a077-2265cee34f23",
            isActive: true,
            balance: 2419.18,
            age: 23,
            name: "Knox Moses",
            gender: "male",
            company: "BRAINCLIP",
            email: "knoxmoses@brainclip.com",
            phone: "+1 (982) 519-2486",
            address: "917 Turnbull Avenue, Shasta, Virgin Islands, 7016",
            bd: "2015-11-09T10:11:15 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f789b4e9086d34b255",
            index: 19,
            guid: "13552b7d-928c-4b92-a2ae-5ccbee807594",
            isActive: false,
            balance: 1220.91,
            age: 22,
            name: "Marsha Jacobs",
            gender: "female",
            company: "COMSTAR",
            email: "marshajacobs@comstar.com",
            phone: "+1 (858) 511-2546",
            address: "580 Hampton Avenue, Ilchester, New Hampshire, 2191",
            bd: "2016-02-11T01:34:23 -06:00",
            avatar: "assets/images/faces/7.jpg"
        },
        {
            _id: "5a7b73f737eea8e94089b7b4",
            index: 20,
            guid: "cf577c87-b40c-4c09-9fac-d04c9a824b86",
            isActive: false,
            balance: 2446.07,
            age: 25,
            name: "Bell Emerson",
            gender: "male",
            company: "MULTIFLEX",
            email: "bellemerson@multiflex.com",
            phone: "+1 (806) 496-2473",
            address: "238 Oxford Walk, Monument, New Mexico, 1345",
            bd: "2016-10-07T01:07:21 -06:00",
            avatar: "assets/images/faces/2.jpg"
        },
        {
            _id: "5a7b73f76bc821dc6ee56ee2",
            index: 21,
            guid: "b6c685c2-a497-4261-9217-622723d5235f",
            isActive: false,
            balance: 3694.63,
            age: 33,
            name: "Cecelia Graham",
            gender: "female",
            company: "ZOXY",
            email: "ceceliagraham@zoxy.com",
            phone: "+1 (933) 429-3129",
            address: "954 Lawton Street, Terlingua, New Jersey, 6723",
            bd: "2017-12-01T04:36:13 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f794c27c4048290cbf",
            index: 22,
            guid: "7e887403-8ff5-41b4-9902-bb63ff714fee",
            isActive: true,
            balance: 2804.02,
            age: 29,
            name: "Anthony Pennington",
            gender: "male",
            company: "NAMEGEN",
            email: "anthonypennington@namegen.com",
            phone: "+1 (860) 458-3988",
            address: "287 Auburn Place, Gardiner, Northern Mariana Islands, 7131",
            bd: "2018-02-04T11:06:51 -06:00",
            avatar: "assets/images/faces/7.jpg"
        },
        {
            _id: "5a7b73f720a5781f7d19597a",
            index: 23,
            guid: "9e108687-e1ca-4385-bdd5-62ab006f8aa3",
            isActive: true,
            balance: 1984.1,
            age: 36,
            name: "Mayo Justice",
            gender: "male",
            company: "SLOFAST",
            email: "mayojustice@slofast.com",
            phone: "+1 (854) 428-2270",
            address: "648 Melba Court, Dodge, Pennsylvania, 7596",
            bd: "2016-12-29T07:28:10 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7f0a4c5e6c9807fb2",
            index: 24,
            guid: "93b0b383-dd69-4453-be26-f13ae361ce67",
            isActive: true,
            balance: 1845.13,
            age: 22,
            name: "Vaughn Salazar",
            gender: "male",
            company: "ZAGGLE",
            email: "vaughnsalazar@zaggle.com",
            phone: "+1 (986) 415-3294",
            address: "382 Dewitt Avenue, Goodville, Palau, 711",
            bd: "2014-10-31T12:32:59 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f7e6c45298c709371c",
            index: 25,
            guid: "5a059bbb-3f6d-47bc-ba2b-c13eeaaa93b4",
            isActive: false,
            balance: 3684.79,
            age: 31,
            name: "Calhoun Bradshaw",
            gender: "male",
            company: "OVERPLEX",
            email: "calhounbradshaw@overplex.com",
            phone: "+1 (964) 594-2363",
            address: "527 Seton Place, Wedgewood, Wisconsin, 8306",
            bd: "2016-05-27T10:46:17 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f79468759d25ecdcf4",
            index: 26,
            guid: "68d7f78e-5001-480b-a67d-72b370a5c2de",
            isActive: false,
            balance: 1831.14,
            age: 29,
            name: "Dianne Bauer",
            gender: "female",
            company: "XUMONK",
            email: "diannebauer@xumonk.com",
            phone: "+1 (866) 510-2479",
            address: "540 Moffat Street, Emison, South Carolina, 7329",
            bd: "2014-09-02T04:57:23 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f7346b1bbab11524fa",
            index: 27,
            guid: "0729eef8-36c5-4aa2-8e31-f5e2ca19b94b",
            isActive: false,
            balance: 1719.77,
            age: 22,
            name: "Hebert Bryan",
            gender: "male",
            company: "COMTRAIL",
            email: "hebertbryan@comtrail.com",
            phone: "+1 (838) 579-3709",
            address: "669 Hausman Street, Gerber, Kentucky, 7779",
            bd: "2017-11-29T12:22:59 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f75116874002de08de",
            index: 28,
            guid: "63014b40-3f1e-40ff-b2f7-f55ef6a5a599",
            isActive: true,
            balance: 1973.27,
            age: 20,
            name: "Cash Bean",
            gender: "male",
            company: "SUPREMIA",
            email: "cashbean@supremia.com",
            phone: "+1 (846) 551-2291",
            address: "152 Garnet Street, Boling, Nevada, 4867",
            bd: "2014-01-06T10:18:37 -06:00",
            avatar: "assets/images/faces/7.jpg"
        },
        {
            _id: "5a7b73f739be4dc1f743993c",
            index: 29,
            guid: "ae498760-b43b-4c9c-8575-820f419984f6",
            isActive: true,
            balance: 2118.14,
            age: 36,
            name: "Candy Hopper",
            gender: "female",
            company: "ACCUFARM",
            email: "candyhopper@accufarm.com",
            phone: "+1 (841) 425-2442",
            address: "695 Nassau Avenue, Nutrioso, Maryland, 2026",
            bd: "2016-01-03T02:15:56 -06:00",
            avatar: "assets/images/faces/9.jpg"
        },
        {
            _id: "5a7b73f70b86f2969d762be2",
            index: 30,
            guid: "f19cb86e-ab4f-4d07-833a-4adb8a19d0af",
            isActive: false,
            balance: 3794.89,
            age: 37,
            name: "Fisher Powell",
            gender: "male",
            company: "ENOMEN",
            email: "fisherpowell@enomen.com",
            phone: "+1 (876) 562-2932",
            address: "616 Tapscott Avenue, Crucible, Nebraska, 4900",
            bd: "2018-01-31T05:15:13 -06:00",
            avatar: "assets/images/faces/1.jpg"
        },
        {
            _id: "5a7b73f7394648a68c2a6ae3",
            index: 31,
            guid: "a88e5389-0b07-4d19-ac6c-718ce9e0de55",
            isActive: false,
            balance: 3343.45,
            age: 38,
            name: "Rosemary Sloan",
            gender: "female",
            company: "PHORMULA",
            email: "rosemarysloan@phormula.com",
            phone: "+1 (924) 517-3289",
            address: "687 Navy Walk, Edmund, Delaware, 1419",
            bd: "2018-01-23T11:32:25 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f77ad97f4e1c2fa65a",
            index: 32,
            guid: "fb915568-2875-49b3-96d7-6b54b2b186a1",
            isActive: true,
            balance: 2680.62,
            age: 30,
            name: "Elba Glover",
            gender: "female",
            company: "APPLICA",
            email: "elbaglover@applica.com",
            phone: "+1 (857) 495-3565",
            address: "279 Bridgewater Street, Edneyville, Utah, 9246",
            bd: "2015-10-03T12:24:56 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f72598106a97fbf7d5",
            index: 33,
            guid: "fac3cd4b-2d42-4b4f-9d6f-0bac689bd47b",
            isActive: false,
            balance: 3286.46,
            age: 37,
            name: "Mildred Short",
            gender: "female",
            company: "NIXELT",
            email: "mildredshort@nixelt.com",
            phone: "+1 (980) 530-3588",
            address: "434 Elm Place, Coloma, West Virginia, 1990",
            bd: "2016-03-22T10:13:26 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f7b88290b05f53faa1",
            index: 34,
            guid: "b1c6a3a3-00bd-4bc6-87df-69eecd909ab5",
            isActive: false,
            balance: 1484.16,
            age: 24,
            name: "Karin Schultz",
            gender: "female",
            company: "PLASMOS",
            email: "karinschultz@plasmos.com",
            phone: "+1 (904) 544-2796",
            address: "380 Rockaway Avenue, Faxon, American Samoa, 5776",
            bd: "2016-03-27T09:30:36 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7d2f7429d0caec5fe",
            index: 35,
            guid: "62c961ac-49b1-4a69-b4bf-13a396ec4fd9",
            isActive: false,
            balance: 3450.17,
            age: 23,
            name: "Addie Rose",
            gender: "female",
            company: "XYQAG",
            email: "addierose@xyqag.com",
            phone: "+1 (838) 549-3147",
            address: "999 Coleridge Street, Golconda, Vermont, 9575",
            bd: "2016-10-01T06:50:42 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f78a4c54ff8334e053",
            index: 36,
            guid: "4f2f7ae5-0bd1-4665-b97f-c556e5162349",
            isActive: false,
            balance: 1797.89,
            age: 23,
            name: "Janie Ellison",
            gender: "female",
            company: "SPLINX",
            email: "janieellison@splinx.com",
            phone: "+1 (947) 460-2254",
            address: "114 Landis Court, Genoa, Indiana, 5198",
            bd: "2017-07-28T12:45:44 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f7c87f7e86fcb00055",
            index: 37,
            guid: "b7236378-8129-44b5-bcc6-0369290ffad6",
            isActive: false,
            balance: 3776.51,
            age: 38,
            name: "Elisabeth Campbell",
            gender: "female",
            company: "GOKO",
            email: "elisabethcampbell@goko.com",
            phone: "+1 (849) 430-3377",
            address: "832 Kermit Place, Lutsen, Georgia, 9145",
            bd: "2015-04-26T06:40:08 -06:00",
            avatar: "assets/images/faces/2.jpg"
        },
        {
            _id: "5a7b73f712f9208f145fa6ea",
            index: 38,
            guid: "5c955e3a-5f3a-4ead-96ee-80a5de6dc479",
            isActive: true,
            balance: 3794.93,
            age: 27,
            name: "Noble Holland",
            gender: "male",
            company: "NUTRALAB",
            email: "nobleholland@nutralab.com",
            phone: "+1 (888) 573-3730",
            address: "408 Roosevelt Court, Hiwasse, North Dakota, 281",
            bd: "2014-03-25T12:24:34 -06:00",
            avatar: "assets/images/faces/7.jpg"
        },
        {
            _id: "5a7b73f7aa1f371de59df90b",
            index: 39,
            guid: "94698a81-61a6-4e23-a952-76a50fba71ef",
            isActive: true,
            balance: 2205.55,
            age: 35,
            name: "Laverne Brock",
            gender: "female",
            company: "ICOLOGY",
            email: "lavernebrock@icology.com",
            phone: "+1 (821) 600-3174",
            address: "391 Conover Street, Cassel, Tennessee, 6566",
            bd: "2016-01-27T09:40:41 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f7c45c697931199945",
            index: 40,
            guid: "a05a215f-be1c-49d1-89ca-c821b118f923",
            isActive: true,
            balance: 2397.12,
            age: 29,
            name: "Irene Frost",
            gender: "female",
            company: "RODEMCO",
            email: "irenefrost@rodemco.com",
            phone: "+1 (918) 539-2612",
            address: "401 Moore Place, Groton, Arizona, 3415",
            bd: "2017-09-14T09:46:55 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7ef55416e92ebc818",
            index: 41,
            guid: "1ae8ceac-e8d0-4417-9f6f-04cd4e4738ad",
            isActive: false,
            balance: 3335.51,
            age: 35,
            name: "Beard Hendricks",
            gender: "male",
            company: "QUONK",
            email: "beardhendricks@quonk.com",
            phone: "+1 (847) 521-3952",
            address: "576 Bayard Street, Chloride, Federated States Of Micronesia, 8070",
            bd: "2016-11-01T12:47:26 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f7cbeecfe6febd672d",
            index: 42,
            guid: "afdf3298-77bd-46b3-ae8d-232f815c5f01",
            isActive: false,
            balance: 2205.01,
            age: 37,
            name: "Nelson Shields",
            gender: "male",
            company: "ARTWORLDS",
            email: "nelsonshields@artworlds.com",
            phone: "+1 (956) 534-3050",
            address: "581 Maple Street, Needmore, Colorado, 2062",
            bd: "2014-07-21T08:22:01 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f71803de25c5f754ad",
            index: 43,
            guid: "5b872cad-4388-496b-8ede-5f86990dec00",
            isActive: true,
            balance: 1001.05,
            age: 21,
            name: "Luella Duffy",
            gender: "female",
            company: "KROG",
            email: "luelladuffy@krog.com",
            phone: "+1 (973) 451-2222",
            address: "349 Bryant Street, Tioga, South Dakota, 6493",
            bd: "2016-04-27T02:46:46 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f77f2a05eacb331c74",
            index: 44,
            guid: "7d6b7650-10d7-435d-87ca-33a1fe12cd57",
            isActive: false,
            balance: 1926.79,
            age: 27,
            name: "Rosa Guthrie",
            gender: "female",
            company: "COMTOURS",
            email: "rosaguthrie@comtours.com",
            phone: "+1 (814) 528-2701",
            address: "719 Kathleen Court, Morriston, Guam, 4011",
            bd: "2015-07-02T08:22:18 -06:00",
            avatar: "assets/images/faces/9.jpg"
        },
        {
            _id: "5a7b73f7727afbb0fc15653b",
            index: 45,
            guid: "ebbc985b-227e-4954-a8a6-588b2a2bff22",
            isActive: false,
            balance: 2464.9,
            age: 29,
            name: "Dillard Carlson",
            gender: "male",
            company: "COMCUR",
            email: "dillardcarlson@comcur.com",
            phone: "+1 (847) 469-3741",
            address: "918 Oceanic Avenue, Cochranville, Missouri, 1018",
            bd: "2016-06-11T11:31:54 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f71dd7612e967e01ae",
            index: 46,
            guid: "63a2ee7f-2141-4ec5-b1e2-fcdcd62f28ed",
            isActive: false,
            balance: 3917.74,
            age: 25,
            name: "Faye Walls",
            gender: "female",
            company: "EMERGENT",
            email: "fayewalls@emergent.com",
            phone: "+1 (964) 527-3791",
            address: "947 Judge Street, Nescatunga, Maine, 4928",
            bd: "2014-06-23T12:46:21 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7b33c73c425db7ee0",
            index: 47,
            guid: "61d40a89-af0c-40ca-8970-c54978134e6b",
            isActive: true,
            balance: 2213.18,
            age: 32,
            name: "Norma Hooper",
            gender: "female",
            company: "PARCOE",
            email: "normahooper@parcoe.com",
            phone: "+1 (827) 503-2742",
            address: "470 Fenimore Street, Hatteras, Texas, 1582",
            bd: "2015-01-15T12:22:00 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f7c30aa4064670cf21",
            index: 48,
            guid: "969d77af-b251-4924-82cf-7c787752161d",
            isActive: false,
            balance: 3673.94,
            age: 23,
            name: "Lee Wiggins",
            gender: "female",
            company: "NITRACYR",
            email: "leewiggins@nitracyr.com",
            phone: "+1 (941) 478-3536",
            address: "958 Flatbush Avenue, Clara, North Carolina, 970",
            bd: "2018-01-09T11:09:34 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7ecd5a4859f2d94dc",
            index: 49,
            guid: "cdf9b8de-a309-4cb7-80bb-f1b830b8b640",
            isActive: true,
            balance: 2166.21,
            age: 27,
            name: "Alvarez Lynch",
            gender: "male",
            company: "KIGGLE",
            email: "alvarezlynch@kiggle.com",
            phone: "+1 (929) 528-3805",
            address: "901 Stratford Road, Derwood, Iowa, 1402",
            bd: "2015-01-08T04:28:57 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f7216c8cabc849eea7",
            index: 50,
            guid: "c4175d6a-1560-468e-b682-701c1549b6b1",
            isActive: false,
            balance: 3479.39,
            age: 39,
            name: "Oneal Rosario",
            gender: "male",
            company: "UBERLUX",
            email: "onealrosario@uberlux.com",
            phone: "+1 (951) 572-3027",
            address: "267 Rockaway Parkway, Chapin, Montana, 7813",
            bd: "2014-02-10T05:08:13 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f78841719bf955b2d9",
            index: 51,
            guid: "966c9ce6-9151-47cb-8c71-98c4cd0d2f40",
            isActive: false,
            balance: 1625.49,
            age: 36,
            name: "Olsen Stevens",
            gender: "male",
            company: "EMPIRICA",
            email: "olsenstevens@empirica.com",
            phone: "+1 (871) 403-3377",
            address: "704 Lamont Court, Saranap, Massachusetts, 3171",
            bd: "2014-09-17T05:13:13 -06:00",
            avatar: "assets/images/faces/8.jpg"
        },
        {
            _id: "5a7b73f7b7b8e578dff0f85c",
            index: 52,
            guid: "8269a34f-3a02-47d6-bcb1-8f076bb478f0",
            isActive: true,
            balance: 1143.73,
            age: 27,
            name: "Marian Henson",
            gender: "female",
            company: "ENDIPINE",
            email: "marianhenson@endipine.com",
            phone: "+1 (995) 406-2592",
            address: "803 Ellery Street, Boykin, Alaska, 8624",
            bd: "2016-08-28T01:22:51 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f737459ec79c91ca75",
            index: 53,
            guid: "badb9342-10fd-4520-ae66-c246e47add8f",
            isActive: false,
            balance: 1458.01,
            age: 23,
            name: "Dudley Dickson",
            gender: "male",
            company: "POLARIA",
            email: "dudleydickson@polaria.com",
            phone: "+1 (860) 428-3250",
            address: "833 Revere Place, Rockbridge, Illinois, 4628",
            bd: "2017-01-19T12:36:59 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f70ddc6fc11ebf043a",
            index: 54,
            guid: "52b1be89-8186-4685-81b7-203c17ed9f89",
            isActive: true,
            balance: 2815.76,
            age: 25,
            name: "Earnestine Oneil",
            gender: "female",
            company: "CYTREK",
            email: "earnestineoneil@cytrek.com",
            phone: "+1 (879) 541-3490",
            address: "442 Emerald Street, Graniteville, Hawaii, 1302",
            bd: "2017-07-07T10:34:33 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f78b816185ccd2b4b3",
            index: 55,
            guid: "e66850ea-546b-4eb5-ae76-d66b0e727f44",
            isActive: true,
            balance: 3645.09,
            age: 21,
            name: "Nicholson Mason",
            gender: "male",
            company: "TELEQUIET",
            email: "nicholsonmason@telequiet.com",
            phone: "+1 (861) 528-3215",
            address: "261 Aitken Place, Cecilia, Ohio, 1381",
            bd: "2016-03-20T08:31:34 -06:00",
            avatar: "assets/images/faces/10.jpg"
        },
        {
            _id: "5a7b73f780f8bf8fbe24d75c",
            index: 56,
            guid: "40b999cd-00bf-46e0-9107-b44906d832e0",
            isActive: false,
            balance: 2477.66,
            age: 36,
            name: "Linda Shaffer",
            gender: "female",
            company: "ZORK",
            email: "lindashaffer@zork.com",
            phone: "+1 (828) 524-3011",
            address: "350 Plymouth Street, Waterford, Washington, 6715",
            bd: "2017-07-09T05:51:11 -06:00",
            avatar: "assets/images/faces/4.jpg"
        },
        {
            _id: "5a7b73f741e22fc19ffa6952",
            index: 57,
            guid: "cc2ac19d-7d67-4f60-973a-369160a9c377",
            isActive: false,
            balance: 2651.39,
            age: 20,
            name: "Montoya Riggs",
            gender: "male",
            company: "MARKETOID",
            email: "montoyariggs@marketoid.com",
            phone: "+1 (809) 562-3786",
            address: "633 Monitor Street, Chicopee, District Of Columbia, 550",
            bd: "2016-02-05T12:36:05 -06:00",
            avatar: "assets/images/faces/9.jpg"
        },
        {
            _id: "5a7b73f7de56ead40c26e69a",
            index: 58,
            guid: "6e0b06b8-1199-498c-8002-41f4972aa2d2",
            isActive: false,
            balance: 3463.92,
            age: 28,
            name: "Walker Duran",
            gender: "male",
            company: "GEOFORM",
            email: "walkerduran@geoform.com",
            phone: "+1 (868) 502-2553",
            address: "550 Kensington Walk, Wyano, Virginia, 7703",
            bd: "2017-08-18T12:39:37 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f70a04fe142269ea8d",
            index: 59,
            guid: "c6733cd5-1e73-4317-b4bc-1a9e597581a4",
            isActive: true,
            balance: 3846.35,
            age: 26,
            name: "Suzanne House",
            gender: "female",
            company: "SYBIXTEX",
            email: "suzannehouse@sybixtex.com",
            phone: "+1 (892) 533-2739",
            address: "367 Harwood Place, Twilight, Oregon, 9799",
            bd: "2016-11-26T11:57:18 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f7339943d94af3b39d",
            index: 60,
            guid: "4ff2c2aa-0573-4be1-a1c8-f684af8a5fbf",
            isActive: false,
            balance: 2717.94,
            age: 26,
            name: "Lewis Oconnor",
            gender: "male",
            company: "EXOZENT",
            email: "lewisoconnor@exozent.com",
            phone: "+1 (954) 582-2660",
            address: "717 Sutter Avenue, Bartley, Michigan, 1142",
            bd: "2017-08-21T08:25:00 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f7d8e266ad1bc5daa8",
            index: 61,
            guid: "94667aad-86fc-4a2c-94fb-11b572307c75",
            isActive: false,
            balance: 2725.58,
            age: 39,
            name: "Shelley Bonner",
            gender: "female",
            company: "INDEXIA",
            email: "shelleybonner@indexia.com",
            phone: "+1 (965) 490-3768",
            address: "896 Clinton Avenue, Canoochee, Idaho, 1154",
            bd: "2016-04-11T06:08:29 -06:00",
            avatar: "assets/images/faces/6.jpg"
        },
        {
            _id: "5a7b73f7e74a5af674e4cbdd",
            index: 62,
            guid: "ec68c47e-7cbd-485e-8d54-fab1bb6ea008",
            isActive: true,
            balance: 1343.87,
            age: 29,
            name: "Mccall Morales",
            gender: "male",
            company: "QUILITY",
            email: "mccallmorales@quility.com",
            phone: "+1 (939) 455-2610",
            address: "325 Crystal Street, Harleigh, Wyoming, 5658",
            bd: "2014-11-20T07:30:04 -06:00",
            avatar: "assets/images/faces/3.jpg"
        },
        {
            _id: "5a7b73f7efb231e53a0c94cd",
            index: 63,
            guid: "6a8b3f55-406c-4ae8-be59-94a0f8fbd180",
            isActive: false,
            balance: 1092.69,
            age: 37,
            name: "Vera Mcpherson",
            gender: "female",
            company: "CIPROMOX",
            email: "veramcpherson@cipromox.com",
            phone: "+1 (890) 500-3729",
            address: "771 Beard Street, Rivera, Minnesota, 4726",
            bd: "2017-07-13T02:47:50 -06:00",
            avatar: "assets/images/faces/2.jpg"
        },
        {
            _id: "5a7b73f7e345c5dfc5d636e4",
            index: 64,
            guid: "46879caf-76e6-46e0-9b8b-bc17667a81ea",
            isActive: true,
            balance: 2077.12,
            age: 36,
            name: "Gregory Roth",
            gender: "male",
            company: "EARWAX",
            email: "gregoryroth@earwax.com",
            phone: "+1 (806) 595-2477",
            address: "349 Dunham Place, Sardis, Alabama, 3320",
            bd: "2017-11-08T02:26:23 -06:00",
            avatar: "assets/images/faces/5.jpg"
        },
        {
            _id: "5a7b73f77f5f9d730fab11e0",
            index: 65,
            guid: "9cfb8f58-7acf-4a39-bf2b-c90269c33db0",
            isActive: true,
            balance: 3503.58,
            age: 31,
            name: "Russell Carver",
            gender: "male",
            company: "PREMIANT",
            email: "russellcarver@premiant.com",
            phone: "+1 (849) 521-2335",
            address: "851 Noble Street, Holcombe, Oklahoma, 311",
            bd: "2016-07-10T10:08:35 -06:00",
            avatar: "assets/images/faces/1.jpg"
        },
        {
            _id: "5a7b73f7cab10f461153989c",
            index: 66,
            guid: "2562a818-4451-4193-94cd-650d131ff097",
            isActive: false,
            balance: 1652.9,
            age: 21,
            name: "Darlene Hurley",
            gender: "female",
            company: "STELAECOR",
            email: "darlenehurley@stelaecor.com",
            phone: "+1 (868) 492-2270",
            address: "627 Wilson Street, Loveland, Louisiana, 765",
            bd: "2017-05-20T12:39:31 -06:00",
            avatar: "assets/images/faces/9.jpg"
        },
        {
            _id: "5a7b73f7ecccc997e4160a59",
            index: 67,
            guid: "0050170f-0283-481d-9633-dc9d134be121",
            isActive: true,
            balance: 3692.88,
            age: 21,
            name: "Lela Bailey",
            gender: "female",
            company: "AQUOAVO",
            email: "lelabailey@aquoavo.com",
            phone: "+1 (917) 449-2329",
            address: "121 Adams Street, Malo, Arkansas, 7435",
            bd: "2016-11-06T04:55:46 -06:00",
            avatar: "assets/images/faces/5.jpg"
        }
    ];
    return UserDB;
}());



/***/ }),

/***/ "./src/app/shared/pipes/excerpt.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/excerpt.pipe.ts ***!
  \**********************************************/
/*! exports provided: ExcerptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcerptPipe", function() { return ExcerptPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ExcerptPipe = /** @class */ (function () {
    function ExcerptPipe() {
    }
    ExcerptPipe.prototype.transform = function (text, limit) {
        if (limit === void 0) { limit = 5; }
        if (text.length <= limit) {
            return text;
        }
        return text.substring(0, limit) + '...';
    };
    ExcerptPipe.ɵfac = function ExcerptPipe_Factory(t) { return new (t || ExcerptPipe)(); };
    ExcerptPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "excerpt", type: ExcerptPipe, pure: true });
    return ExcerptPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcerptPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'excerpt' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/get-value-by-key.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/get-value-by-key.pipe.ts ***!
  \*******************************************************/
/*! exports provided: GetValueByKeyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetValueByKeyPipe", function() { return GetValueByKeyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var GetValueByKeyPipe = /** @class */ (function () {
    function GetValueByKeyPipe() {
    }
    GetValueByKeyPipe.prototype.transform = function (value, id, property) {
        var filteredObj = value.find(function (item) {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (filteredObj) {
            return filteredObj[property];
        }
    };
    GetValueByKeyPipe.ɵfac = function GetValueByKeyPipe_Factory(t) { return new (t || GetValueByKeyPipe)(); };
    GetValueByKeyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "getValueByKey", type: GetValueByKeyPipe, pure: false });
    return GetValueByKeyPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetValueByKeyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'getValueByKey',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/relative-time.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/relative-time.pipe.ts ***!
  \****************************************************/
/*! exports provided: RelativeTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeTimePipe", function() { return RelativeTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var RelativeTimePipe = /** @class */ (function () {
    function RelativeTimePipe() {
    }
    RelativeTimePipe.prototype.transform = function (value) {
        if (!(value instanceof Date)) {
            value = new Date(value);
        }
        var seconds = Math.floor(((new Date()).getTime() - value.getTime()) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + ' years ago';
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + ' months ago';
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + ' days ago';
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + ' hours ago';
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + ' minutes ago';
        }
        return Math.floor(seconds) + ' seconds ago';
    };
    RelativeTimePipe.ɵfac = function RelativeTimePipe_Factory(t) { return new (t || RelativeTimePipe)(); };
    RelativeTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "relativeTime", type: RelativeTimePipe, pure: true });
    return RelativeTimePipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelativeTimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'relativeTime' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/shared-pipes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return SharedPipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _excerpt_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./excerpt.pipe */ "./src/app/shared/pipes/excerpt.pipe.ts");
/* harmony import */ var _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-value-by-key.pipe */ "./src/app/shared/pipes/get-value-by-key.pipe.ts");
/* harmony import */ var _relative_time_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relative-time.pipe */ "./src/app/shared/pipes/relative-time.pipe.ts");






var pipes = [
    _excerpt_pipe__WEBPACK_IMPORTED_MODULE_2__["ExcerptPipe"],
    _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_3__["GetValueByKeyPipe"],
    _relative_time_pipe__WEBPACK_IMPORTED_MODULE_4__["RelativeTimePipe"]
];
var SharedPipesModule = /** @class */ (function () {
    function SharedPipesModule() {
    }
    SharedPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedPipesModule });
    SharedPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedPipesModule_Factory(t) { return new (t || SharedPipesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return SharedPipesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedPipesModule, { declarations: [_excerpt_pipe__WEBPACK_IMPORTED_MODULE_2__["ExcerptPipe"],
        _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_3__["GetValueByKeyPipe"],
        _relative_time_pipe__WEBPACK_IMPORTED_MODULE_4__["RelativeTimePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_excerpt_pipe__WEBPACK_IMPORTED_MODULE_2__["ExcerptPipe"],
        _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_3__["GetValueByKeyPipe"],
        _relative_time_pipe__WEBPACK_IMPORTED_MODULE_4__["RelativeTimePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: pipes,
                exports: pipes
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/auth.gaurd.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.gaurd.ts ***!
  \***********************************************/
/*! exports provided: AuthGaurd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurd", function() { return AuthGaurd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");






var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGaurd.prototype.canActivate = function () {
        if (this.auth.authenticated) {
            return true;
        }
        else {
            this.router.navigateByUrl('/sessions/signin');
        }
    };
    AuthGaurd.ɵfac = function AuthGaurd_Factory(t) { return new (t || AuthGaurd)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
    AuthGaurd.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGaurd, factory: AuthGaurd.ɵfac, providedIn: 'root' });
    return AuthGaurd;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGaurd, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-store.service */ "./src/app/shared/services/local-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var AuthService = /** @class */ (function () {
    function AuthService(store, router) {
        this.store = store;
        this.router = router;
        //Only for demo purpose
        this.authenticated = true;
        this.checkAuth();
    }
    AuthService.prototype.checkAuth = function () {
        // this.authenticated = this.store.getItem("demo_login_status");
    };
    AuthService.prototype.getuser = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
    };
    AuthService.prototype.signin = function (credentials) {
        this.authenticated = true;
        this.store.setItem("demo_login_status", true);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1500));
    };
    AuthService.prototype.signout = function () {
        this.authenticated = false;
        this.store.setItem("demo_login_status", false);
        this.router.navigateByUrl("/sessions/signin");
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
    return AuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/customizer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/customizer.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomizerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerService", function() { return CustomizerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CustomizerService = /** @class */ (function () {
    function CustomizerService(router) {
        var _this = this;
        this.router = router;
        this.layouts = [
            {
                title: "Sidebar Compact",
                name: "applayout-sidebar-compact",
                img: "./assets/images/screenshots/02_preview.png",
                active: false
            },
            {
                title: "Sidebar Large",
                name: "applayout-sidebar-large",
                img: "./assets/images/screenshots/04_preview.png",
                active: true
            }
        ];
        this.colors = [
            {
                sidebarClass: "sidebar-gradient-purple-indigo",
                class: "gradient-purple-indigo",
                active: false
            },
            {
                sidebarClass: "sidebar-gradient-black-blue",
                class: "gradient-black-blue",
                active: false
            },
            {
                sidebarClass: "sidebar-gradient-black-gray",
                class: "gradient-black-gray",
                active: false
            },
            {
                sidebarClass: "sidebar-gradient-steel-gray",
                class: "gradient-steel-gray",
                active: false
            },
            {
                sidebarClass: "sidebar-dark-purple",
                class: "dark-purple",
                active: true
            },
            {
                sidebarClass: "sidebar-slate-gray",
                class: "slate-gray",
                active: false
            },
            {
                sidebarClass: "sidebar-midnight-blue",
                class: "midnight-blue",
                active: false
            },
            {
                sidebarClass: "sidebar-blue",
                class: "blue",
                active: false
            },
            {
                sidebarClass: "sidebar-indigo",
                class: "indigo",
                active: false
            },
            {
                sidebarClass: "sidebar-pink",
                class: "pink",
                active: false
            },
            {
                sidebarClass: "sidebar-red",
                class: "red",
                active: false
            },
            {
                sidebarClass: "sidebar-purple",
                class: "purple",
                active: false
            }
        ];
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]; }))
            .subscribe(function (event) {
            if (event.url.indexOf("applayout-") === -1) {
                if (event.url.indexOf("sessions") !== -1) {
                    return;
                }
                var url = "/" + _this.selectedLayout.name + event.url;
                _this.router.navigateByUrl(url);
            }
        });
    }
    CustomizerService.prototype.modifySidebarUrls = function (nav, selectedLayoutName) {
        var _this = this;
        nav.forEach(function (item) {
            if (item.state && item.state.indexOf("sessions") !== -1) {
                return;
            }
            if (item.type === "link" && item.state.indexOf("applayout-") === -1) {
                item.state = "/" + selectedLayoutName + item.state;
            }
            else if (item.type === "link") {
                item.state = _this.replaceUrlString(selectedLayoutName, item.state);
            }
            if (item.type === "dropDown" && item.sub) {
                _this.modifySidebarUrls(item.sub, selectedLayoutName);
            }
        });
    };
    CustomizerService.prototype.replaceUrlString = function (inputString, fullString) {
        var currentRoute = fullString;
        var routeArray = currentRoute.split("/");
        routeArray = routeArray.map(function (r) {
            if (r.indexOf("applayout-") !== -1) {
                return inputString;
            }
            return r;
        });
        return routeArray.join("/");
    };
    CustomizerService.prototype.removeClass = function (el, className) {
        if (!el || el.length === 0)
            return;
        if (!el.length) {
            el.classList.remove(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.remove(className);
            }
        }
    };
    CustomizerService.prototype.addClass = function (el, className) {
        if (!el)
            return;
        if (!el.length) {
            el.classList.add(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.add(className);
            }
        }
    };
    CustomizerService.prototype.findClosest = function (el, className) {
        if (!el)
            return;
        while (el) {
            var parent = el.parentElement;
            if (parent && this.hasClass(parent, className)) {
                return parent;
            }
            el = parent;
        }
    };
    CustomizerService.prototype.hasClass = function (el, className) {
        if (!el)
            return;
        return ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + className + " ") > -1);
    };
    CustomizerService.prototype.toggleClass = function (el, className) {
        if (!el)
            return;
        if (this.hasClass(el, className)) {
            this.removeClass(el, className);
        }
        else {
            this.addClass(el, className);
        }
    };
    CustomizerService.prototype.toggleDir = function (isRTL) {
        var html = document.getElementsByTagName('html')[0];
        if (!html) {
            return;
        }
        if (isRTL) {
            html.setAttribute('dir', 'rtl');
        }
        else {
            html.setAttribute('dir', 'ltr');
        }
    };
    CustomizerService.ɵfac = function CustomizerService_Factory(t) { return new (t || CustomizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    CustomizerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomizerService, factory: CustomizerService.ɵfac, providedIn: "root" });
    return CustomizerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/data-layer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/data-layer.service.ts ***!
  \*******************************************************/
/*! exports provided: DataLayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerService", function() { return DataLayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/app/shared/utils.ts");





var DataLayerService = /** @class */ (function () {
    function DataLayerService(http) {
        this.http = http;
    }
    DataLayerService.prototype.getInvoices = function () {
        return this.http.get('/api/invoices');
    };
    DataLayerService.prototype.getInvoice = function (id) {
        return this.http.get('/api/invoices/' + id);
    };
    DataLayerService.prototype.saveInvoice = function (invoice) {
        if (invoice.id) {
            return this.http.put('/api/invoices/' + invoice.id, invoice);
        }
        else {
            invoice.id = _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].genId();
            return this.http.post('/api/invoices/', invoice);
        }
    };
    DataLayerService.prototype.deleteInvoice = function (id) {
        return this.http.delete('/api/invoices/' + id);
    };
    DataLayerService.prototype.getMails = function () {
        return this.http.get('/api/mails');
    };
    DataLayerService.prototype.getCountries = function () {
        return this.http.get('/api/countries');
    };
    DataLayerService.prototype.getProducts = function () {
        return this.http.get('api/products');
    };
    DataLayerService.ɵfac = function DataLayerService_Factory(t) { return new (t || DataLayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    DataLayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataLayerService, factory: DataLayerService.ɵfac, providedIn: 'root' });
    return DataLayerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataLayerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/loading.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/loading.service.ts ***!
  \****************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loadingSbj = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isLoading);
        this.loading$ = this.loadingSbj.asObservable();
    }
    LoadingService.prototype.start = function () {
        this.isLoading = true;
        this.loadingSbj.next(this.isLoading);
    };
    LoadingService.prototype.end = function () {
        this.isLoading = false;
        this.loadingSbj.next(this.isLoading);
    };
    LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
    LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
    return LoadingService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/local-store.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/local-store.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStoreService", function() { return LocalStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var LocalStoreService = /** @class */ (function () {
    function LocalStoreService() {
        this.ls = window.localStorage;
    }
    LocalStoreService.prototype.setItem = function (key, value) {
        value = JSON.stringify(value);
        this.ls.setItem(key, value);
        return true;
    };
    LocalStoreService.prototype.getItem = function (key) {
        var value = this.ls.getItem(key);
        try {
            return JSON.parse(value);
        }
        catch (e) {
            // console.log(e)
            return null;
        }
    };
    LocalStoreService.prototype.clear = function () {
        this.ls.clear();
    };
    LocalStoreService.ɵfac = function LocalStoreService_Factory(t) { return new (t || LocalStoreService)(); };
    LocalStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStoreService, factory: LocalStoreService.ɵfac, providedIn: 'root' });
    return LocalStoreService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/navigation.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.sidebarState = {
            sidenavOpen: true,
            childnavOpen: false
        };
        this.defaultMenu = [
            {
                name: 'Mapa',
                description: 'AgriApp',
                type: 'link',
                icon: 'i-Map2',
                state: '/dashboard'
            },
            {
                name: 'Calendario',
                description: 'Programación de eventos',
                type: 'link',
                icon: 'i-Calendar',
                state: '/calendar'
            }
        ];
        // sets iconMenu as default;
        this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultMenu);
        // navigation component has subscribed to this Observable
        this.menuItems$ = this.menuItems.asObservable();
    }
    NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(); };
    NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });
    return NavigationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
    SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
    return SearchService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/sidebar-helper.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/sidebar-helper.service.ts ***!
  \***********************************************************/
/*! exports provided: SidebarHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarHelperService", function() { return SidebarHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SidebarHelperService = /** @class */ (function () {
    function SidebarHelperService() {
        this.sidenavInstances = [];
    }
    /**
     * Set sidenav
     *
     * @param id
     * @param instance
     */
    SidebarHelperService.prototype.setSidenav = function (id, instance) {
        this.sidenavInstances[id] = instance;
    };
    /**
     * Get sidenav
     *
     * @param id
     * @returns {any}
     */
    SidebarHelperService.prototype.getSidenav = function (id) {
        console.log(this.sidenavInstances);
        return this.sidenavInstances[id];
    };
    SidebarHelperService.ɵfac = function SidebarHelperService_Factory(t) { return new (t || SidebarHelperService)(); };
    SidebarHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarHelperService, factory: SidebarHelperService.ɵfac, providedIn: 'root' });
    return SidebarHelperService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.module */ "./src/app/shared/components/search/search.module.ts");
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");














var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"]
            ]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
        _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                    _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
                    _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                    _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.isMobile = function () {
        return window && window.matchMedia('(max-width: 767px)').matches;
    };
    Utils.ngbDateToDate = function (ngbDate) {
        if (!ngbDate) {
            return null;
        }
        return new Date(ngbDate.month + "/" + ngbDate.day + "/" + ngbDate.year);
    };
    Utils.dateToNgbDate = function (date) {
        if (!date) {
            return null;
        }
        date = new Date(date);
        return { month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear() };
    };
    Utils.scrollToTop = function (selector) {
        if (document) {
            var element = document.querySelector(selector);
            element.scrollTop = 0;
        }
    };
    Utils.genId = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    return Utils;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: UserName, StreetStyleId, SatelliteStyleId, Token, environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserName", function() { return UserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetStyleId", function() { return StreetStyleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SatelliteStyleId", function() { return SatelliteStyleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var UserName = 'it270';
var StreetStyleId = 'ck7et55qq0fyh1illwk8y5wfc';
var SatelliteStyleId = 'ck7ets7922nnw1jmo4ong7t0u';
var Token = 'pk.eyJ1IjoiaXQyNzAiLCJhIjoiY2prMWw5em5zMDE0ZTNrcW9rcThvbHJhOSJ9._5hJJjMIQfwy1OXuBZSWlA';
var environment = {
    production: false,
    SatelliteStyleId: 'ck7ets7922nnw1jmo4ong7t0u',
    Token: 'pk.eyJ1IjoiaXQyNzAiLCJhIjoiY2prMWw5em5zMDE0ZTNrcW9rcThvbHJhOSJ9._5hJJjMIQfwy1OXuBZSWlA',
    StreetLayer: "https://api.mapbox.com/styles/v1/" + UserName + "/" + StreetStyleId + "/tiles/256/{z}/{x}/{y}?" +
        ("access_token=" + Token),
    SatelliteLayer: "https://api.mapbox.com/styles/v1/" + UserName + "/" + SatelliteStyleId + "/tiles/256/{z}/{x}/{y}?" +
        ("access_token=" + Token),
    LayerMaxZoomSize: 18,
    LayerId: {
        MapboxStreets: 'mapbox.streets',
        MapboxSatellite: 'mapbox.satellite',
    },
    DefaultCenteringPosition: [4.6482837, -74.2478938, 11],
    DefaultZoomSize: 10,
    Agromonitoring: {
        polygon: 'https://api.agromonitoring.com/agro/1.0/polygons?appid=9d38fec44f3047ceef30734d88959c50',
        ndvi: 'https://api.agromonitoring.com/agro/1.0/image/search?start=1546300800&end=1577836800&appid=9d38fec44f3047ceef30734d88959c50&polyid='
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });
/**
 * Only for the demo purpose
 */
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production && document) {
    var script = document.createElement('script');
    script.innerHTML = "\n    !function(f,b,e,v,n,t,s)\n    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n    n.queue=[];t=b.createElement(e);t.async=!0;\n    t.src=v;s=b.getElementsByTagName(e)[0];\n    s.parentNode.insertBefore(t,s)}(window, document,'script',\n    'https://connect.facebook.net/en_US/fbevents.js');\n    fbq('init', '2268386293237836');\n    fbq('track', 'PageView');";
    document.head.appendChild(script);
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! Y:\PROYECTOS\IT270\STANDARD\agriapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map