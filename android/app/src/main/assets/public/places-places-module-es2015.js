(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["places-places-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/places.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/places.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"discover\"> \n          <ion-label>\n            Discover\n          </ion-label>\n          <ion-icon name=\"search\">\n\n          </ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"offers\"> \n        <ion-label>\n          offers\n        </ion-label>\n        <ion-icon name=\"card\">\n\n        </ion-icon>\n    </ion-tab-button>\n\n    </ion-tab-bar>\n </ion-tabs>\n\n"

/***/ }),

/***/ "./src/app/places/places-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/places/places-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PlacesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPageRoutingModule", function() { return PlacesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./places.page */ "./src/app/places/places.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _places_page__WEBPACK_IMPORTED_MODULE_3__["PlacesPage"],
        children: [
            {
                path: 'discover', children: [
                    {
                        path: '', loadChildren: () => Promise.all(/*! import() | discover-discover-module */[__webpack_require__.e("common"), __webpack_require__.e("discover-discover-module")]).then(__webpack_require__.bind(null, /*! ./discover/discover.module */ "./src/app/places/discover/discover.module.ts")).then(m => m.DiscoverPageModule)
                    },
                    {
                        path: ':placeId', loadChildren: () => __webpack_require__.e(/*! import() | discover-place-detail-place-detail-module */ "common").then(__webpack_require__.bind(null, /*! ./discover/place-detail/place-detail.module */ "./src/app/places/discover/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
                    },
                ]
            },
            {
                path: 'offers', children: [
                    {
                        path: '', loadChildren: () => Promise.all(/*! import() | offers-offers-module */[__webpack_require__.e("common"), __webpack_require__.e("offers-offers-module")]).then(__webpack_require__.bind(null, /*! ./offers/offers.module */ "./src/app/places/offers/offers.module.ts")).then(m => m.OffersPageModule)
                    },
                    {
                        path: 'new', loadChildren: () => __webpack_require__.e(/*! import() | offers-new-offer-new-offer-module */ "new-offer-new-offer-module").then(__webpack_require__.bind(null, /*! ./offers/new-offer/new-offer.module */ "./src/app/places/offers/new-offer/new-offer.module.ts")).then(m => m.NewOfferPageModule)
                    },
                    {
                        path: 'edit/:placeId', loadChildren: () => __webpack_require__.e(/*! import() | offers-edit-offer-edit-offer-module */ "common").then(__webpack_require__.bind(null, /*! ./offers/edit-offer/edit-offer.module */ "./src/app/places/offers/edit-offer/edit-offer.module.ts")).then(m => m.EditOfferPageModule)
                    },
                    {
                        path: ':placeId', loadChildren: () => __webpack_require__.e(/*! import() | offers-offer-bookings-offer-bookings-module */ "common").then(__webpack_require__.bind(null, /*! ./offers/offer-bookings/offer-bookings.module */ "./src/app/places/offers/offer-bookings/offer-bookings.module.ts")).then(m => m.OfferBookingsPageModule)
                    },
                ]
            },
        ]
    },
    {
        path: '', redirectTo: '/places/tabs/discover', pathMatch: 'full'
    }
];
let PlacesPageRoutingModule = class PlacesPageRoutingModule {
};
PlacesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlacesPageRoutingModule);



/***/ }),

/***/ "./src/app/places/places.module.ts":
/*!*****************************************!*\
  !*** ./src/app/places/places.module.ts ***!
  \*****************************************/
/*! exports provided: PlacesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPageModule", function() { return PlacesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _places_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./places-routing.module */ "./src/app/places/places-routing.module.ts");
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./places.page */ "./src/app/places/places.page.ts");







let PlacesPageModule = class PlacesPageModule {
};
PlacesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _places_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlacesPageRoutingModule"]
        ],
        declarations: [_places_page__WEBPACK_IMPORTED_MODULE_6__["PlacesPage"]]
    })
], PlacesPageModule);



/***/ }),

/***/ "./src/app/places/places.page.scss":
/*!*****************************************!*\
  !*** ./src/app/places/places.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9wbGFjZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/places/places.page.ts":
/*!***************************************!*\
  !*** ./src/app/places/places.page.ts ***!
  \***************************************/
/*! exports provided: PlacesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPage", function() { return PlacesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlacesPage = class PlacesPage {
    constructor() { }
    ngOnInit() {
    }
};
PlacesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-places',
        template: __webpack_require__(/*! raw-loader!./places.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/places.page.html"),
        styles: [__webpack_require__(/*! ./places.page.scss */ "./src/app/places/places.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PlacesPage);



/***/ })

}]);
//# sourceMappingURL=places-places-module-es2015.js.map