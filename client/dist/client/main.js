(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/orisayag/Desktop/Store Assignment/server/client/src/main.ts */"zUnb");


/***/ }),

/***/ "9o5j":
/*!***************************************************************!*\
  !*** ./src/app/components/stats-card/stats-card.component.ts ***!
  \***************************************************************/
/*! exports provided: StatsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsCardComponent", function() { return StatsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



function StatsCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.products[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.amount);
} }
function StatsCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r1.sales._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.sales.amount);
} }
class StatsCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatsCardComponent.ɵfac = function StatsCardComponent_Factory(t) { return new (t || StatsCardComponent)(); };
StatsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsCardComponent, selectors: [["app-stats-card"]], inputs: { product: "product", sales: "sales" }, decls: 2, vars: 2, consts: [["class", "products", 4, "ngIf"], [1, "products"]], template: function StatsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StatsCardComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatsCardComponent_div_1_Template, 6, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product && ctx.product.products[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sales);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Freckle+Face&family=Rubik:wght@300;400;500&display=swap\");\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 100%;\n  background: none;\n  border: none;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\ninput[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #bdbdbd;\n  font-family: \"Rubik\", sans-serif;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Rubik\", sans-serif;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: 1px solid dodgerblue;\n}\n.products[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n  width: 280px;\n}\n.products[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  width: 80%;\n  font-weight: 400;\n}\n.products[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  width: 20%;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL3N0YXRzLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsK0dBQUE7QUF1RlI7RUE3QkUsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBNkJBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDbkZGO0FEb0RFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNsREo7QURvREU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ2xESjtBRG9ERTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUNsREo7QUQwRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0EvRmM7QUN3QmhCO0FEeUVFO0VBQ0UsZ0NBbEdZO0VBbUdaLFlBQUE7QUN2RUo7QUR5RUU7RUFFRSw2QkFBQTtBQ3hFSjtBQWhDQTtFRElFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQ0xpQjtFRE1qQixtQkFBQTtFQ0xBLFlBQUE7QUFzQ0Y7QUFyQ0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUF1Q0o7QUFyQ0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUF1Q0oiLCJmaWxlIjoic3RhdHMtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVja2xlK0ZhY2UmZmFtaWx5PVJ1YmlrOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwXCIpO1xuXG4kbG9nb0ZvbnQ6IFwiRnJlY2tsZSBGYWNlXCIsIGN1cnNpdmU7XG4kcGFyYWdyYXBoRm9udDogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuXG5AbWl4aW4gcm93RmxleCgkcG9zaXRpb24pIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiAkcG9zaXRpb247XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbkBtaXhpbiBjZW50ZXJGbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuQG1peGluIHByb2R1Y3RDYXJkIHtcbiAgZm9udC1mYW1pbHk6ICRwYXJhZ3JhcGhGb250O1xuICBmb250LXdlaWdodDogMTAwO1xuICBAaW5jbHVkZSBjZW50ZXJGbGV4O1xuICBpbWcge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5kZXNjIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xuICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxuICAgIHA6bnRoLWNoaWxkKDMpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCAyMjMsIDIyMyk7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuQG1peGluIGZ1bGxTY3JlZW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWl4aW4gbGlua3Mge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgJjphY3RpdmUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxufVxuXG5AbWl4aW4gcmlnaHRTaWRlUG9wVXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAxMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk3LCAxOTcsIDE5Nyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB6LWluZGV4OiAyO1xufVxuXG5idXR0b24ge1xuICBAaW5jbHVkZSBsaW5rcztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg5LCAxODksIDE4OSk7XG4gIGZvbnQtZmFtaWx5OiAkcGFyYWdyYXBoRm9udDtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1mYW1pbHk6ICRwYXJhZ3JhcGhGb250O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAmOmZvY3VzIHtcbiAgICAvLyBvdXRsaW5lOiA7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGRvZGdlcmJsdWU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcblxuLnByb2R1Y3RzIHtcbiAgQGluY2x1ZGUgcm93RmxleChmbGV4LXN0YXJ0KTtcbiAgd2lkdGg6IDI4MHB4O1xuICBwOmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgcDpudGgtY2hpbGQoMikge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stats-card',
                templateUrl: './stats-card.component.html',
                styleUrls: ['./stats-card.component.scss']
            }]
    }], function () { return []; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sales: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "HFSw":
/*!***************************************************!*\
  !*** ./src/app/services/products-data.service.ts ***!
  \***************************************************/
/*! exports provided: ProductsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDataService", function() { return ProductsDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-request.service */ "hZfp");



class ProductsDataService {
    constructor(_request) {
        this._request = _request;
        this.allProducts = [];
        // current page
        this.reports = false;
        this.admin = false;
        this.home = false;
        //add product modal
        this.adminAddProductToggle = false;
        //edit product modal
        this.adminEditProductToggle = false;
    }
    // get all products
    getProducts() {
        return this._request.get('product/all');
    }
    addProduct(body) {
        return this._request.post('product/admin/add-product', body);
    }
    editProduct(id, body) {
        return this._request.put('product/admin/' + id, body);
    }
    deleteProduct(productId) {
        return this._request.delete('product/admin/delete/' + productId);
    }
    toggleAdminAddProductBox() {
        this.adminEditProductToggle = false;
        this.adminAddProductToggle = true;
    }
    toggleAdminEditProductBox(product) {
        this.adminAddProductToggle = false;
        this.adminEditProductToggle = true;
        this.editedProduct = product;
    }
    closeBox() {
        this.adminAddProductToggle = false;
        this.adminEditProductToggle = false;
    }
}
ProductsDataService.ɵfac = function ProductsDataService_Factory(t) { return new (t || ProductsDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
ProductsDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsDataService, factory: ProductsDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_products_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products-data.service */ "HFSw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-card/product-card.component */ "uKlw");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin/admin.component */ "cCTE");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stats/stats.component */ "jyt5");








function MainComponent_div_1_app_product_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card", 5);
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r4);
} }
function MainComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_1_app_product_card_1_Template, 1, 1, "app-product-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0._product.allProducts);
} }
function MainComponent_div_2_app_admin_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin", 5);
} if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r6);
} }
function MainComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_2_app_admin_1_Template, 1, 1, "app-admin", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1._product.allProducts);
} }
function MainComponent_app_stats_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stats");
} }
class MainComponent {
    constructor(_product, _activated) {
        this._product = _product;
        this._activated = _activated;
    }
    ngOnInit() {
        this._product.getProducts().subscribe((res) => {
            this._product.allProducts = res;
        });
        switch (this._activated.snapshot.routeConfig.path) {
            case 'reports':
                this._product.reports = true;
                this._product.home = false;
                this._product.admin = false;
                break;
            case 'admin':
                this._product.home = false;
                this._product.reports = false;
                this._product.admin = true;
                break;
            case 'home':
                this._product.home = true;
                this._product.reports = false;
                this._product.admin = false;
                break;
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_data_service__WEBPACK_IMPORTED_MODULE_1__["ProductsDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 4, vars: 3, consts: [[1, "main-wrapper"], ["class", "products", 4, "ngIf"], [4, "ngIf"], [1, "products"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainComponent_app_stats_3_Template, 1, 0, "app-stats", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._product.home);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._product.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._product.reports);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Freckle+Face&family=Rubik:wght@300;400;500&display=swap\");\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 100%;\n  background: none;\n  border: none;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\ninput[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #bdbdbd;\n  font-family: \"Rubik\", sans-serif;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Rubik\", sans-serif;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: 1px solid dodgerblue;\n}\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.products[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.editProductModal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100px;\n  right: 100px;\n  height: 500px;\n  width: 300px;\n  border: 1px solid #c5c5c5;\n  background-color: white;\n  padding: 10px;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsK0dBQUE7QUF1RlI7RUE3QkUsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBNkJBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDbkZGO0FEb0RFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNsREo7QURvREU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ2xESjtBRG9ERTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUNsREo7QUQwRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0EvRmM7QUN3QmhCO0FEeUVFO0VBQ0UsZ0NBbEdZO0VBbUdaLFlBQUE7QUN2RUo7QUR5RUU7RUFFRSw2QkFBQTtBQ3hFSjtBQWhDQTtFRG1ERSxXQUFBO0VBQ0EsWUFBQTtBQ2ZGO0FBbENBO0VBQ0UsaUJBQUE7RURPQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQytCRjtBQXZDQTtFRG1FRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUN4QkYiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVja2xlK0ZhY2UmZmFtaWx5PVJ1YmlrOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwXCIpO1xuXG4kbG9nb0ZvbnQ6IFwiRnJlY2tsZSBGYWNlXCIsIGN1cnNpdmU7XG4kcGFyYWdyYXBoRm9udDogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuXG5AbWl4aW4gcm93RmxleCgkcG9zaXRpb24pIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiAkcG9zaXRpb247XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbkBtaXhpbiBjZW50ZXJGbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuQG1peGluIHByb2R1Y3RDYXJkIHtcbiAgZm9udC1mYW1pbHk6ICRwYXJhZ3JhcGhGb250O1xuICBmb250LXdlaWdodDogMTAwO1xuICBAaW5jbHVkZSBjZW50ZXJGbGV4O1xuICBpbWcge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5kZXNjIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xuICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxuICAgIHA6bnRoLWNoaWxkKDMpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCAyMjMsIDIyMyk7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuQG1peGluIGZ1bGxTY3JlZW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWl4aW4gbGlua3Mge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgJjphY3RpdmUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxufVxuXG5AbWl4aW4gcmlnaHRTaWRlUG9wVXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAxMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk3LCAxOTcsIDE5Nyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB6LWluZGV4OiAyO1xufVxuXG5idXR0b24ge1xuICBAaW5jbHVkZSBsaW5rcztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg5LCAxODksIDE4OSk7XG4gIGZvbnQtZmFtaWx5OiAkcGFyYWdyYXBoRm9udDtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1mYW1pbHk6ICRwYXJhZ3JhcGhGb250O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAmOmZvY3VzIHtcbiAgICAvLyBvdXRsaW5lOiA7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGRvZGdlcmJsdWU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcblxuLm1haW4td3JhcHBlciB7XG4gIEBpbmNsdWRlIGZ1bGxTY3JlZW47XG59XG4ucHJvZHVjdHMge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgQGluY2x1ZGUgY2VudGVyRmxleDtcbn1cbi5lZGl0UHJvZHVjdE1vZGFsIHtcbiAgQGluY2x1ZGUgcmlnaHRTaWRlUG9wVXA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_products_data_service__WEBPACK_IMPORTED_MODULE_1__["ProductsDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "QWKc":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart-data.service */ "oM8l");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




function CartComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", product_r3.quantity, " x ", product_r3.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", product_r3.price, "");
} }
function CartComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_p_9_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4._cart.sendCartToServer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(_cart) {
        this._cart = _cart;
    }
    ngOnInit() {
        this.cartObject = this._cart.cart;
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__["CartDataService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 10, vars: 4, consts: [[1, "cart-wrapper"], [1, "closeCartBtn", 3, "click"], [1, "fas", "fa-times"], [1, "products"], [4, "ngIf"], ["class", "cartRow", 4, "ngFor", "ngForOf"], [1, "totalPrice"], ["class", "checkout", 3, "click", 4, "ngIf"], [1, "cartRow"], [1, "desc"], [1, "price"], [1, "checkout", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_p_click_1_listener() { return ctx._cart.cartDisplayButton = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartComponent_p_4_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_div_5_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_p_9_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartObject.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: $ ", ctx._cart.totalPrice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartObject.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Freckle+Face&family=Rubik:wght@300;400;500&display=swap\");\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 100%;\n  background: none;\n  border: none;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\ninput[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #bdbdbd;\n  font-family: \"Rubik\", sans-serif;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Rubik\", sans-serif;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: 1px solid dodgerblue;\n}\n.cart-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100px;\n  right: 100px;\n  height: 500px;\n  width: 300px;\n  border: 1px solid #c5c5c5;\n  background-color: white;\n  padding: 10px;\n  z-index: 2;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 300;\n  font-size: 15px;\n  text-align: center;\n}\n.cart-wrapper[_ngcontent-%COMP%]   .closeCartBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 20px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n.cart-wrapper[_ngcontent-%COMP%]   .closeCartBtn[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\n.cart-wrapper[_ngcontent-%COMP%]   .closeCartBtn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\n.cart-wrapper[_ngcontent-%COMP%]   .closeCartBtn[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\n.cart-wrapper[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%] {\n  height: 75%;\n  overflow: scroll;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.cart-wrapper[_ngcontent-%COMP%]   .cartRow[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n  text-align: left;\n}\n.cart-wrapper[_ngcontent-%COMP%]   .cartRow[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.cart-wrapper[_ngcontent-%COMP%]   .totalPrice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.cart-wrapper[_ngcontent-%COMP%]   .checkout[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n.cart-wrapper[_ngcontent-%COMP%]   .checkout[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\n.cart-wrapper[_ngcontent-%COMP%]   .checkout[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\n.cart-wrapper[_ngcontent-%COMP%]   .checkout[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsK0dBQUE7QUF1RlI7RUE3QkUsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBNkJBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDbkZGO0FEb0RFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNsREo7QURvREU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ2xESjtBRG9ERTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUNsREo7QUQwRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0EvRmM7QUN3QmhCO0FEeUVFO0VBQ0UsZ0NBbEdZO0VBbUdaLFlBQUE7QUN2RUo7QUR5RUU7RUFFRSw2QkFBQTtBQ3hFSjtBQWhDQTtFRDBFRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUNoRkEsZ0NERGM7RUNFZCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTJDRjtBQXpDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUQ4Q0YsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRkY7QURHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDREo7QURHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDREo7QURHRTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUNESjtBQXZERTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBeURKO0FBdkRFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RURsQkYsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJDaUJtQjtFRGhCbkIsbUJBQUE7RUNpQkUsZ0JBQUE7QUE0REo7QUEzREk7RUFDRSxVQUFBO0FBNkROO0FBMURFO0VEbEJBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VDZ0JFLHNCQUFBO0FBZ0VKO0FBOURFO0VEdUJBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQzBDRjtBRHpDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDMkNKO0FEekNFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUMyQ0o7QUR6Q0U7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FDMkNKIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RnJlY2tsZStGYWNlJmZhbWlseT1SdWJpazp3Z2h0QDMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcFwiKTtcblxuJGxvZ29Gb250OiBcIkZyZWNrbGUgRmFjZVwiLCBjdXJzaXZlO1xuJHBhcmFncmFwaEZvbnQ6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcblxuQG1peGluIHJvd0ZsZXgoJHBvc2l0aW9uKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogJHBvc2l0aW9uO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5AbWl4aW4gY2VudGVyRmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbkBtaXhpbiBwcm9kdWN0Q2FyZCB7XG4gIGZvbnQtZmFtaWx5OiAkcGFyYWdyYXBoRm9udDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgQGluY2x1ZGUgY2VudGVyRmxleDtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG4gIC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICAuZGVzYyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcbiAgICBwOm50aC1jaGlsZCgyKSB7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cbiAgICBwOm50aC1jaGlsZCgzKSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMywgMjIzLCAyMjMpO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbkBtaXhpbiBmdWxsU2NyZWVuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1peGluIGxpbmtzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gICY6YWN0aXZlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbn1cblxuQG1peGluIHJpZ2h0U2lkZVBvcFVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICByaWdodDogMTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5NywgMTk3LCAxOTcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgei1pbmRleDogMjtcbn1cblxuYnV0dG9uIHtcbiAgQGluY2x1ZGUgbGlua3M7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4OSwgMTg5LCAxODkpO1xuICBmb250LWZhbWlseTogJHBhcmFncmFwaEZvbnQ7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGZvbnQtZmFtaWx5OiAkcGFyYWdyYXBoRm9udDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgLy8gb3V0bGluZTogO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBkb2RnZXJibHVlO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5jYXJ0LXdyYXBwZXIge1xuICBAaW5jbHVkZSByaWdodFNpZGVQb3BVcDtcbiAgZm9udC1mYW1pbHk6ICRwYXJhZ3JhcGhGb250O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuY2xvc2VDYXJ0QnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgQGluY2x1ZGUgbGlua3M7XG4gIH1cbiAgLnByb2R1Y3RzIHtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY2FydFJvdyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBpbmNsdWRlIHJvd0ZsZXgoZmxleC1zdGFydCk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAuZGVzYyB7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgfVxuICAudG90YWxQcmljZSB7XG4gICAgQGluY2x1ZGUgY2VudGVyRmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jaGVja291dCB7XG4gICAgQGluY2x1ZGUgbGlua3M7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__["CartDataService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-card/product-card.component */ "uKlw");
/* harmony import */ var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/stats/stats.component */ "jyt5");
/* harmony import */ var _components_stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/stats-card/stats-card.component */ "9o5j");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add-product/add-product.component */ "myRK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "s7LF");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardComponent"],
        _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_8__["StatsComponent"],
        _components_stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_9__["StatsCardComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
        _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_12__["AddProductComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                    _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardComponent"],
                    _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_8__["StatsComponent"],
                    _components_stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_9__["StatsCardComponent"],
                    _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
                    _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
                    _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_12__["AddProductComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "cCTE":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_products_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products-data.service */ "HFSw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-product/add-product.component */ "myRK");





function AdminComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-add-product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminComponent {
    constructor(_product) {
        this._product = _product;
    }
    ngOnInit() { }
    deleteProduct(productId) {
        this._product.deleteProduct(productId).subscribe(() => {
            const deletedProduct = this._product.allProducts.findIndex((product) => {
                product._id !== productId;
            });
            this._product.allProducts.splice(deletedProduct, 1);
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_data_service__WEBPACK_IMPORTED_MODULE_1__["ProductsDataService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], inputs: { product: "product" }, decls: 13, vars: 3, consts: [[1, "adminRow"], [1, "title"], [1, "price"], [1, "buttons"], [3, "click"], [4, "ngIf"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_p_click_8_listener() { return ctx._product.toggleAdminEditProductBox(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_p_click_10_listener() { return ctx.deleteProduct(ctx.product._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminComponent_div_12_Template, 2, 0, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.product.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._product.adminEditProductToggle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Freckle+Face&family=Rubik:wght@300;400;500&display=swap\");\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 100%;\n  background: none;\n  border: none;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\ninput[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #bdbdbd;\n  font-family: \"Rubik\", sans-serif;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Rubik\", sans-serif;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: 1px solid dodgerblue;\n}\n.adminRow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  width: 50vw;\n  padding: 10px;\n  border-top: 1px solid #dbdbdb;\n}\n.adminRow[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .adminRow[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%], .adminRow[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  width: 30%;\n  font-family: \"Rubik\", sans-serif;\n  text-align: center;\n}\n.adminRow[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n.adminRow[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\n.adminRow[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\n.adminRow[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLCtHQUFBO0FBdUZSO0VBN0JFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQTZCQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ25GRjtBRG9ERTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDbERKO0FEb0RFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNsREo7QURvREU7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FDbERKO0FEMEVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBL0ZjO0FDd0JoQjtBRHlFRTtFQUNFLGdDQWxHWTtFQW1HWixZQUFBO0FDdkVKO0FEeUVFO0VBRUUsNkJBQUE7QUN4RUo7QUFoQ0E7RURJRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkNMaUI7RURNakIsbUJBQUE7RUNMQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBc0NGO0FBcENFOzs7RUFHRSxVQUFBO0VBQ0EsZ0NEVFk7RUNVWixrQkFBQTtBQXNDSjtBQW5DSTtFRDBDRixlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNKRjtBREtFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNISjtBREtFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNISjtBREtFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQ0hKIiwiZmlsZSI6ImFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZyZWNrbGUrRmFjZSZmYW1pbHk9UnViaWs6d2dodEAzMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXBcIik7XG5cbiRsb2dvRm9udDogXCJGcmVja2xlIEZhY2VcIiwgY3Vyc2l2ZTtcbiRwYXJhZ3JhcGhGb250OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG5cbkBtaXhpbiByb3dGbGV4KCRwb3NpdGlvbikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRwb3NpdGlvbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuQG1peGluIGNlbnRlckZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5AbWl4aW4gcHJvZHVjdENhcmQge1xuICBmb250LWZhbWlseTogJHBhcmFncmFwaEZvbnQ7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIEBpbmNsdWRlIGNlbnRlckZsZXg7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuICAudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLmRlc2Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XG4gICAgcDpudGgtY2hpbGQoMikge1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB9XG4gICAgcDpudGgtY2hpbGQoMykge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwcHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICB9XG4gIH1cblxuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIyMywgMjIzKTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5AbWl4aW4gZnVsbFNjcmVlbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtaXhpbiBsaW5rcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICAmOmFjdGl2ZSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG59XG5cbkBtaXhpbiByaWdodFNpZGVQb3BVcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgcmlnaHQ6IDEwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTcsIDE5NywgMTk3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbmJ1dHRvbiB7XG4gIEBpbmNsdWRlIGxpbmtzO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODksIDE4OSwgMTg5KTtcbiAgZm9udC1mYW1pbHk6ICRwYXJhZ3JhcGhGb250O1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LWZhbWlseTogJHBhcmFncmFwaEZvbnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIC8vIG91dGxpbmU6IDtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgZG9kZ2VyYmx1ZTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uYWRtaW5Sb3cge1xuICBAaW5jbHVkZSByb3dGbGV4KGNlbnRlcik7XG4gIHdpZHRoOiA1MHZ3O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIxOSwgMjE5LCAyMTkpO1xuXG4gIC50aXRsZSxcbiAgLnByaWNlLFxuICAuYnV0dG9ucyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBmb250LWZhbWlseTogJHBhcmFncmFwaEZvbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5idXR0b25zIHtcbiAgICBwIHtcbiAgICAgIEBpbmNsdWRlIGxpbmtzO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_products_data_service__WEBPACK_IMPORTED_MODULE_1__["ProductsDataService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "gm9r":
/*!************************************************!*\
  !*** ./src/app/services/stats-data.service.ts ***!
  \************************************************/
/*! exports provided: StatsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsDataService", function() { return StatsDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-request.service */ "hZfp");



class StatsDataService {
    constructor(_request) {
        this._request = _request;
    }
    getTopFiveProducts() {
        return this._request.get('checkout/top-five');
    }
    getTopUniqueProducts() {
        return this._request.get('checkout/top-unique');
    }
    getTopSaleDays() {
        return this._request.get('checkout/top-sales');
    }
}
StatsDataService.ɵfac = function StatsDataService_Factory(t) { return new (t || StatsDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
StatsDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatsDataService, factory: StatsDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "hZfp":
/*!*************************************************!*\
  !*** ./src/app/services/web-request.service.ts ***!
  \*************************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class WebRequestService {
    constructor(_http) {
        this._http = _http;
        this.ROOT_URL = '';
    }
    get(uri) {
        return this._http.get(`${this.ROOT_URL}/${uri}`);
    }
    post(uri, body) {
        return this._http.post(`${this.ROOT_URL}/${uri}`, body);
    }
    put(uri, body) {
        return this._http.put(`${this.ROOT_URL}/${uri}`, body);
    }
    delete(uri) {
        return this._http.delete(`${this.ROOT_URL}/${uri}`);
    }
}
WebRequestService.ɵfac = function WebRequestService_Factory(t) { return new (t || WebRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WebRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebRequestService, factory: WebRequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jyt5":
/*!*****************************************************!*\
  !*** ./src/app/components/stats/stats.component.ts ***!
  \*****************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_stats_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/stats-data.service */ "gm9r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stats-card/stats-card.component */ "9o5j");





function StatsComponent_app_stats_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stats-card", 4);
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r3);
} }
function StatsComponent_app_stats_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stats-card", 4);
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r4);
} }
function StatsComponent_app_stats_card_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stats-card", 5);
} if (rf & 2) {
    const sales_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sales", sales_r5);
} }
class StatsComponent {
    constructor(_stats) {
        this._stats = _stats;
        this.topFive = [];
        this.topSales = [];
        this.topUnique = [];
    }
    ngOnInit() {
        this._stats.getTopFiveProducts().subscribe((res) => {
            this.topFive = res;
        });
        this._stats.getTopUniqueProducts().subscribe((res) => {
            this.topUnique = res;
        });
        this._stats.getTopSaleDays().subscribe((res) => {
            this.topSales = res;
        });
    }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stats_data_service__WEBPACK_IMPORTED_MODULE_1__["StatsDataService"])); };
StatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], decls: 13, vars: 3, consts: [[1, "stats-wrapper"], [1, "card"], [3, "product", 4, "ngFor", "ngForOf"], [3, "sales", 4, "ngFor", "ngForOf"], [3, "product"], [3, "sales"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Top 5 Products Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StatsComponent_app_stats_card_4_Template, 1, 1, "app-stats-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Top 5 Unique Products Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StatsComponent_app_stats_card_8_Template, 1, 1, "app-stats-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Best Sale Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StatsComponent_app_stats_card_12_Template, 1, 1, "app-stats-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topFive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topUnique);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topSales);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_3__["StatsCardComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Freckle+Face&family=Rubik:wght@300;400;500&display=swap\");\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 100%;\n  background: none;\n  border: none;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\ninput[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #bdbdbd;\n  font-family: \"Rubik\", sans-serif;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Rubik\", sans-serif;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: 1px solid dodgerblue;\n}\n.stats-wrapper[_ngcontent-%COMP%] {\n  padding: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.card[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 300px;\n  height: 500px;\n  border: 1px solid #dfdfdf;\n  margin: 10px;\n  padding: 10px;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  position: relative;\n  border-top: 1px solid #d6d6d6;\n}\n.card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  overflow: scroll;\n}\n.card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3) {\n  position: absolute;\n  top: 0px;\n  right: 10px;\n}\n.card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 70%;\n  text-align: center;\n  height: 120px;\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL3N0YXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLCtHQUFBO0FBdUZSO0VBN0JFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQTZCQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ25GRjtBRG9ERTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDbERKO0FEb0RFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNsREo7QURvREU7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FDbERKO0FEMEVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBL0ZjO0FDd0JoQjtBRHlFRTtFQUNFLGdDQWxHWTtFQW1HWixZQUFBO0FDdkVKO0FEeUVFO0VBRUUsNkJBQUE7QUN4RUo7QUFoQ0E7RUFDRSxhQUFBO0VEVUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUMwQkY7QUFyQ0E7RURlRSxnQ0FsQmM7RUFtQmQsZ0JBQUE7RUFUQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQTRCQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUN6Q0Esc0JBQUE7RUFDQSwyQkFBQTtBQW1ERjtBRHBDRTtFQUNFLGFBQUE7QUNzQ0o7QURwQ0U7RUFDRSxnQkFBQTtBQ3NDSjtBRHBDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ3NDSjtBRHJDSTtFQUNFLGdCQUFBO0FDdUNOO0FEckNJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ3VDTjtBQXRFRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQXdFSiIsImZpbGUiOiJzdGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVja2xlK0ZhY2UmZmFtaWx5PVJ1YmlrOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwXCIpO1xuXG4kbG9nb0ZvbnQ6IFwiRnJlY2tsZSBGYWNlXCIsIGN1cnNpdmU7XG4kcGFyYWdyYXBoRm9udDogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuXG5AbWl4aW4gcm93RmxleCgkcG9zaXRpb24pIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiAkcG9zaXRpb247XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbkBtaXhpbiBjZW50ZXJGbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuQG1peGluIHByb2R1Y3RDYXJkIHtcbiAgZm9udC1mYW1pbHk6ICRwYXJhZ3JhcGhGb250O1xuICBmb250LXdlaWdodDogMTAwO1xuICBAaW5jbHVkZSBjZW50ZXJGbGV4O1xuICBpbWcge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5kZXNjIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xuICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxuICAgIHA6bnRoLWNoaWxkKDMpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCAyMjMsIDIyMyk7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuQG1peGluIGZ1bGxTY3JlZW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWl4aW4gbGlua3Mge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgJjphY3RpdmUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxufVxuXG5AbWl4aW4gcmlnaHRTaWRlUG9wVXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAxMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk3LCAxOTcsIDE5Nyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB6LWluZGV4OiAyO1xufVxuXG5idXR0b24ge1xuICBAaW5jbHVkZSBsaW5rcztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg5LCAxODksIDE4OSk7XG4gIGZvbnQtZmFtaWx5OiAkcGFyYWdyYXBoRm9udDtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1mYW1pbHk6ICRwYXJhZ3JhcGhGb250O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAmOmZvY3VzIHtcbiAgICAvLyBvdXRsaW5lOiA7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGRvZGdlcmJsdWU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcblxuLnN0YXRzLXdyYXBwZXIge1xuICBwYWRkaW5nOiA1MHB4O1xuICBAaW5jbHVkZSBjZW50ZXJGbGV4O1xufVxuLmNhcmQge1xuICBAaW5jbHVkZSBwcm9kdWN0Q2FyZDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBoMSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stats',
                templateUrl: './stats.component.html',
                styleUrls: ['./stats.component.scss']
            }]
    }], function () { return [{ type: src_app_services_stats_data_service__WEBPACK_IMPORTED_MODULE_1__["StatsDataService"] }]; }, null); })();


/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart-data.service */ "oM8l");
/* harmony import */ var src_app_services_products_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products-data.service */ "HFSw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart/cart.component */ "QWKc");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-product/add-product.component */ "myRK");








function NavigationComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_p_10_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4._cart.toggleCartDisplay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_p_11_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6._product.toggleAdminAddProductBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-add-product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/reports"]; };
class NavigationComponent {
    constructor(_cart, _product) {
        this._cart = _cart;
        this._product = _product;
        this.admin = false;
    }
    ngOnInit() { }
    toggleCart() {
        this._cart.toggleCartDisplay();
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__["CartDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_data_service__WEBPACK_IMPORTED_MODULE_2__["ProductsDataService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 14, vars: 10, consts: [[1, "navigation-wrapper"], [1, "logo", 3, "routerLink"], [1, "links"], ["routerLinkActive", "active", 3, "routerLink"], [1, "cart"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "click"], [1, "fas", "fa-shopping-cart"], [1, "fas", "fa-plus"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The Nineties Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavigationComponent_p_10_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavigationComponent_p_11_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavigationComponent_div_12_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavigationComponent_div_13_Template, 2, 0, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._product.home);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._product.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._cart.cartDisplayButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._product.adminAddProductToggle);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Freckle+Face&family=Rubik:wght@300;400;500&display=swap\");\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 100%;\n  background: none;\n  border: none;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\ninput[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #bdbdbd;\n  font-family: \"Rubik\", sans-serif;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Rubik\", sans-serif;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: 1px solid dodgerblue;\n}\n.navigation-wrapper[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 100;\n  font-size: 15px;\n  height: 100px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 25%;\n  font-family: \"Freckle Face\", cursive;\n  font-size: large;\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 20px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-direction: row;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: center;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  font-size: 20px;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\n.navigation-wrapper[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-bottom: dodgerblue 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsK0dBQUE7QUF1RlI7RUE3QkUsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBNkJBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDbkZGO0FEb0RFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNsREo7QURvREU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ2xESjtBRG9ERTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUNsREo7QUQwRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0EvRmM7QUN3QmhCO0FEeUVFO0VBQ0UsZ0NBbEdZO0VBbUdaLFlBQUE7QUN2RUo7QUR5RUU7RUFFRSw2QkFBQTtBQ3hFSjtBQWhDQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUREQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDcUNGO0FBckNFO0VBQ0UsWUFBQTtBQXVDSjtBQXJDRTtFQUNFLFVBQUE7RUFDQSxvQ0RaTztFQ2FQLGdCQUFBO0VEMkNGLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0hGO0FESUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUU7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FDRko7QUFuREU7RUFDRSxVQUFBO0VEYkYsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJDWW1CO0VEWG5CLG1CQUFBO0FDbUVGO0FBdkRJO0VBQ0UsWUFBQTtFRG9DSixlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNzQkY7QURyQkU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ3VCSjtBRHJCRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDdUJKO0FEckJFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQ3VCSjtBQXBFRTtFQUNFLFVBQUE7RURyQkYsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDb0JtQjtFRG5CbkIsbUJBQUE7QUM0RkY7QUF4RUk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUQyQkosZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VDM0JJLGVBQUE7QUE0RU47QURoREU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ2tESjtBRGhERTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDa0RKO0FEaERFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQ2tESjtBQXJGRTtFQUNFLG1DQUFBO0FBdUZKIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RnJlY2tsZStGYWNlJmZhbWlseT1SdWJpazp3Z2h0QDMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcFwiKTtcblxuJGxvZ29Gb250OiBcIkZyZWNrbGUgRmFjZVwiLCBjdXJzaXZlO1xuJHBhcmFncmFwaEZvbnQ6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcblxuQG1peGluIHJvd0ZsZXgoJHBvc2l0aW9uKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogJHBvc2l0aW9uO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5AbWl4aW4gY2VudGVyRmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbkBtaXhpbiBwcm9kdWN0Q2FyZCB7XG4gIGZvbnQtZmFtaWx5OiAkcGFyYWdyYXBoRm9udDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgQGluY2x1ZGUgY2VudGVyRmxleDtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG4gIC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICAuZGVzYyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcbiAgICBwOm50aC1jaGlsZCgyKSB7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cbiAgICBwOm50aC1jaGlsZCgzKSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMywgMjIzLCAyMjMpO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbkBtaXhpbiBmdWxsU2NyZWVuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1peGluIGxpbmtzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gICY6YWN0aXZlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbn1cblxuQG1peGluIHJpZ2h0U2lkZVBvcFVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICByaWdodDogMTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5NywgMTk3LCAxOTcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgei1pbmRleDogMjtcbn1cblxuYnV0dG9uIHtcbiAgQGluY2x1ZGUgbGlua3M7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4OSwgMTg5LCAxODkpO1xuICBmb250LWZhbWlseTogJHBhcmFncmFwaEZvbnQ7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGZvbnQtZmFtaWx5OiAkcGFyYWdyYXBoRm9udDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgLy8gb3V0bGluZTogO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBkb2RnZXJibHVlO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5uYXZpZ2F0aW9uLXdyYXBwZXIge1xuICBmb250LWZhbWlseTogJHBhcmFncmFwaEZvbnQ7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIEBpbmNsdWRlIHJvd0ZsZXgoZmxleC1zdGFydCk7XG4gIGRpdiB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG4gIC5sb2dvIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZvbnQtZmFtaWx5OiAkbG9nb0ZvbnQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBAaW5jbHVkZSBsaW5rcztcbiAgfVxuICAubGlua3Mge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgQGluY2x1ZGUgcm93RmxleChmbGV4LXN0YXJ0KTtcbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgIEBpbmNsdWRlIGxpbmtzO1xuICAgIH1cbiAgfVxuICAuY2FydCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBAaW5jbHVkZSByb3dGbGV4KGZsZXgtZW5kKTtcbiAgICBwIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIEBpbmNsdWRlIGxpbmtzO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxuICAuYWN0aXZlIHtcbiAgICBib3JkZXItYm90dG9tOiBkb2RnZXJibHVlIDFweCBzb2xpZDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__["CartDataService"] }, { type: src_app_services_products_data_service__WEBPACK_IMPORTED_MODULE_2__["ProductsDataService"] }]; }, null); })();


/***/ }),

/***/ "myRK":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-product/add-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_services_products_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products-data.service */ "HFSw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");






function AddProductComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProductComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddProductComponent {
    constructor(_fb, _product) {
        this._fb = _fb;
        this._product = _product;
    }
    ngOnInit() {
        if (this._product.adminAddProductToggle) {
            this.form = this._fb.group({
                title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else if (this._product.adminEditProductToggle) {
            this.form = this._fb.group({
                title: [this._product.editedProduct.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                description: [
                    this._product.editedProduct.description,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ],
                price: [this._product.editedProduct.price, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                image: [this._product.editedProduct.image, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
    }
    addProduct() {
        this._product.addProduct(this.form.value).subscribe((res) => {
            this._product.allProducts.push(res);
            this._product.closeBox();
        });
    }
    editProduct() {
        this._product
            .editProduct(this._product.editedProduct._id, this.form.value)
            .subscribe(() => {
            const editedProductIndex = this._product.allProducts.findIndex((product) => product._id === this._product.editedProduct._id);
            this._product.allProducts.splice(editedProductIndex, 1, this.form.value);
            this._product.closeBox();
        });
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_data_service__WEBPACK_IMPORTED_MODULE_2__["ProductsDataService"])); };
AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 22, vars: 7, consts: [[1, "addProductForm", 3, "formGroup"], [1, "closeBtn", 3, "click"], [1, "fas", "fa-times"], [1, "input"], ["type", "text", "placeholder", "Title", "formControlName", "title", 3, "value"], ["type", "text", "placeholder", "Description", "formControlName", "description", 3, "value"], ["type", "number", "placeholder", "price", "formControlName", "price", 3, "value"], ["type", "text", "placeholder", "image URL", "formControlName", "image", 3, "value"], [1, "bottom"], [3, "click", 4, "ngIf"], [3, "click"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_Template_p_click_1_listener() { return ctx._product.closeBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Product Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Product Image (URL)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddProductComponent_button_20_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddProductComponent_button_21_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx._product.editedProduct && ctx._product.editedProduct.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx._product.editedProduct && ctx._product.editedProduct.description || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx._product.editedProduct && ctx._product.editedProduct.price || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx._product.editedProduct && ctx._product.editedProduct.image || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._product.adminAddProductToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._product.adminEditProductToggle);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Freckle+Face&family=Rubik:wght@300;400;500&display=swap\");\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 100%;\n  background: none;\n  border: none;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\ninput[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #bdbdbd;\n  font-family: \"Rubik\", sans-serif;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Rubik\", sans-serif;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: 1px solid dodgerblue;\n}\n.addProductForm[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n  position: absolute;\n  top: 100px;\n  right: 100px;\n  height: 500px;\n  width: 300px;\n  border: 1px solid #c5c5c5;\n  background-color: white;\n  padding: 10px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.addProductForm[_ngcontent-%COMP%]   .closeBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 20px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n.addProductForm[_ngcontent-%COMP%]   .closeBtn[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\n.addProductForm[_ngcontent-%COMP%]   .closeBtn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\n.addProductForm[_ngcontent-%COMP%]   .closeBtn[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\n.addProductForm[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex-direction: column !important;\n}\n.addProductForm[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.addProductForm[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10%;\n  align-self: flex-end;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLCtHQUFBO0FBdUZSO0VBN0JFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQTZCQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ25GRjtBRG9ERTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDbERKO0FEb0RFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNsREo7QURvREU7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FDbERKO0FEMEVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBL0ZjO0FDd0JoQjtBRHlFRTtFQUNFLGdDQWxHWTtFQW1HWixZQUFBO0FDdkVKO0FEeUVFO0VBRUUsNkJBQUE7QUN4RUo7QUFoQ0E7RUFDRSxnQ0FBQTtFRHlFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUF2RUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNtQ0Y7QUE5Q0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VEaURGLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0FGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QUE1REU7RURDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQ0hFLGlDQUFBO0FBa0VKO0FBakVJO0VBQ0UsV0FBQTtBQW1FTjtBQWhFRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RURoQkYsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJDZW1CO0VEZG5CLG1CQUFBO0FDbUZGIiwiZmlsZSI6ImFkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZyZWNrbGUrRmFjZSZmYW1pbHk9UnViaWs6d2dodEAzMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXBcIik7XG5cbiRsb2dvRm9udDogXCJGcmVja2xlIEZhY2VcIiwgY3Vyc2l2ZTtcbiRwYXJhZ3JhcGhGb250OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG5cbkBtaXhpbiByb3dGbGV4KCRwb3NpdGlvbikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRwb3NpdGlvbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuQG1peGluIGNlbnRlckZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5AbWl4aW4gcHJvZHVjdENhcmQge1xuICBmb250LWZhbWlseTogJHBhcmFncmFwaEZvbnQ7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIEBpbmNsdWRlIGNlbnRlckZsZXg7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuICAudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLmRlc2Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XG4gICAgcDpudGgtY2hpbGQoMikge1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB9XG4gICAgcDpudGgtY2hpbGQoMykge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwcHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICB9XG4gIH1cblxuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIyMywgMjIzKTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5AbWl4aW4gZnVsbFNjcmVlbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtaXhpbiBsaW5rcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICAmOmFjdGl2ZSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG59XG5cbkBtaXhpbiByaWdodFNpZGVQb3BVcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgcmlnaHQ6IDEwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTcsIDE5NywgMTk3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbmJ1dHRvbiB7XG4gIEBpbmNsdWRlIGxpbmtzO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODksIDE4OSwgMTg5KTtcbiAgZm9udC1mYW1pbHk6ICRwYXJhZ3JhcGhGb250O1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LWZhbWlseTogJHBhcmFncmFwaEZvbnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIC8vIG91dGxpbmU6IDtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgZG9kZ2VyYmx1ZTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uYWRkUHJvZHVjdEZvcm0ge1xuICBmb250LWZhbWlseTogJHBhcmFncmFwaEZvbnQ7XG4gIEBpbmNsdWRlIHJpZ2h0U2lkZVBvcFVwO1xuICBAaW5jbHVkZSBjZW50ZXJGbGV4O1xuICAuY2xvc2VCdG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICByaWdodDogMjBweDtcbiAgICBAaW5jbHVkZSBsaW5rcztcbiAgfVxuICAuaW5wdXQge1xuICAgIEBpbmNsdWRlIGNlbnRlckZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAgIGxhYmVsIHtcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cbiAgfVxuICAuYm90dG9tIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBAaW5jbHVkZSByb3dGbGV4KGNlbnRlcik7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-product',
                templateUrl: './add-product.component.html',
                styleUrls: ['./add-product.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_products_data_service__WEBPACK_IMPORTED_MODULE_2__["ProductsDataService"] }]; }, null); })();


/***/ }),

/***/ "oM8l":
/*!***********************************************!*\
  !*** ./src/app/services/cart-data.service.ts ***!
  \***********************************************/
/*! exports provided: CartDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDataService", function() { return CartDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-request.service */ "hZfp");



class CartDataService {
    constructor(_request) {
        this._request = _request;
        this.cart = [];
        this.totalPrice = 0;
        this.cartDisplayButton = false;
    }
    toggleCartDisplay() {
        this.cartDisplayButton = !this.cartDisplayButton;
    }
    sendCartToServer() {
        this._request
            .post('checkout/add', {
            date: new Date().toDateString(),
            products: this.cart,
            total: this.totalPrice,
        })
            .subscribe(() => {
            this.cart = [];
            this.totalPrice = 0;
            this.cartDisplayButton = false;
        });
    }
}
CartDataService.ɵfac = function CartDataService_Factory(t) { return new (t || CartDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
CartDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartDataService, factory: CartDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "uKlw":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-card/product-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart-data.service */ "oM8l");



class ProductCardComponent {
    constructor(_cart) {
        this._cart = _cart;
    }
    ngOnInit() { }
    addToCart(product) {
        let item = this._cart.cart.find((cartItem) => cartItem._id == product._id);
        if (this._cart.cart.length === 0 || !item) {
            product.quantity = 1;
            this._cart.cart.push(product);
            this._cart.cartDisplayButton = true;
            this._cart.totalPrice += product.price;
        }
        else {
            this._cart.totalPrice += product.price;
            item.quantity += 1;
        }
    }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__["CartDataService"])); };
ProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, decls: 12, vars: 5, consts: [[1, "card"], [3, "src", "alt"], [1, "desc"], [1, "title"], [1, "btn"], [3, "click"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_10_listener() { return ctx.addToCart(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.product.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.product.price, "");
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Freckle+Face&family=Rubik:wght@300;400;500&display=swap\");\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 100%;\n  background: none;\n  border: none;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  transform: scale(1.1);\n}\ninput[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #bdbdbd;\n  font-family: \"Rubik\", sans-serif;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Rubik\", sans-serif;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: 1px solid dodgerblue;\n}\n.card[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 300px;\n  height: 500px;\n  border: 1px solid #dfdfdf;\n  margin: 10px;\n  padding: 10px;\n}\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  position: relative;\n  border-top: 1px solid #d6d6d6;\n}\n.card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  overflow: scroll;\n}\n.card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3) {\n  position: absolute;\n  top: 0px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwrR0FBQTtBQXVGUjtFQTdCRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUE2QkEsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNuRkY7QURvREU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ2xESjtBRG9ERTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDbERKO0FEb0RFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQ2xESjtBRDBFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQS9GYztBQ3dCaEI7QUR5RUU7RUFDRSxnQ0FsR1k7RUFtR1osWUFBQTtBQ3ZFSjtBRHlFRTtFQUVFLDZCQUFBO0FDeEVKO0FBaENBO0VEbUJFLGdDQWxCYztFQW1CZCxnQkFBQTtFQVRBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBNEJBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FGO0FEekJFO0VBQ0UsYUFBQTtBQzJCSjtBRHpCRTtFQUNFLGdCQUFBO0FDMkJKO0FEekJFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDMkJKO0FEMUJJO0VBQ0UsZ0JBQUE7QUM0Qk47QUQxQkk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDNEJOIiwiZmlsZSI6InByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVja2xlK0ZhY2UmZmFtaWx5PVJ1YmlrOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwXCIpO1xuXG4kbG9nb0ZvbnQ6IFwiRnJlY2tsZSBGYWNlXCIsIGN1cnNpdmU7XG4kcGFyYWdyYXBoRm9udDogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuXG5AbWl4aW4gcm93RmxleCgkcG9zaXRpb24pIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiAkcG9zaXRpb247XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbkBtaXhpbiBjZW50ZXJGbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuQG1peGluIHByb2R1Y3RDYXJkIHtcbiAgZm9udC1mYW1pbHk6ICRwYXJhZ3JhcGhGb250O1xuICBmb250LXdlaWdodDogMTAwO1xuICBAaW5jbHVkZSBjZW50ZXJGbGV4O1xuICBpbWcge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5kZXNjIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xuICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxuICAgIHA6bnRoLWNoaWxkKDMpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCAyMjMsIDIyMyk7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuQG1peGluIGZ1bGxTY3JlZW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWl4aW4gbGlua3Mge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgJjphY3RpdmUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxufVxuXG5AbWl4aW4gcmlnaHRTaWRlUG9wVXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAxMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk3LCAxOTcsIDE5Nyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB6LWluZGV4OiAyO1xufVxuXG5idXR0b24ge1xuICBAaW5jbHVkZSBsaW5rcztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg5LCAxODksIDE4OSk7XG4gIGZvbnQtZmFtaWx5OiAkcGFyYWdyYXBoRm9udDtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1mYW1pbHk6ICRwYXJhZ3JhcGhGb250O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAmOmZvY3VzIHtcbiAgICAvLyBvdXRsaW5lOiA7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGRvZGdlcmJsdWU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcblxuLmNhcmQge1xuICBAaW5jbHVkZSBwcm9kdWN0Q2FyZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-card',
                templateUrl: './product-card.component.html',
                styleUrls: ['./product-card.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__["CartDataService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");





const routes = [
    { path: 'home', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'reports', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'admin', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map