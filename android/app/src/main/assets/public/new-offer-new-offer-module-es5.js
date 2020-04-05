(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-offer-new-offer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/offers/new-offer/new-offer.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/offers/new-offer/new-offer.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/places/tabs/offers\"> </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Create New Offer</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n      <ion-row justify-content-center >\r\n        <ion-col size =\"4\" >\r\n          row 1 col 12\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          row 1 col 12\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NewOfferPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPageRoutingModule", function() { return NewOfferPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_offer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-offer.page */ "./src/app/places/offers/new-offer/new-offer.page.ts");




var routes = [
    {
        path: '',
        component: _new_offer_page__WEBPACK_IMPORTED_MODULE_3__["NewOfferPage"]
    }
];
var NewOfferPageRoutingModule = /** @class */ (function () {
    function NewOfferPageRoutingModule() {
    }
    NewOfferPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NewOfferPageRoutingModule);
    return NewOfferPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.module.ts ***!
  \*************************************************************/
/*! exports provided: NewOfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPageModule", function() { return NewOfferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-offer-routing.module */ "./src/app/places/offers/new-offer/new-offer-routing.module.ts");
/* harmony import */ var _new_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-offer.page */ "./src/app/places/offers/new-offer/new-offer.page.ts");







var NewOfferPageModule = /** @class */ (function () {
    function NewOfferPageModule() {
    }
    NewOfferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewOfferPageRoutingModule"]
            ],
            declarations: [_new_offer_page__WEBPACK_IMPORTED_MODULE_6__["NewOfferPage"]]
        })
    ], NewOfferPageModule);
    return NewOfferPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL29mZmVycy9uZXctb2ZmZXIvSTpcXGlvbmljXFxpb24tcHJhYy9zcmNcXGFwcFxccGxhY2VzXFxvZmZlcnNcXG5ldy1vZmZlclxcbmV3LW9mZmVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGxhY2VzL29mZmVycy9uZXctb2ZmZXIvbmV3LW9mZmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvb2ZmZXJzL25ldy1vZmZlci9uZXctb2ZmZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCB7XHJcbiAgICBib3JkZXIgOiAxcHggc29saWQgYmxhY2sgO1xyXG59IiwiaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.page.ts ***!
  \***********************************************************/
/*! exports provided: NewOfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPage", function() { return NewOfferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewOfferPage = /** @class */ (function () {
    function NewOfferPage() {
    }
    NewOfferPage.prototype.ngOnInit = function () {
    };
    NewOfferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-offer',
            template: __webpack_require__(/*! raw-loader!./new-offer.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/offers/new-offer/new-offer.page.html"),
            styles: [__webpack_require__(/*! ./new-offer.page.scss */ "./src/app/places/offers/new-offer/new-offer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewOfferPage);
    return NewOfferPage;
}());



/***/ })

}]);
//# sourceMappingURL=new-offer-new-offer-module-es5.js.map