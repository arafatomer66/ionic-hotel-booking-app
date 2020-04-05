(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/discover/discover.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/discover/discover.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n\r\n      <ion-menu-button>\r\n\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>discover</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-segment value=\"all\" (ionicChange)=\"onFilterUpdate($event)\">\r\n    <ion-segment-button value=\"all\">\r\n      All Places\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"bookable\">\r\n      Bookable Places\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              {{ loadedPlaces[0].title }}\r\n            </ion-card-title>\r\n            <ion-card-subtitle>\r\n              {{ loadedPlaces[0].price | currency }} / Night\r\n            </ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-img [src]=\"loadedPlaces[0].image\">\r\n\r\n          </ion-img>\r\n\r\n          <ion-card-content>\r\n            <p>\r\n              {{ loadedPlaces[0].description }}\r\n            </p>\r\n          </ion-card-content>\r\n\r\n          <div text-right>\r\n            <ion-button fill=\"clear\" color=\"primary\" routerDirection=\"forward\"\r\n              [routerLink]=\"['/' , 'places' ,'tabs' , 'discover' , loadedPlaces[0].id]\">\r\n              More\r\n            </ion-button>\r\n          </div>\r\n\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\r\n        <ion-virtual-scroll [items]=\"listedLoadedPlaces\" approxItemHeight=\"70px\">\r\n\r\n          <ion-item [routerLink]=\"['/' , 'places' ,'tabs' , 'discover' , place.id]\" detail *virtualItem=\"let place\">\r\n            <ion-thumbnail slot=\"start\">\r\n\r\n\r\n              <ion-img [src]=\"place.image\">\r\n\r\n              </ion-img>\r\n\r\n            </ion-thumbnail>\r\n\r\n            <ion-label>\r\n              <h2> {{ place.title }} </h2>\r\n              <p>\r\n                {{ place.description }}\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-virtual-scroll>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/places/discover/discover-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/places/discover/discover-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DiscoverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageRoutingModule", function() { return DiscoverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");




var routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_3__["DiscoverPage"]
    },
    {
        path: 'place-detail',
        loadChildren: function () { return __webpack_require__.e(/*! import() | place-detail-place-detail-module */ "common").then(__webpack_require__.bind(null, /*! ./place-detail/place-detail.module */ "./src/app/places/discover/place-detail/place-detail.module.ts")).then(function (m) { return m.PlaceDetailPageModule; }); }
    }
];
var DiscoverPageRoutingModule = /** @class */ (function () {
    function DiscoverPageRoutingModule() {
    }
    DiscoverPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DiscoverPageRoutingModule);
    return DiscoverPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/places/discover/discover.module.ts":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.module.ts ***!
  \****************************************************/
/*! exports provided: DiscoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _discover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover-routing.module */ "./src/app/places/discover/discover-routing.module.ts");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");







var DiscoverPageModule = /** @class */ (function () {
    function DiscoverPageModule() {
    }
    DiscoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _discover_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverPageRoutingModule"]
            ],
            declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]]
        })
    ], DiscoverPageModule);
    return DiscoverPageModule;
}());



/***/ }),

/***/ "./src/app/places/discover/discover.page.scss":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kaXNjb3Zlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/places/discover/discover.page.ts":
/*!**************************************************!*\
  !*** ./src/app/places/discover/discover.page.ts ***!
  \**************************************************/
/*! exports provided: DiscoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return DiscoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DiscoverPage = /** @class */ (function () {
    function DiscoverPage(placeService) {
        this.placeService = placeService;
    }
    DiscoverPage.prototype.ngOnInit = function () {
        this.loadedPlaces = this.placeService.places;
        this.listedLoadedPlaces = this.loadedPlaces.slice(1);
    };
    DiscoverPage.prototype.onFilterUpdate = function (event) {
        console.log(event.detail);
    };
    DiscoverPage.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_1__["PlacesService"] }
    ]; };
    DiscoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__(/*! raw-loader!./discover.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/discover/discover.page.html"),
            styles: [__webpack_require__(/*! ./discover.page.scss */ "./src/app/places/discover/discover.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_1__["PlacesService"]])
    ], DiscoverPage);
    return DiscoverPage;
}());



/***/ })

}]);
//# sourceMappingURL=discover-discover-module-es5.js.map