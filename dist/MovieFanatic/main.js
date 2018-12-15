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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_movie_view_movie_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/movie-view/movie-view.component */ "./src/app/components/movie-view/movie-view.component.ts");
/* harmony import */ var _profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-view/profile-view.component */ "./src/app/profile-view/profile-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'movie/424694', pathMatch: 'full' },
    { path: 'movie/:id', component: src_app_components_movie_view_movie_view_component__WEBPACK_IMPORTED_MODULE_2__["MovieViewComponent"] },
    { path: 'profile-view', component: _profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_3__["ProfileViewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MovieFanatic';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_movie_view_movie_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/movie-view/movie-view.component */ "./src/app/components/movie-view/movie-view.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _models_movieAPI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/movieAPI */ "./src/app/models/movieAPI.ts");
/* harmony import */ var _profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-view/profile-view.component */ "./src/app/profile-view/profile-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { Tabulator } from 'tabulator-tables/dist/js/tabulator.min.js';






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_movie_view_movie_view_component__WEBPACK_IMPORTED_MODULE_6__["MovieViewComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_9__["ProfileViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                //  Tabulator
            ],
            providers: [
                _models_movieAPI__WEBPACK_IMPORTED_MODULE_8__["MovieAPI"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    padding: 20px;\r\n    background-color: rgb(121, 18, 35);\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjEsIDE4LCAzNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\">\r\n  <a class=\"navbar-brand\">Movie Fanatic</a>\r\n  <form class=\"form-inline\">\r\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n    <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\r\n  </form>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/movie-view/movie-view.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/movie-view/movie-view.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotronX {\r\n    background: rgb(121, 18, 35) url(\"https://image.tmdb.org/t/p/w500/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg\") no-repeat center;\r\n    background: url(\"https://image.tmdb.org/t/p/w500/pbXgLEYh8rlG2Km5IGZPnhcnuSz.jpg\");\r\n    background-size: 100%;\r\n}\r\n\r\n.jumbotron {\r\n    background-size: 100%;\r\n    background-repeat: no-repeat;\r\n    background-origin: center;\r\n}\r\n\r\nimg.poster {\r\n    height: 400px;\r\n    border-radius: 15px;\r\n    border: 4px solid #ffc34d;\r\n    border-style: ridge;\r\n\t\r\n}\r\n\r\n.round-border {\r\n\tborder-radius: 15px;\r\n\tborder: 4px solid #ffc34d;\r\n\tpadding: 15px 15px 15px 15px;\r\n\tborder-style: ridge;\r\n    background-color: rgb(0, 0, 0, 0.9);\r\n}\r\n\r\n.round-border-reviews {\r\n    border-radius: 15px;\r\n\tborder: 4px solid #ffc34d;\r\n\tpadding: 15px 15px 15px 15px;\r\n\tborder-style: ridge;\r\n    background-color:  rgb(226, 225, 225,0.9);\r\n}\r\n\r\nh1 {\r\n    font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n\r\nh5, p {\r\n    font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\r\n    color: rgb(110, 110, 110);\r\n}\r\n\r\n.release-date {\r\n    color: white;\r\n}\r\n\r\n.line-break {\r\n    border-top-color: rgb(52, 52, 52);\r\n    border-bottom-color: rgb(52, 52, 52);\r\n    margin: 1em 0;\r\n}\r\n\r\n.review-list {\r\n    padding: 50px 50px 50px 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS12aWV3L21vdmllLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFIQUFxSDtJQUNySCxtRkFBbUY7SUFDbkYsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixvQkFBb0I7O0NBRXZCOztBQUNEO0NBQ0Msb0JBQW9CO0NBQ3BCLDBCQUEwQjtDQUMxQiw2QkFBNkI7Q0FDN0Isb0JBQW9CO0lBQ2pCLG9DQUFvQztDQUN2Qzs7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QiwwQkFBMEI7Q0FDMUIsNkJBQTZCO0NBQzdCLG9CQUFvQjtJQUNqQiwwQ0FBMEM7Q0FDN0M7O0FBRUQ7SUFDSSx1R0FBdUc7SUFDdkcsa0JBQWtCO0lBQ2xCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSx1R0FBdUc7SUFDdkcsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsY0FBYztDQUNqQjs7QUFFRDtJQUNJLDZCQUE2QjtDQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtdmlldy9tb3ZpZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uWCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTIxLCAxOCwgMzUpIHVybChcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvODdoVERpYXkyTjJxV3lYNERzN3liWGk5aDhJLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC9wYlhnTEVZaDhybEcyS201SUdaUG5oY251U3ouanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcucG9zdGVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmYzM0ZDtcclxuICAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XHJcblx0XHJcbn1cclxuLnJvdW5kLWJvcmRlciB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRib3JkZXI6IDRweCBzb2xpZCAjZmZjMzRkO1xyXG5cdHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDE1cHg7XHJcblx0Ym9yZGVyLXN0eWxlOiByaWRnZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjkpO1xyXG59XHJcbi5yb3VuZC1ib3JkZXItcmV2aWV3cyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdGJvcmRlcjogNHB4IHNvbGlkICNmZmMzNGQ7XHJcblx0cGFkZGluZzogMTVweCAxNXB4IDE1cHggMTVweDtcclxuXHRib3JkZXItc3R5bGU6IHJpZGdlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigyMjYsIDIyNSwgMjI1LDAuOSk7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIFNhbnNcIiwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmg1LCBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIFNhbnNcIiwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcclxufVxyXG5cclxuLnJlbGVhc2UtZGF0ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5lLWJyZWFrIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHJnYig1MiwgNTIsIDUyKTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYig1MiwgNTIsIDUyKTtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbn1cclxuXHJcbi5yZXZpZXctbGlzdCB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHggNTBweCA1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/movie-view/movie-view.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/movie-view/movie-view.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\" [ngStyle]=\"this.movieService.getBackground('/pbXgLEYh8rlG2Km5IGZPnhcnuSz.jpg')\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-md-center\">\r\n      <div class=\"col-4\">\r\n          <img class=\"poster\" src={{this.movie.poster_path}}>\r\n      </div>\r\n      <div class=\"col-8 round-border\">\r\n        <h1>{{this.movie.title}}</h1>>\r\n        <h5 class=\"release-date\">{{this.movie.release_date}}</h5>\r\n        <h5>2 hr 15 min</h5>\r\n        <hr class=\"line-break\">\r\n        <p>{{this.movie.overview}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"review-list\">\r\n    <table id=\"example-table\">\r\n        <thead>\r\n            <tr>\r\n                <th width=\"200\">Name</th>\r\n                <th tabulator-align=\"center\">Age</th>\r\n                <th>Gender</th>\r\n                <th>Height</th>\r\n                <th width=\"150\">Favourite Color</th>\r\n                <th>Date of Birth</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>Billy Bob</td>\r\n                <td>12</td>\r\n                <td>male</td>\r\n                <td>1</td>\r\n                <td>red</td>\r\n                <td>22/04/1994</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Mary May</td>\r\n                <td>1</td>\r\n                <td>female</td>\r\n                <td>2</td>\r\n                <td>blue</td>\r\n                <td>14/05/1982</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Mary May</td>\r\n                <td>1</td>\r\n                <td>female</td>\r\n                <td>2</td>\r\n                <td>blue</td>\r\n                <td>14/05/1982</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Mary May</td>\r\n                <td>1</td>\r\n                <td>female</td>\r\n                <td>2</td>\r\n                <td>blue</td>\r\n                <td>14/05/1982</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Mary May</td>\r\n                <td>1</td>\r\n                <td>female</td>\r\n                <td>2</td>\r\n                <td>blue</td>\r\n                <td>14/05/1982</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Mary May</td>\r\n                <td>1</td>\r\n                <td>female</td>\r\n                <td>2</td>\r\n                <td>blue</td>\r\n                <td>14/05/1982</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Mary May</td>\r\n                <td>1</td>\r\n                <td>female</td>\r\n                <td>2</td>\r\n                <td>blue</td>\r\n                <td>14/05/1982</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Mary May</td>\r\n                <td>1</td>\r\n                <td>female</td>\r\n                <td>2</td>\r\n                <td>blue</td>\r\n                <td>14/05/1982</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Mary May</td>\r\n                <td>1</td>\r\n                <td>female</td>\r\n                <td>2</td>\r\n                <td>blue</td>\r\n                <td>14/05/1982</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Mary May</td>\r\n                <td>1</td>\r\n                <td>female</td>\r\n                <td>2</td>\r\n                <td>blue</td>\r\n                <td>14/05/1982</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/movie-view/movie-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-view/movie-view.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieViewComponent", function() { return MovieViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_movieAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/movieAPI */ "./src/app/models/movieAPI.ts");
/* harmony import */ var src_app_services_movie_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movie-api.service */ "./src/app/services/movie-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieViewComponent = /** @class */ (function () {
    function MovieViewComponent(route, movieService, movie) {
        this.route = route;
        this.movieService = movieService;
        this.movie = movie;
    }
    MovieViewComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.movieService.setMovieID(this.id);
        // Bohemian Rhapsody 424694
        this.movie = this.movieService.pull(this.id);
        //    this.movie.id = this.route.snapshot.paramMap.get('id');
        //    this.movie.name = "Bohemian Rhapsody";
        //this.tabulator = new Tabulator("#example-table", {});
    };
    MovieViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-view',
            template: __webpack_require__(/*! ./movie-view.component.html */ "./src/app/components/movie-view/movie-view.component.html"),
            styles: [__webpack_require__(/*! ./movie-view.component.css */ "./src/app/components/movie-view/movie-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_movie_api_service__WEBPACK_IMPORTED_MODULE_3__["MovieAPIService"],
            src_app_models_movieAPI__WEBPACK_IMPORTED_MODULE_2__["MovieAPI"]])
    ], MovieViewComponent);
    return MovieViewComponent;
}());



/***/ }),

/***/ "./src/app/models/configAPI.ts":
/*!*************************************!*\
  !*** ./src/app/models/configAPI.ts ***!
  \*************************************/
/*! exports provided: ConfigAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigAPI", function() { return ConfigAPI; });
var ConfigAPI = {
    api_key: "?api_key=3a76de6bcafa8028860de3aa8dd9acce",
    base_url: "https://api.themoviedb.org/3/",
    image_url: "https://image.tmdb.org/t/p/w500"
};


/***/ }),

/***/ "./src/app/models/movieAPI.ts":
/*!************************************!*\
  !*** ./src/app/models/movieAPI.ts ***!
  \************************************/
/*! exports provided: MovieAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieAPI", function() { return MovieAPI; });
var MovieAPI = /** @class */ (function () {
    function MovieAPI() {
    }
    return MovieAPI;
}());



/***/ }),

/***/ "./src/app/profile-view/profile-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/profile-view/profile-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header1{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#header2 {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.jumbotron {\r\n    color: black\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMENBQTBDO0NBQzdDOztBQUVEO0lBQ0ksMENBQTBDO0NBQzdDOztBQUVEO0lBQ0ksWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlcjF7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2hlYWRlcjIge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgY29sb3I6IGJsYWNrXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile-view/profile-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profile-view/profile-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class=\"row\">\n  <div class=\"jumbotron col-12\">\n    <div> <span class=\"glyphicon glyphicon-user\"></span></div>\n    <h3 class=\"display-4\" align = \"right\">{{title}}</h3>\n    <h3 class=\"display-4\" align= \"right\">{{firstname}} {{lastname}}</h3>\n  </div>\n</div>\n<div class =\"row\">\n  <div class=\"jumbotron col-4 round-border\">\n    <h4 class = \"display-4\" id =\"header1\">Username: </h4>\n    <h4 class = \"display-4\" id = \"header1\">Password: </h4>\n    <h4 class =\"display-4\" id = \"header1\">First Name: </h4>\n    <h4 class = \"display-4\" id = \"header1\">Last Name: </h4>\n    <h4 class=\"display-4\" id=\"header1\">Email: </h4>\n  </div>\n  <div class=\"col-1\"></div>\n  <div class=\"jumbotron col-7 round-border\">\n    <h6 class = \"display-4\" id = \"header2\">{{username}}</h6>\n    <h4 class = \"display-4\" id = \"header2\">{{password}}</h4>\n    <h4 class =\"display-4\" id = \"header2\">{{firstname}}</h4>\n    <h4 class = \"display-4\" id=\"header2\">{{lastname}}</h4>\n    <h4 class=\"display-4\" id =\"header2\">{{email}}</h4>\n  </div>\n</div>\n\n<div class = \"row\">\n\n\n</div>\n\n<div class=\"row\">\n  <div class = \"jumbotron col-12 text-center\">\n    <button class =\"btn btn-secondary btn-lg btn-block\" align = \"center\">Edit Profile</button>\n  </div>\n</div>\n    \n\n</div>\n\n"

/***/ }),

/***/ "./src/app/profile-view/profile-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-view/profile-view.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileViewComponent", function() { return ProfileViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileViewComponent = /** @class */ (function () {
    function ProfileViewComponent(route) {
        this.route = route;
        this.title = 'User Profile';
        this.username = 'syoung11';
        this.password = 'password';
        this.firstname = 'Sean';
        this.lastname = 'Young';
        this.email = 'seanyoung@gmail';
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
    };
    ProfileViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-view',
            template: __webpack_require__(/*! ./profile-view.component.html */ "./src/app/profile-view/profile-view.component.html"),
            styles: [__webpack_require__(/*! ./profile-view.component.css */ "./src/app/profile-view/profile-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProfileViewComponent);
    return ProfileViewComponent;
}());



/***/ }),

/***/ "./src/app/services/movie-api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/movie-api.service.ts ***!
  \***********************************************/
/*! exports provided: MovieAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieAPIService", function() { return MovieAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_movieAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/movieAPI */ "./src/app/models/movieAPI.ts");
/* harmony import */ var src_app_models_configAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/configAPI */ "./src/app/models/configAPI.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/do';


var MovieAPIService = /** @class */ (function () {
    function MovieAPIService(movie) {
        this.movie = movie;
    }
    /**
     * collects the movie information from the API and returns the movie obj
     * @param id
     */
    MovieAPIService.prototype.pull = function (id) {
        // build the search url
        this.themovieDB = src_app_models_configAPI__WEBPACK_IMPORTED_MODULE_2__["ConfigAPI"].base_url + "movie/" + id + src_app_models_configAPI__WEBPACK_IMPORTED_MODULE_2__["ConfigAPI"].api_key;
        // build the movie obj with what you get back
        this.movie.id = id;
        this.movie.title = "Bohemian Rhapsody";
        this.movie.poster_path = src_app_models_configAPI__WEBPACK_IMPORTED_MODULE_2__["ConfigAPI"].image_url + "/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg";
        this.movie.backdrop_path = this.getBackground("/pbXgLEYh8rlG2Km5IGZPnhcnuSz.jpg");
        this.movie.release_date = "2018-10-24";
        this.movie.overview = "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.";
        //console.log(this.getJSON);
        return this.movie;
    };
    /**
     * Angular doesn't like url() because its "unsafe"  The URL needs to be scrubbed
     * as a SafeStyle
     * @param backdrop
     */
    MovieAPIService.prototype.getBackground = function (backdrop) {
        return { 'background-image': "url(" + src_app_models_configAPI__WEBPACK_IMPORTED_MODULE_2__["ConfigAPI"].image_url + backdrop + ")" };
    };
    MovieAPIService.prototype.setMovieID = function (id) {
        // build the search url
        this.themovieDB = src_app_models_configAPI__WEBPACK_IMPORTED_MODULE_2__["ConfigAPI"].base_url + "movie/" + id + src_app_models_configAPI__WEBPACK_IMPORTED_MODULE_2__["ConfigAPI"].api_key;
        this.id = id;
    };
    MovieAPIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_models_movieAPI__WEBPACK_IMPORTED_MODULE_1__["MovieAPI"]])
    ], MovieAPIService);
    return MovieAPIService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\seanp\Documents\sean_young_code\fanatic-client\MovieFanatic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map