(self["webpackChunkaircraft_data"] = self["webpackChunkaircraft_data"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/header/header.component */ 3841);



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'aircraft-data';
    }
    ngOnInit() {
        this.router.navigate(['']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_views_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["body[_ngcontent-%COMP%] {\r\n    max-width: 90%;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-top: -90vh;\r\n    background: transparent;\r\n}\r\n\r\n\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n    background-image: url('aircraft_bg.jpg');\r\n    filter: blur(10px);\r\n    height: 100%;\r\n    width: 100%;\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDSSx3Q0FBbUQ7SUFDbkQsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IC05MHZoO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIFBhZ2UgYmFja2dyb3VuZCAqL1xyXG4uYmctaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmNcXGFzc2V0c1xcYWlyY3JhZnRfYmcuanBnJyk7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/fire/compat */ 5908);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire/compat/database */ 494);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/google-maps */ 8834);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button-toggle */ 3894);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-charts */ 1803);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ 2340);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/header/header.component */ 3841);
/* harmony import */ var _reuse_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reuse-strategy */ 9408);
/* harmony import */ var _services_data_import_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data-import.service */ 8953);
/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/array-utils */ 2350);
/* harmony import */ var _utils_column_arrays__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/column-arrays */ 6520);
/* harmony import */ var _utils_datetime_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/datetime-utils */ 4123);
/* harmony import */ var _views_chart_chart_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/chart/chart-helper-service */ 3146);
/* harmony import */ var _views_chart_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/chart/chart.component */ 4457);
/* harmony import */ var _views_map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/map/map.component */ 7312);
/* harmony import */ var _views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/not-found/not-found.component */ 8379);
/* harmony import */ var _views_table_table_info_table_info_dialog_table_info_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/table/table-info/table-info-dialog/table-info-dialog.component */ 181);
/* harmony import */ var _views_table_table_info_table_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/table/table-info/table-info.component */ 1030);
/* harmony import */ var _views_table_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/table/table.component */ 2830);
/* harmony import */ var _pipes_meter_to_mile_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/meter-to-mile.pipe */ 9724);
/* harmony import */ var _pipes_full_time_formatter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/full-time-formatter.pipe */ 7777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);





































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        { provide: 'HEADERS', useValue: _utils_column_arrays__WEBPACK_IMPORTED_MODULE_6__.headersAll },
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouteReuseStrategy, useClass: _reuse_strategy__WEBPACK_IMPORTED_MODULE_3__.CustomReuseStrategy },
        _services_data_import_service__WEBPACK_IMPORTED_MODULE_4__.DataImportService,
        _utils_datetime_utils__WEBPACK_IMPORTED_MODULE_7__.DateTimeUtility,
        _utils_array_utils__WEBPACK_IMPORTED_MODULE_5__.ArrayUtility,
        _views_chart_chart_helper_service__WEBPACK_IMPORTED_MODULE_8__.ChartHelperService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_20__.ChartsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeModule,
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_22__.GoogleMapsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientJsonpModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__.MatButtonToggleModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forRoot([
                { path: '', redirectTo: '/table', pathMatch: 'full' },
                { path: 'table', component: _views_table_table_component__WEBPACK_IMPORTED_MODULE_14__.TableComponent },
                { path: 'chart', component: _views_chart_chart_component__WEBPACK_IMPORTED_MODULE_9__.ChartComponent },
                { path: 'map', component: _views_map_map_component__WEBPACK_IMPORTED_MODULE_10__.MapComponent, },
                { path: '**', component: _views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__.NotFoundComponent }
            ], { onSameUrlNavigation: "reload" }),
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_33__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebase),
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_34__.AngularFireDatabaseModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _views_table_table_component__WEBPACK_IMPORTED_MODULE_14__.TableComponent,
        _views_table_table_info_table_info_component__WEBPACK_IMPORTED_MODULE_13__.TableInfoComponent,
        _views_table_table_info_table_info_dialog_table_info_dialog_component__WEBPACK_IMPORTED_MODULE_12__.TableInfoDialog,
        _views_map_map_component__WEBPACK_IMPORTED_MODULE_10__.MapComponent,
        _views_chart_chart_component__WEBPACK_IMPORTED_MODULE_9__.ChartComponent,
        _views_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__.NotFoundComponent,
        _pipes_meter_to_mile_pipe__WEBPACK_IMPORTED_MODULE_15__.MeterToMilePipe,
        _pipes_full_time_formatter_pipe__WEBPACK_IMPORTED_MODULE_16__.FullTimeFormatterPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_20__.ChartsModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeModule,
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_22__.GoogleMapsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientJsonpModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__.MatButtonToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_33__.AngularFireModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_34__.AngularFireDatabaseModule] }); })();


/***/ }),

/***/ 7777:
/*!***************************************************!*\
  !*** ./src/app/pipes/full-time-formatter.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullTimeFormatterPipe": () => (/* binding */ FullTimeFormatterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_utils_datetime_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/datetime-utils */ 4123);


class FullTimeFormatterPipe {
    constructor(converter) {
        this.converter = converter;
    }
    /**Converts incomplete time-value strings to full "hh:mm:ss" strings, including leading zeroes */
    transform(value) {
        const arr = [];
        arr.push(value);
        return this.converter.formatTimeArray(arr, 0, true)[0];
    }
}
FullTimeFormatterPipe.ɵfac = function FullTimeFormatterPipe_Factory(t) { return new (t || FullTimeFormatterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_datetime_utils__WEBPACK_IMPORTED_MODULE_0__.DateTimeUtility, 16)); };
FullTimeFormatterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "fullTimeFormatter", type: FullTimeFormatterPipe, pure: true });


/***/ }),

/***/ 9724:
/*!*********************************************!*\
  !*** ./src/app/pipes/meter-to-mile.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeterToMilePipe": () => (/* binding */ MeterToMilePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class MeterToMilePipe {
    transform(meter) {
        const meterToMile = 0.000621371;
        return (meter * meterToMile);
    }
}
MeterToMilePipe.ɵfac = function MeterToMilePipe_Factory(t) { return new (t || MeterToMilePipe)(); };
MeterToMilePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "meterToMile", type: MeterToMilePipe, pure: true });


/***/ }),

/***/ 9408:
/*!***********************************!*\
  !*** ./src/app/reuse-strategy.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomReuseStrategy": () => (/* binding */ CustomReuseStrategy)
/* harmony export */ });
class CustomReuseStrategy {
    constructor() {
        this.routesToCache = ["table", "chart"];
        this.storedRouteHandles = new Map();
    }
    // Decides if the route should be stored
    shouldDetach(route) {
        return this.routesToCache.indexOf(route.routeConfig.path) > -1;
    }
    //Store the information for the route we're destructing
    store(route, handle) {
        this.storedRouteHandles.set(route.routeConfig.path, handle);
    }
    //Return true if we have a stored route object for the next route
    shouldAttach(route) {
        return this.storedRouteHandles.has(route.routeConfig.path);
    }
    //If we returned true in shouldAttach(), now return the actual route data for restoration
    retrieve(route) {
        return this.storedRouteHandles.get(route.routeConfig.path);
    }
    //Reuse the route if we're going to and from the same route
    shouldReuseRoute(future, curr) {
        return future.routeConfig === curr.routeConfig;
    }
}


/***/ }),

/***/ 5279:
/*!************************************************!*\
  !*** ./src/app/services/chart-data.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartDataService": () => (/* binding */ ChartDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _data_import_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-import.service */ 8953);
/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/array-utils */ 2350);



class ChartDataService {
    constructor(importService, arrayUtils) {
        this.importService = importService;
        this.arrayUtils = arrayUtils;
    }
    /**Takes the initial 2D temperature arrays from data-import service and
     * puts each primary element into a separate array for further processing and later component display.
     * Also initiates data transformation functions (find averages, abnormal sensor readings, etc.) */
    initChartData() {
        this.setCHTData();
        this.setEGTData();
    }
    //Convert array of key-value pairs to array of array of values (populate inner array elements by key)
    //    [ {CHT 1: 100, CHT 2: 200, CHT 3: 300},             [ [100, 101, 102], 
    //      {CHT 1: 101, CHT 2: 201, CHT 3: 301},     -->       [200, 201, 202],
    //      {CHT 1: 102, CHT 2: 202, CHT 3: 302} ]              [300, 301, 302] ] 
    setCHTData() {
        this.chtValuesArray = [];
        this.chtAverageArray = [];
        this.chtAbnormalVals = [];
        const chtRawData = [...this.importService.chtData];
        const cht1ValArray = [];
        const cht2ValArray = [];
        const cht3ValArray = [];
        const cht4ValArray = [];
        const cht5ValArray = [];
        const cht6ValArray = [];
        let cht1Sum = 0, cht2Sum = 0, cht3Sum = 0, cht4Sum = 0, cht5Sum = 0, cht6Sum = 0;
        chtRawData.forEach(obj => {
            for (const [key, value] of Object.entries(obj)) {
                if (key.trim() === "CHT (cyl 1)") {
                    cht1ValArray.push(value);
                    cht1Sum += parseFloat(value);
                }
                if (key.trim() === "CHT (cyl 2)") {
                    cht2ValArray.push(value);
                    cht2Sum += parseFloat(value);
                }
                if (key.trim() === "CHT (cyl 3)") {
                    cht3ValArray.push(value);
                    cht3Sum += parseFloat(value);
                }
                if (key.trim() === "CHT (cyl 4)") {
                    cht4ValArray.push(value);
                    cht4Sum += parseFloat(value);
                }
                if (key.trim() === "CHT (cyl 5)") {
                    cht5ValArray.push(value);
                    cht5Sum += parseFloat(value);
                }
                if (key.trim() === "CHT (cyl 6)") {
                    cht6ValArray.push(value);
                    cht6Sum += parseFloat(value);
                }
            }
            ;
            this.chtAverageArray = this.getAverageTemperature(cht1Sum, cht2Sum, cht3Sum, cht4Sum, cht5Sum, cht6Sum, cht1ValArray.length);
        });
        this.chtValuesArray.push(cht1ValArray);
        this.chtValuesArray.push(cht2ValArray);
        this.chtValuesArray.push(cht3ValArray);
        this.chtValuesArray.push(cht4ValArray);
        this.chtValuesArray.push(cht5ValArray);
        this.chtValuesArray.push(cht6ValArray);
        this.findAbnormalTemperatures(this.chtValuesArray, "cht");
    }
    /** Convert array of key-value pairs to array of array of values (populate inner array elements by key).
     *
     * [ {1: 100, 2: 200, 3: 300},     -->     [ [100, 101, 102],
     *
     *   {1: 101, 2: 201, 3: 301},     -->       [200, 201, 202],
     *
     *   {1: 102, 2: 202, 3: 302} ]    -->       [300, 301, 302] ] */
    setEGTData() {
        this.egtValuesArray = [];
        this.egtAverageArray = [];
        this.egtAbnormalVals = [];
        const egtRawData = [...this.importService.egtData];
        const egt1ValArray = [];
        const egt2ValArray = [];
        const egt3ValArray = [];
        const egt4ValArray = [];
        const egt5ValArray = [];
        const egt6ValArray = [];
        let egt1Sum = 0, egt2Sum = 0, egt3Sum = 0, egt4Sum = 0, egt5Sum = 0, egt6Sum = 0;
        egtRawData.forEach(obj => {
            for (const [key, value] of Object.entries(obj)) {
                if (key.trim() === "EGT (cyl 1)") {
                    egt1ValArray.push(value);
                    egt1Sum += parseFloat(value);
                }
                if (key.trim() === "EGT (cyl 2)") {
                    egt2ValArray.push(value);
                    egt2Sum += parseFloat(value);
                }
                if (key.trim() === "EGT (cyl 3)") {
                    egt3ValArray.push(value);
                    egt3Sum += parseFloat(value);
                }
                if (key.trim() === "EGT (cyl 4)") {
                    egt4ValArray.push(value);
                    egt4Sum += parseFloat(value);
                }
                if (key.trim() === "EGT (cyl 5)") {
                    egt5ValArray.push(value);
                    egt5Sum += parseFloat(value);
                }
                if (key.trim() === "EGT (cyl 6)") {
                    egt6ValArray.push(value);
                    egt6Sum += parseFloat(value);
                }
            }
            ;
            this.egtAverageArray = this.getAverageTemperature(egt1Sum, egt2Sum, egt3Sum, egt4Sum, egt5Sum, egt6Sum, egt1ValArray.length);
        });
        this.egtValuesArray.push(egt1ValArray);
        this.egtValuesArray.push(egt2ValArray);
        this.egtValuesArray.push(egt3ValArray);
        this.egtValuesArray.push(egt4ValArray);
        this.egtValuesArray.push(egt5ValArray);
        this.egtValuesArray.push(egt6ValArray);
        this.findAbnormalTemperatures(this.egtValuesArray, "egt");
    }
    /**
     * @param sampleSize
     * @returns 2D data source for CHT Line chart.
     */
    getCHTVals(sampleSize) {
        return this.reduceChartDataArraySize(this.chtValuesArray, sampleSize);
    }
    /**
     * @param sampleSize
     * @returns 2D data source for EGT Line chart.
     */
    getEGTVals(sampleSize) {
        return this.reduceChartDataArraySize(this.egtValuesArray, sampleSize);
    }
    /**
     * @returns New array of sampleSize length by taking Nth element of input array,
     * where N = (input array length / sampleSize).
     *
     * Ex) input array -> 1000 elements, sampleSize -> 200 elements
     *
     * resultArray = [inputArray[0], inputArray[5], inputArray[10], ..., inputArray[995]]. */
    reduceChartDataArraySize(inputArray, sampleSize) {
        let resultArray = new Array(inputArray.length).fill(0).map(() => new Array(sampleSize));
        if (inputArray[0].length < sampleSize)
            return inputArray;
        //Returned array will skip values from original array based on value of spacing
        const spacing = inputArray[0].length / sampleSize;
        for (let outerElement = 0; outerElement < inputArray.length; outerElement++) {
            let innerElement = -1;
            while (++innerElement < sampleSize) {
                resultArray[outerElement][innerElement] = (inputArray[outerElement][Math.round(innerElement * spacing)]);
            }
        }
        return resultArray;
    }
    /**
     * @returns 1D array of CHT/EGT averages for each sensor/probe in set.
     */
    getAverageTemperature(sensorOneSum, sensorTwoSum, sensorThreeSum, sensorFourSum, sensorFiveSum, sensorSixSum, numRows) {
        return [sensorOneSum / numRows,
            sensorTwoSum / numRows,
            sensorThreeSum / numRows,
            sensorFourSum / numRows,
            sensorFiveSum / numRows,
            sensorSixSum / numRows];
    }
    /**Call on array-utils.ts getAbnormalValues() to determine if there are any
     * high or low (compared to moving average) values in CHT/EGT sensor data and store in member array
     * for use in chart component.   */
    findAbnormalTemperatures(sensorArray, source) {
        for (let i = 0; i < sensorArray.length; i++) {
            if (source.toLowerCase() === "cht") {
                this.chtAbnormalVals.push(this.arrayUtils.getAbnormalValues(sensorArray[i]));
            }
            else if (source.toLowerCase() === "egt") {
                this.egtAbnormalVals.push(this.arrayUtils.getAbnormalValues(sensorArray[i]));
            }
        }
    }
    /**
     * @returns 1D array of count of high/low values for each sensor in CHT/EGT set.
     */
    getAbnormalTemperatures(source) {
        if (source.toLowerCase() === "cht") {
            return this.chtAbnormalVals;
        }
        else if (source.toLowerCase() === "egt") {
            return this.egtAbnormalVals;
        }
    }
}
ChartDataService.ɵfac = function ChartDataService_Factory(t) { return new (t || ChartDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_data_import_service__WEBPACK_IMPORTED_MODULE_0__.DataImportService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_utils_array_utils__WEBPACK_IMPORTED_MODULE_1__.ArrayUtility)); };
ChartDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ChartDataService, factory: ChartDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8953:
/*!*************************************************!*\
  !*** ./src/app/services/data-import.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataImportService": () => (/* binding */ DataImportService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5160);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ 8031);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_column_arrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/column-arrays */ 6520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_utils_datetime_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/datetime-utils */ 4123);





class DataImportService {
    constructor(converter) {
        this.converter = converter;
        this._fileCounter = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
        this.fileCounter$ = this._fileCounter.asObservable();
        this.fileCount = 0;
        //Data for chart component
        this._chtData = [];
        this._egtData = [];
        this._flightTimesArray = [];
        //Date for map component
        this._latitudeData = [];
        this._longitudeData = [];
        //Aircraft header data info
        ///////////////////////////////////////////////////
        this.firstRowDataArray = []; //NOTE : TAKE OUT WHEN MIGRATING TO IQ DATA ///////////////////////////////
        ///////////////////////////////////////////////////
        this.formattedHeaderArray = [];
        this.columnHeaderArray = [];
        this._flightDate = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.flightDate$ = this._flightDate.asObservable();
        this._flightDuration = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.flightDuration$ = this._flightDuration.asObservable();
        this.UTCTimeColumn = [];
    }
    //Convert file data into Observable array for table display
    onFileChange(event, isFromDropZone = false) {
        const target = (event.target);
        const reader = new FileReader();
        // Read raw binary contents from selected file. Will fire reader.onLoad event upon completion
        // readAsBinaryString() has two overloads used here:
        // 1 - Using drop zone: event.dataTransfer
        // 2 - Using file upload button: event.target
        if (isFromDropZone) {
            //Check for invalid drops
            try {
                reader.readAsBinaryString(event.dataTransfer.items[0].getAsFile());
                return this.readFlightDataCSV(reader);
            }
            catch (error) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
            }
        }
        else {
            reader.readAsBinaryString(target.files[0]);
            return this.readFlightDataCSV(reader);
        }
    }
    get latitudeData() {
        return this._latitudeData;
    }
    get longitudeData() {
        return this._longitudeData;
    }
    get flightTimesArray() {
        return this._flightTimesArray;
    }
    get originalRecordCount() {
        return this._originalRecordCount;
    }
    /////////////////////////////////////////////////
    //Save currently displayed table data (with header) as .csv file
    saveFile(table_id, separator = ',') {
        // Select rows from table_id
        const rows = document.querySelectorAll('#' + table_id + ' tr');
        // Structure and fill out data table
        const csv = [];
        for (let i = 0; i < rows.length; i++) {
            const row = [], cols = rows[i].querySelectorAll('td, th');
            for (let j = 0; j < cols.length; j++) {
                // Clean innertext to remove multiple spaces and jumpline (break csv)
                let data = cols[j].textContent.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ');
                // Escape double-quote with double-double-quote
                data = data.replace(/"/g, '""');
                // Push escaped string
                row.push('"' + data + '"');
            }
            csv.push(row.join(separator));
        }
        const csv_string = csv.join('\n');
        //Create file and prompt for open/save
        //NOTE - if there are filters applied to the table, this will only include the filtered data, not the original table data
        const filename = 'Insert_File_Name' + new Date().toLocaleDateString() + '.csv';
        const link = document.createElement('a');
        link.style.display = 'none';
        link.setAttribute('target', '_blank');
        link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    /////////////////////////////////////////////////
    //Get next sequential ASCII character
    //Used in return statement of onFileChange() to iterate over first row of csv data (ex. cell A1, B1, C1, etc.)
    nextChar(index) {
        return String.fromCharCode('A'.charCodeAt(0) + index);
    }
    /////////////////////////////////////////////////
    //Parse out the important data from the csv header row.
    //Example input/output:
    //unit_software_version="14.04" -------> "14.04"
    formatFirstRowData() {
        for (let i = 0; i < this.firstRowDataArray.length; i++) {
            //Take substring value in between quotation marks in string
            if (this.firstRowDataArray[i].indexOf('"') != -1) {
                this.formattedHeaderArray[i] = this.firstRowDataArray[i].match(/"([^']+)"/)[1];
            }
            //Last value does not contain quotes in string, instead take substring value AFTER "="
            else {
                this.formattedHeaderArray[i] = this.firstRowDataArray[i].substring(this.firstRowDataArray[i].indexOf('=') + 1);
            }
        }
    }
    /////////////////////////////////////////////////
    //Send formatted string values back to dialog component
    getFormattedAircraftInfo(index) {
        return this.formattedHeaderArray[index];
    }
    ////////////////////////////////////////////
    //Return 2D array of CHT data
    get chtData() {
        return this._chtData;
    }
    ////////////////////////////////////////////
    //Return 2D array of EGT data
    get egtData() {
        return this._egtData;
    }
    /*
      setHeaderArray(binaryString: string) {
        const workbook: XLSX.WorkBook = XLSX.read(binaryString, { type: 'binary', sheetRows: 3 });
        const sheetName: string = workbook.SheetNames[0];
        const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
        const excelData: string[] = (XLSX.utils.sheet_to_json(worksheet, {range:2, header:1, raw:false, blankrows:false, dateNF:'yyyy-mm-dd'}));
    
        excelData.forEach(obj => {
          for (const [key, value] of Object.entries<string>(obj)) {
            if(key.trim() !== "" && value.trim() !== "") {
              this.columnHeaderArray.push(value.trim());
            }
          }
        });
      } */
    readFlightDataCSV(reader) {
        // reader.onload has 2 functions here:
        // 1 - Parses out specific column data used for map/chart components (e.g. all CHT columns, CHT1-CHT6)
        // 2 - Parses out entire spreadsheet data for use in table component
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            reader.onload = (e) => {
                const binaryStr = e.target.result; // Store result of reader.readAsBinaryString
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_0__.read(binaryStr, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                //Set starting row to first row with "good" data (date !== 01/01/0001 && time !== around midnight)
                const dateTimeArray = (xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(worksheet, { range: "A3:B200", blankrows: false }));
                const rowToStartFrom = (3 + this.checkNumRowsToExclude(dateTimeArray));
                //Get date of flight MM/DD/YY
                //Add 1 in case rowtoStartFrom === 0
                this._flightDate.next(worksheet["A" + (1 + rowToStartFrom).toString()].w);
                //Get latitude and longitude column data for map component
                //Remove whitespace-only cells and copy arrays to filtered arrays
                this._latitudeData = (xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(worksheet, { range: "SS3:SS45000", blankrows: false }));
                this._longitudeData = (xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(worksheet, { range: "SW3:SW45000", blankrows: false }));
                //Get CHT and EGT column data for chart component
                this._chtData = (xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(worksheet, { range: "VA3:VM45000", blankrows: false }));
                this._egtData = (xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(worksheet, { range: "TK3:TU45000", blankrows: false }));
                //Get time values from first and last rows to determine duration of flight
                this.UTCTimeColumn = this.converter.formatTimeArray(xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(worksheet, { range: "B3:B45000", blankrows: false }), rowToStartFrom - 3);
                this.setFlightDuration(this.UTCTimeColumn);
                // Format the raw data string into 2-d array starting from cell A3. Dates formatted. Headers taken from column-arrays.ts
                const excelData = (xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(worksheet, { range: rowToStartFrom, header: _utils_column_arrays__WEBPACK_IMPORTED_MODULE_1__.headersAll.map(col => col.name), raw: false, dateNF: 'yyyy-mm-dd' }));
                observer.next(excelData);
                //Store number of data rows from spreadsheet
                //// Used by chart component for determining flight length
                this._originalRecordCount = excelData.length;
                this.fileCount++;
                this._fileCounter.next(this.fileCount);
                observer.complete();
            };
        });
    }
    /**
     * Takes first and last valid entries for "UTC Time" and pushes to 2-element array. Used for calculating overall flight/log duration
     */
    setFlightDuration(flightTimesArray) {
        this._flightTimesArray = [];
        this._flightTimesArray.push(flightTimesArray[0]);
        this._flightTimesArray.push(flightTimesArray.slice(-1)[0]);
        this._flightDuration.next(this.converter.getTimeDiff(this._flightTimesArray));
    }
    /**
     *
     * @returns number of rows with "bad"/unsynchronized data (Date = 01/01/0001 or Time starting from midnight)
     */
    checkNumRowsToExclude(dateTimeArray) {
        let numRowsToExclude = 0;
        dateTimeArray.forEach(obj => {
            for (const [key, value] of Object.entries(obj)) {
                if (key.trim() === "UTC Date" && value === 36892) {
                    numRowsToExclude++;
                    break;
                }
                if (key.trim() === "UTC Time" && value.trim().startsWith("00:00")) {
                    numRowsToExclude++;
                }
            }
        });
        return numRowsToExclude;
    }
}
DataImportService.ɵfac = function DataImportService_Factory(t) { return new (t || DataImportService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_utils_datetime_utils__WEBPACK_IMPORTED_MODULE_2__.DateTimeUtility)); };
DataImportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DataImportService, factory: DataImportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5059:
/*!**********************************************!*\
  !*** ./src/app/services/map-data.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapDataService": () => (/* binding */ MapDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_data_import_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data-import.service */ 8953);
/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/array-utils */ 2350);




class MapDataService {
    constructor(importService, arrayUtility) {
        this.importService = importService;
        this.arrayUtility = arrayUtility;
        this.flightPath = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._flightDistance = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.flightDistance$ = this._flightDistance.asObservable();
    }
    /** Gets lat/long and other coordinate data from the import service. */
    initMapData() {
        this.latitudeArray = this.arrayUtility.getValidValues(this.importService.latitudeData);
        this.longitudeArray = this.arrayUtility.getValidValues(this.importService.longitudeData);
        this.setMapBoundCoordinates();
        this.convertToFloatType();
        this.convertToLatLng();
    }
    /** Determine center point of map display by taking AVG(SUM(min value + max value)) for latitude and longitude. */
    getCenterCoordinate() {
        return {
            lat: (this.minLat + this.maxLat) / 2.0,
            lng: (this.minLong + this.maxLong) / 2.0
        };
    }
    getMinLatitude() {
        return this.minLat;
    }
    getMaxLatitude() {
        return this.maxLat;
    }
    getMinLongitude() {
        return this.minLong;
    }
    getMaxLongitude() {
        return this.maxLong;
    }
    /** Determine minimum value of coordinate array and set value of class member minLat or minLong depending on latOrLong arg.
     *
     * Used for setting embedded Google map bounds/edges. */
    setMinCoordinate(coordArray, latOrLong) {
        switch (latOrLong) {
            case 'lat':
                this.minLat = Math.min.apply(null, coordArray);
                break;
            case 'long':
                this.minLong = Math.min.apply(null, coordArray);
                break;
        }
    }
    /** Determine maximum value of coordinate array and set value of class member maxLat or maxLong depending on latOrLong arg.
     *
     * Used for setting embedded Google map bounds/edges. */
    setMaxCoordinate(coordArray, latOrLong) {
        switch (latOrLong) {
            case 'lat':
                this.maxLat = Math.max.apply(null, coordArray);
                break;
            case 'long':
                this.maxLong = Math.max.apply(null, coordArray);
                break;
        }
    }
    /** Set four corners of map using the min and max values for lat and long.
     *
    NOTE: GoogleMap will automatically add padding to these values. */
    setMapBoundCoordinates() {
        this.setMinCoordinate(this.latitudeArray, 'lat');
        this.setMinCoordinate(this.longitudeArray, 'long');
        this.setMaxCoordinate(this.latitudeArray, 'lat');
        this.setMaxCoordinate(this.longitudeArray, 'long');
    }
    /** Convert coordinate data type from string into float (required for google.maps.polyline). */
    convertToFloatType() {
        this.flightPath.next(this.latitudeArray.map((lat, index) => ({ lat: parseFloat(lat), lng: parseFloat(this.longitudeArray[index]) })));
    }
    /**Convert lat and long arrays to a combined google.maps.LatLng array
     * used for computing overall flight distance
     */
    convertToLatLng() {
        const latLngArray = [];
        for (let i = 0; i < this.latitudeArray.length; i++) {
            latLngArray.push(new google.maps.LatLng(parseFloat(this.latitudeArray[i]), parseFloat(this.longitudeArray[i])));
        }
        this.calcFlightDistance(latLngArray);
    }
    calcFlightDistance(coordArray) {
        this._flightDistance.next(google.maps.geometry.spherical.computeLength(coordArray));
    }
}
MapDataService.ɵfac = function MapDataService_Factory(t) { return new (t || MapDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_data_import_service__WEBPACK_IMPORTED_MODULE_0__.DataImportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_utils_array_utils__WEBPACK_IMPORTED_MODULE_1__.ArrayUtility)); };
MapDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MapDataService, factory: MapDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1553:
/*!************************************************!*\
  !*** ./src/app/services/table-data.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableDataService": () => (/* binding */ TableDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _map_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-data.service */ 5059);
/* harmony import */ var _chart_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-data.service */ 5279);




class TableDataService {
    constructor(mapDataService, chartDataService) {
        this.mapDataService = mapDataService;
        this.chartDataService = chartDataService;
        this._isTableLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.isTableLoaded$ = this._isTableLoaded.asObservable();
    }
    toggleIsTableLoaded(isTableLoaded) {
        this._isTableLoaded.next(isTableLoaded);
        this.mapDataService.initMapData();
    }
}
TableDataService.ɵfac = function TableDataService_Factory(t) { return new (t || TableDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_map_data_service__WEBPACK_IMPORTED_MODULE_0__.MapDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_chart_data_service__WEBPACK_IMPORTED_MODULE_1__.ChartDataService)); };
TableDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TableDataService, factory: TableDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2350:
/*!**************************************!*\
  !*** ./src/app/utils/array-utils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayUtility": () => (/* binding */ ArrayUtility)
/* harmony export */ });
class ArrayUtility {
    /** Removes empty ("") values from string array. */
    getValidValues(originalArray) {
        let trimmedArray = [];
        originalArray.forEach(obj => {
            for (const [key, value] of Object.entries(obj)) {
                if (value.toString().trim() !== "" && parseInt(value) !== 0) {
                    trimmedArray.push(value);
                }
            }
        });
        return trimmedArray;
    }
    /**
     * @returns a numeric count of all values in a 1D array that are >= 50%
     * higher/lower than the moving average of the nearest 10-20 elements. */
    getAbnormalValues(temperatureArray) {
        let convertedArray = [];
        convertedArray = this.convertToNumArray(temperatureArray);
        let countAbnormalValues = 0;
        for (let currElement = 0; currElement < convertedArray.length; currElement++) {
            let sum = convertedArray[currElement];
            //Find average of first 10 elements
            if (currElement < 10) {
                let avg = 0;
                let numIterations = 1;
                for (let j = 0; j < (convertedArray.length - 1 || 10); j++) {
                    sum += convertedArray[j + 1];
                    ++numIterations;
                }
                avg = sum / numIterations;
                if (convertedArray[currElement] > (1.5 * avg) || convertedArray[currElement] < (0.5 * avg)) {
                    countAbnormalValues++;
                }
            }
            //Find moving average of inner elements
            if ((convertedArray.length > 10) && (currElement >= 10 && currElement < convertedArray.length - 10)) {
                let avg = 0;
                let numIterations = 0;
                for (let j = 0; j < 10; j++) {
                    //sum += convertedArray[currElement + j + 1] + convertedArray[currElement- Math.abs(j-currElement)];
                    sum += convertedArray[currElement + j + 1] + convertedArray[currElement - j - 1];
                    numIterations++;
                }
                avg = sum / ((numIterations * 2) + 1);
                if (convertedArray[currElement] > (1.5 * avg) || convertedArray[currElement] < (0.5 * avg)) {
                    countAbnormalValues++;
                }
            }
            //Find moving average of last 10 elements
            if ((convertedArray.length > 10) && (currElement >= convertedArray.length - 10)) {
                let avg = 0;
                let numIterations = 0;
                for (let j = convertedArray.length - 1; j > convertedArray.length - 11; j--) {
                    sum += convertedArray[j] + convertedArray[currElement - (j - currElement)];
                    numIterations++;
                }
                avg = sum / ((numIterations * 2) + 1);
                if (convertedArray[0][currElement] > (1.5 * avg) || convertedArray[0][currElement] < (0.5 * avg)) {
                    countAbnormalValues++;
                }
            }
            sum = 0;
        }
        return countAbnormalValues;
    }
    /**Converts a string array to a number array. */
    convertToNumArray(originalArray) {
        const numArray = [];
        for (let element of originalArray) {
            //Verify original array is parse-able
            if (isNaN(parseFloat(element))) {
                console.error("convertToNumArray() error: Failed to correctly convert string[] into number[] - please check source data.");
                return;
            }
            numArray.push(parseFloat(element));
        }
        return numArray;
    }
}


/***/ }),

/***/ 6520:
/*!****************************************!*\
  !*** ./src/app/utils/column-arrays.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headersAll": () => (/* binding */ headersAll),
/* harmony export */   "engineHeaders": () => (/* binding */ engineHeaders),
/* harmony export */   "avionicsHeaders": () => (/* binding */ avionicsHeaders),
/* harmony export */   "egtHeaders": () => (/* binding */ egtHeaders),
/* harmony export */   "chtHeaders": () => (/* binding */ chtHeaders)
/* harmony export */ });
//Master list
const headersAll = [
    { name: "UTC Date", unit: "mm/dd/yy", hide: true, category: "timeinfo" },
    { name: "UTC Time", unit: "hh:mm:ss", hide: true, category: "timeinfo" },
    { name: "UTC Offset", unit: "hh:mm", hide: true, category: "timeinfo" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Selected Heading", unit: "Deg", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Selected Altitude", unit: "ft", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "IAS Submode (FLC Vertical Mode)", unit: "kt", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "COM1 ACTV + 100 MHZ", unit: "Mhz", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "COM2 ACTV + 100 MHZ", unit: "Mhz", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "NAV1 ACTV + 100 MHZ", unit: "MHz", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "NAV2 ACTV + 100 MHZ", unit: "MHz", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "OAT (ADC1)", unit: "°C", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "OAT (ADC2)", unit: "°C", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Barometric Correction (Garmin)", unit: "in. Hg", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "PIT Speed", unit: "RPM", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "PIT Torque", unit: "in-lb", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ROL Speed", unit: "RPM", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ROL Torque", unit: "in-lb", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "YAW Speed", unit: "RPM", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "YAW Torque", unit: "in-lb", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ACT WPT Char 1 & 2", unit: "ASCII", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ACT WPT Char 3 & 4", unit: "ASCII", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ACT WPT Char 5 & 6 ", unit: "ASCII", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ACT WPT Char 7 & 8", unit: "ASCII", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "CAPS handle pulled", unit: "BIN", hide: true, category: "bool" },
    { name: "CAPS rocket deployed", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Flaps 0%", unit: "BIN", hide: true, category: "bool" },
    { name: "Flaps 50%", unit: "BIN", hide: true, category: "bool" },
    { name: "Flaps 100%", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "IPS NORMAL", unit: "BIN", hide: true, category: "bool" },
    { name: "IPS HIGH", unit: "BIN", hide: true, category: "bool" },
    { name: "IPS MAX", unit: "BIN", hide: true, category: "bool" },
    { name: "IPS BACKUP MODE", unit: "BIN", hide: true, category: "bool" },
    { name: "IPS TKS Tank LEFT", unit: "BIN", hide: true, category: "bool" },
    { name: "IPS TKS Tank RIGHT", unit: "BIN", hide: true, category: "bool" },
    { name: "IPS TKS Tank AUTO", unit: "BIN", hide: true, category: "bool" },
    { name: "IPS High Pressure", unit: "BIN", hide: true, category: "bool" },
    { name: "IPS Low Pressure", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "CO Detected", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "TAS Traffic Advisory Active", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "TAWS or Terrain Alert", unit: "BIN", hide: true, category: "bool" },
    { name: "AIR(1)-GND(0) Status", unit: "BIN", hide: true, category: "bool" },
    { name: "Oxygen Status ON", unit: "BIN", hide: true, category: "bool" },
    { name: "Stall Warning ACTIVE", unit: "BIN", hide: true, category: "bool" },
    { name: "Pitot Heat ON", unit: "BIN", hide: true, category: "bool" },
    { name: "Pitot Heat - No Current", unit: "BIN", hide: true, category: "bool" },
    { name: "Parking Brake Set", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Selected Sensor - AHRS1", unit: "BIN", hide: true, category: "bool" },
    { name: "Selected Sensor - AHRS2", unit: "BIN", hide: true, category: "bool" },
    { name: "Selected Sensor - AHRS STBY", unit: "BIN", hide: true, category: "bool" },
    { name: "Selected Sensor - ADC1", unit: "BIN", hide: true, category: "bool" },
    { name: "Selected Sensor - ADC2", unit: "BIN", hide: true, category: "bool" },
    { name: "Selected Sensor - ADC STBY", unit: "BIN", hide: true, category: "bool" },
    { name: "Selected NAV Source - GPS", unit: "BIN", hide: true, category: "bool" },
    { name: "Selected NAV Source - NAV1 (VOR)", unit: "BIN", hide: true, category: "bool" },
    { name: "Selected NAV Source - NAV2 (VOR)", unit: "BIN", hide: true, category: "bool" },
    { name: "Selected NAV Source - NAV1 (LOC)", unit: "BIN", hide: true, category: "bool" },
    { name: "Selected NAV Source - NAV2 (LOC)", unit: "BIN", hide: true, category: "bool" },
    { name: "Selected NAV Source - Invalid", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Gross Weight", unit: "Lbs", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Altitude (GIA1)", unit: "ft", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Altitude (GIA2)", unit: "ft", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "CDI Deviation (% full scale)", unit: "%", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Selected Course", unit: "Deg", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Battery 1 Current", unit: "A", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Selected Vertical Speed", unit: "FPM", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Heading/Yaw Rate (AHRS1)", unit: "deg/s", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Heading/Yaw Rate (AHRS2)", unit: "deg/s", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Hypoxia Timer", unit: "Minutes", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GARMIN HOBBS Time", unit: "Hours", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GARMIN FLIGHT Time", unit: "Hours", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GARMIN Engine Tach Time", unit: "Hours", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "AOA Temp Monitor", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Desired Track (DTK)", unit: "Deg", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Brake Temperature (Left)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Brake Temperature (Right)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS X-Track Distance (XTK)", unit: "N.M.", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Vertical Deviation (ft)", unit: "ft, GPS Only", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "VDI Deviation (% full scale)", unit: "%", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Main Bus 1 Voltage", unit: "V", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Main Bus 2 Voltage", unit: "V", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Essential Bus Voltage", unit: "V", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Alternator 1 Current", unit: "A", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Alternator 2 Current", unit: "A", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Percent Power", unit: "%", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Engine RPM", unit: "RPM", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Fuel Flow (GPH)", unit: "GPH", hide: true, category: "fuel" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Oxygen Pressure", unit: "PSIG", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Density Altitude (ADC1)", unit: "ft", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Density Altitude (ADC2)", unit: "ft", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Vup (GIA1)", unit: "kt", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Vup (GIA2)", unit: "kt", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Vnorth (GIA1)", unit: "kt", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Vnorth (GIA2)", unit: "kt", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Status (GIA1)", unit: "ASCII", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Status (GIA2)", unit: "ASCII", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Veast (GIA1)", unit: "kt", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Veast (GIA2)", unit: "kt", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GAGL", unit: "ft", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Pressure Altitude (ADC1)", unit: "ft", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Pressure Altitude (ADC2)", unit: "ft", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "MACH (ADC1)", unit: "Mach", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "MACH (ADC2)", unit: "Mach", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Indicated Airspeed (ADC1)", unit: "kt", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Indicated Airspeed (ADC2)", unit: "kt", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ICD VER Char 7 & 8", unit: "ASCII", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ICD VER Char 5 & 6", unit: "ASCII", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ICD VER Char 3 & 4", unit: "ASCII", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ICD VER Char 1 & 2", unit: "ASCII", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "True Airspeed (ADC1)", unit: "kt", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "True Airspeed (ADC2)", unit: "kt", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "TAT (ADC1)", unit: "°C", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "TAT (ADC2)", unit: "°C", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Vertical Speed (ADC1)", unit: "fpm", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Vertical Speed (ADC2)", unit: "fpm", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Impact Pressure (ADC1)", unit: "mB", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Impact Pressure (ADC2)", unit: "mB", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Static Pressure (ADC1)", unit: "in-Hg", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Static Pressure (ADC2)", unit: "in-Hg", hide: true, category: "adc" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ANTI ICE CTL", unit: "BIN", hide: true, category: "bool" },
    { name: "ANTI ICE QTY - UNKNOWN", unit: "BIN", hide: true, category: "bool" },
    { name: "ANTI ICE QTY - LOW", unit: "BIN", hide: true, category: "bool" },
    { name: "AOA OVERHEAT", unit: "BIN", hide: true, category: "bool" },
    { name: "AUTO DESCENT - 60 SEC TO 14K", unit: "BIN", hide: true, category: "bool" },
    { name: "AUTO DESCENT - TO 14K", unit: "BIN", hide: true, category: "bool" },
    { name: "AUTO DESCENT - TO 12.5K", unit: "BIN", hide: true, category: "bool" },
    { name: "AUTO DESCENT - COMPLETE", unit: "BIN", hide: true, category: "bool" },
    { name: "BRAKE TEMP", unit: "BIN", hide: true, category: "bool" },
    { name: "CHT", unit: "BIN", hide: true, category: "bool" },
    { name: "CO LVL", unit: "BIN", hide: true, category: "bool" },
    { name: "ESS BUS - IN AIR", unit: "BIN", hide: true, category: "bool" },
    { name: "FUEL FLOW", unit: "BIN", hide: true, category: "bool" },
    { name: "FUEL IMBALANCE", unit: "BIN", hide: true, category: "bool" },
    { name: "FUEL LOW TOTAL", unit: "BIN", hide: true, category: "bool" },
    { name: "M BUS 1", unit: "BIN", hide: true, category: "bool" },
    { name: "M BUS 2", unit: "BIN", hide: true, category: "bool" },
    { name: "MAN PRESSURE >38\"", unit: "BIN", hide: true, category: "bool" },
    { name: "ESS BUS - ON GND", unit: "BIN", hide: true, category: "bool" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "OIL PRESSURE - GND", unit: "BIN", hide: true, category: "bool" },
    { name: "OIL TEMP", unit: "BIN", hide: true, category: "bool" },
    { name: "OXYGEN FAULT", unit: "BIN", hide: true, category: "bool" },
    { name: "OXYGEN QTY", unit: "BIN", hide: true, category: "bool" },
    { name: "RPM", unit: "BIN", hide: true, category: "bool" },
    { name: "SPIN SPIN SPIN", unit: "BIN", hide: true, category: "bool" },
    { name: "STALL - TONE", unit: "BIN", hide: true, category: "bool" },
    { name: "START ENGAGED", unit: "BIN", hide: true, category: "bool" },
    { name: "TIT", unit: "BIN", hide: true, category: "bool" },
    { name: "UNDERSPEED PROTECTION ACTIVE", unit: "BIN", hide: true, category: "bool" },
    { name: "FLAPS ICE", unit: "BIN", hide: true, category: "bool" },
    { name: "MAN PRESSURE >37.5\"", unit: "BIN", hide: true, category: "bool" },
    { name: "OIL PRESSURE - AIR", unit: "BIN", hide: true, category: "bool" },
    { name: "STALL - VOICE", unit: "BIN", hide: true, category: "bool" },
    { name: "STALL WARN FAIL", unit: "BIN", hide: true, category: "bool" },
    { name: "OXYGEN RQD (>12.5K/40 MIN)", unit: "BIN", hide: true, category: "bool" },
    { name: "OXYGEN RQD (>14K/5MIN)", unit: "BIN", hide: true, category: "bool" },
    { name: "FUEL LOW LEFT", unit: "BIN", hide: true, category: "bool" },
    { name: "FUEL LOW RIGHT", unit: "BIN", hide: true, category: "bool" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ALT 1 (ON-GND)", unit: "BIN", hide: true, category: "bool" },
    { name: "ALT 2 (ON-GND)", unit: "BIN", hide: true, category: "bool" },
    { name: "ALT AIR  OPEN", unit: "BIN", hide: true, category: "bool" },
    { name: "ANTI ICE HEAT", unit: "BIN", hide: true, category: "bool" },
    { name: "ANTI ICE LEVEL (LT)", unit: "BIN", hide: true, category: "bool" },
    { name: "ANTI ICE PRESS - LOW (NORMAL)", unit: "BIN", hide: true, category: "bool" },
    { name: "ANTI ICE PRESS - HI", unit: "BIN", hide: true, category: "bool" },
    { name: "ANTI ICE QTY - IMBALANCE", unit: "BIN", hide: true, category: "bool" },
    { name: "ANTI ICE QTY - LOW", unit: "BIN", hide: true, category: "duplicate" },
    { name: "ANTI ICE SPEED - LOW", unit: "BIN", hide: true, category: "bool" },
    { name: "ANTI ICE SPEED - HI", unit: "BIN", hide: true, category: "bool" },
    { name: "AP MISCOMPARE", unit: "BIN", hide: true, category: "bool" },
    { name: "AP/PFD DIF ADC", unit: "BIN", hide: true, category: "bool" },
    { name: "AP/PFD DIF AHRS", unit: "BIN", hide: true, category: "bool" },
    { name: "AVIONICS OFF", unit: "BIN", hide: true, category: "bool" },
    { name: "BATT 1 (IN-AIR)", unit: "BIN", hide: true, category: "bool" },
    { name: "BRAKE TEMP", unit: "BIN", hide: true, category: "duplicate" },
    { name: "CHT", unit: "BIN", hide: true, category: "duplicate" },
    { name: "ANTI ICE PRESS - LOW (MAX, HIGH)", unit: "BIN", hide: true, category: "bool" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "FLAP OVERSPEED", unit: "BIN", hide: true, category: "bool" },
    { name: "TAKEOFF FLAPS", unit: "BIN", hide: true, category: "bool" },
    { name: "FUEL IMBALANCE", unit: "BIN", hide: true, category: "bool" },
    { name: "FUEL LOW TOTAL", unit: "BIN", hide: true, category: "bool" },
    { name: "HYPOXIA ALERT", unit: "BIN", hide: true, category: "bool" },
    { name: "M BUS 1 (ON-GND)", unit: "BIN", hide: true, category: "bool" },
    { name: "M BUS 2 (ON-GND)", unit: "BIN", hide: true, category: "bool" },
    { name: "MAN PRESSURE > 37\"", unit: "BIN", hide: true, category: "bool" },
    { name: "NO ADC MODES", unit: "BIN", hide: true, category: "bool" },
    { name: "NO VERT MODES", unit: "BIN", hide: true, category: "bool" },
    { name: "OIL PRESSURE (IN-AIR)", unit: "BIN", hide: true, category: "bool" },
    { name: "OIL TEMP", unit: "BIN", hide: true, category: "bool" },
    { name: "OXYGEN QTY", unit: "BIN", hide: true, category: "bool" },
    { name: "OXYGEN RQD (>12.5K/30MIN)", unit: "BIN", hide: true, category: "bool" },
    { name: "PARK BRAKE (RPM>2K)", unit: "BIN", hide: true, category: "bool" },
    { name: "PITOT HEAT FAIL", unit: "BIN", hide: true, category: "bool" },
    { name: "PITOT HEAT REQD (IN-AIR)", unit: "BIN", hide: true, category: "bool" },
    { name: "START ENGAGED", unit: "BIN", hide: true, category: "bool" },
    { name: "M BUS 1 (IN-AIR)", unit: "BIN", hide: true, category: "bool" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "M BUS 2 (IN-AIR)", unit: "BIN", hide: true, category: "bool" },
    { name: "MAN PRESSURE > 36.5\"", unit: "BIN", hide: true, category: "bool" },
    { name: "OIL PRESSURE (ON-GND)", unit: "BIN", hide: true, category: "bool" },
    { name: "PARK BRAKE (RPM< 2K)", unit: "BIN", hide: true, category: "bool" },
    { name: "PITOT HEAT REQD (ON-GND)", unit: "BIN", hide: true, category: "bool" },
    { name: "ALT 1 (IN-AIR)", unit: "BIN", hide: true, category: "bool" },
    { name: "ALT 2 (IN-AIR)", unit: "BIN", hide: true, category: "bool" },
    { name: "ANTI ICE LEVEL (RT)", unit: "BIN", hide: true, category: "bool" },
    { name: "BATT 1 (ON-GND)", unit: "BIN", hide: true, category: "bool" },
    { name: "ANTI ICE TEMP", unit: "BIN", hide: true, category: "bool" },
    { name: "AOA/STALL WARN", unit: "BIN", hide: true, category: "bool" },
    { name: "OXYGEN RQD (>14K/5MIN)", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Normalized AOA", unit: "-", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Fuel Remaining", unit: "Gal", hide: true, category: "fuel" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "FLT ID Char 1-4", unit: "Digit", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "FLT ID Char 5-8", unit: "Digit", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Fuel Used (Totalizer)", unit: "Gal, calculated", hide: true, category: "fuel" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Initial Usable Fuel", unit: "Gal", hide: true, category: "fuel" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Anti Ice Tank Quantity (Left)", unit: "Gal", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Anti Ice Tank Quantity (Right)", unit: "Gal", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Fuel Quantity (Left)", unit: "Gal, sensed", hide: true, category: "fuel" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Fuel Quantity (Right)", unit: "Gal, sensed", hide: true, category: "fuel" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Tail Num Char 1 & 2", unit: "ASCII", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Tail Num Char 3 & 4", unit: "ASCII", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Tail Num Char 5 & 6", unit: "ASCII", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Tail Num Char 7 & 8", unit: "ASCII", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Coupled Lateral Mode Code - GIA1", unit: "Code", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Coupled Lateral Mode Code - GIA2", unit: "Code", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Coupled Vertical  Mode Code - GIA1", unit: "Code", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Coupled Vertical  Mode Code - GIA2", unit: "Code", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Armed Lateral Mode Code - GIA1", unit: "Code", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Armed Lateral Mode Code - GIA2", unit: "Code", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Armed Primary Vertical  Mode Code - GIA1", unit: "Code", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Armed Primary Vertical  Mode Code - GIA2", unit: "Code", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Armed Secondary Vertical  Mode Code - GIA1", unit: "Code", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Armed Secondary Vertical  Mode Code - GIA2", unit: "Code", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Low Thrust Throttle ESP Engaged", unit: "BIN", hide: true, category: "bool" },
    { name: "High Thrust Throttle ESP Engaged", unit: "BIN", hide: true, category: "bool" },
    { name: "Throttle ESP Low Enabled", unit: "BIN", hide: true, category: "bool" },
    { name: "Throttle ESP High Enabled", unit: "BIN", hide: true, category: "bool" },
    { name: "Throttle ESP Failed", unit: "BIN", hide: true, category: "bool" },
    { name: "Hi Mach ESP Engaged", unit: "BIN", hide: true, category: "bool" },
    { name: "ESP Enabled by Pilot", unit: "BIN", hide: true, category: "bool" },
    { name: "AOA Stall ESP mode failed", unit: "BIN", hide: true, category: "bool" },
    { name: "High IAS ESP Engaged", unit: "BIN", hide: true, category: "bool" },
    { name: "Stall Warning ESP Engaged", unit: "BIN", hide: true, category: "bool" },
    { name: "AOA ESP Engaged", unit: "BIN", hide: true, category: "bool" },
    { name: "High Pitch ESP Engaged", unit: "BIN", hide: true, category: "bool" },
    { name: "Low Pitch ESP Engaged", unit: "BIN", hide: true, category: "bool" },
    { name: "Roll ESP Engaged in Positive direction", unit: "BIN", hide: true, category: "bool" },
    { name: "Roll ESP Engaged in Negative direction", unit: "BIN", hide: true, category: "bool" },
    { name: "ESP Pitch mode Absolute", unit: "BIN", hide: true, category: "bool" },
    { name: "ESP Enabled", unit: "BIN", hide: true, category: "bool" },
    { name: "ESP Failed", unit: "BIN", hide: true, category: "bool" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Low Thrust Throttle ESP Engaged", unit: "BIN", hide: true, category: "duplicate" },
    { name: "High Thrust Throttle ESP Engaged", unit: "BIN", hide: true, category: "duplicate" },
    { name: "Throttle ESP Low Enabled", unit: "BIN", hide: true, category: "duplicate" },
    { name: "Throttle ESP High Enabled", unit: "BIN", hide: true, category: "duplicate" },
    { name: "Throttle ESP Failed", unit: "BIN", hide: true, category: "duplicate" },
    { name: "Hi Mach ESP Engaged", unit: "BIN", hide: true, category: "duplicate" },
    { name: "ESP Enabled by Pilot", unit: "BIN", hide: true, category: "duplicate" },
    { name: "AOA Stall ESP mode failed", unit: "BIN", hide: true, category: "duplicate" },
    { name: "High IAS ESP Engaged", unit: "BIN", hide: true, category: "duplicate" },
    { name: "Stall Warning ESP Engaged", unit: "BIN", hide: true, category: "duplicate" },
    { name: "AOA ESP Engaged", unit: "BIN", hide: true, category: "duplicate" },
    { name: "High Pitch ESP Engaged", unit: "BIN", hide: true, category: "duplicate" },
    { name: "Low Pitch ESP Engaged", unit: "BIN", hide: true, category: "duplicate" },
    { name: "Roll ESP Engaged in Positive direction", unit: "BIN", hide: true, category: "duplicate" },
    { name: "Roll ESP Engaged in Negative direction", unit: "BIN", hide: true, category: "duplicate" },
    { name: "ESP Pitch mode Absolute", unit: "BIN", hide: true, category: "duplicate" },
    { name: "ESP Enabled", unit: "BIN", hide: true, category: "duplicate" },
    { name: "ESP Failed", unit: "BIN", hide: true, category: "duplicate" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "AFCS - AP/FD Engaged", unit: "BIN", hide: true, category: "bool" },
    { name: "Yaw Damper On", unit: "BIN", hide: true, category: "bool" },
    { name: "On-side FD Active", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved for Pilot/Copilot Pitch Trim Up", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved for Pilot/Copilot Pitch Trim Down", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "AFCS - AP/FD Engaged", unit: "BIN", hide: true, category: "duplicate" },
    { name: "Yaw Damper On", unit: "BIN", hide: true, category: "duplicate" },
    { name: "On-side FD Active", unit: "BIN", hide: true, category: "duplicate" },
    { name: "Reserved for Pilot/Copilot Pitch Trim Up", unit: "BIN", hide: true, category: "duplicate" },
    { name: "Reserved for Pilot/Copilot Pitch Trim Down", unit: "BIN", hide: true, category: "duplicate" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ALTITUDE SEL - CLB", unit: "BIN", hide: true, category: "bool" },
    { name: "ALTITUDE SEL - DESC", unit: "BIN", hide: true, category: "bool" },
    { name: "AOA FAIL", unit: "BIN", hide: true, category: "bool" },
    { name: "ARE YOU ALERT", unit: "BIN", hide: true, category: "bool" },
    { name: "COURSE SEL", unit: "BIN", hide: true, category: "bool" },
    { name: "FUEL IMBALANCE", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "OXYGEN LEFT ON", unit: "BIN", hide: true, category: "bool" },
    { name: "OXYGEN QTY", unit: "BIN", hide: true, category: "bool" },
    { name: "PUMP BACKUP", unit: "BIN", hide: true, category: "bool" },
    { name: "HDG MODE", unit: "BIN", hide: true, category: "bool" },
    { name: "ROL MODE", unit: "BIN", hide: true, category: "bool" },
    { name: "FLAPS CLIMB", unit: "BIN", hide: true, category: "bool" },
    { name: "VNAV NOT ARMED", unit: "BIN", hide: true, category: "bool" },
    { name: "VNAV ALT SEL", unit: "BIN", hide: true, category: "bool" },
    { name: "CHECK OXYGEN (ON/30 min)", unit: "BIN", hide: true, category: "bool" },
    { name: "CHECK OXYGEN (>10K/3 sec)", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ALT MISCOMP", unit: "BIN", hide: true, category: "bool" },
    { name: "IAS MISCOMP", unit: "BIN", hide: true, category: "bool" },
    { name: "HDG MISCOMP", unit: "BIN", hide: true, category: "bool" },
    { name: "PIT MISCOMP", unit: "BIN", hide: true, category: "bool" },
    { name: "ROL MISCOMP", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "ALT NO COMP", unit: "BIN", hide: true, category: "bool" },
    { name: "IAS NO COMP", unit: "BIN", hide: true, category: "bool" },
    { name: "HDG NO COMP", unit: "BIN", hide: true, category: "bool" },
    { name: "PIT NO COMP", unit: "BIN", hide: true, category: "bool" },
    { name: "ROL NO COMP", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "ANTI ICE QTY", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved for CO DET FAIL", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved for CO DET SRVC", unit: "BIN", hide: true, category: "bool" },
    { name: "ESP CONFIG", unit: "BIN", hide: true, category: "bool" },
    { name: "EXIT ICING - 30 MIN", unit: "BIN", hide: true, category: "bool" },
    { name: "FAILED PATH", unit: "BIN", hide: true, category: "bool" },
    { name: "MFD FAN FAIL", unit: "BIN", hide: true, category: "bool" },
    { name: "PFD FAN FAIL", unit: "BIN", hide: true, category: "bool" },
    { name: "EXIT ICING - 60 MIN", unit: "BIN", hide: true, category: "bool" },
    { name: "EXIT ICING - 90 MIN", unit: "BIN", hide: true, category: "bool" },
    { name: "EXIT ICING - 120 MIN", unit: "BIN", hide: true, category: "bool" },
    { name: "ESP DEGRADE", unit: "BIN", hide: true, category: "bool" },
    { name: "ESP FAIL", unit: "BIN", hide: true, category: "bool" },
    { name: "ESP OFF", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Latitude (GIA1)", unit: "Deg", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Latitude (GIA2)", unit: "Deg", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Longitude (GIA1)", unit: "Deg", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "GPS Longitude (GIA2)", unit: "Deg", hide: true, category: "gia" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Ground Speed", unit: "kt", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Wind Speed", unit: "kt", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Wind Direction", unit: "Deg", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Heading (AHRS1)", unit: "Deg", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Heading (AHRS2)", unit: "Deg", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "EGT (cyl 1)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "EGT (cyl 3)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "EGT (cyl 5)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "EGT (cyl 2)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "EGT (cyl 4)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "EGT (cyl 6)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Pitch Angle (AHRS1)", unit: "Deg", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Pitch Angle (AHRS2)", unit: "Deg", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Roll Angle (AHRS1)", unit: "Deg", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Roll Angle (AHRS2)", unit: "Deg", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Pitch Rate  (AHRS1)", unit: "deg/s", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Pitch Rate  (AHRS2)", unit: "deg/s", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Roll Rate  (AHRS1)", unit: "deg/s", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Roll Rate  (AHRS2)", unit: "deg/s", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Longitudinal Acceleration (AHRS1)", unit: "g", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Longitudinal Acceleration (AHRS2)", unit: "g", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Lateral Acceleration (AHRS1)", unit: "g", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Lateral Acceleration (AHRS2)", unit: "g", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Normal Acceleration (AHRS1)", unit: "g", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Normal Acceleration (AHRS2)", unit: "g", hide: true, category: "ahrs" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Oil Temperature", unit: "°C", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "CHT (cyl 1)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "CHT (cyl 3)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "CHT (cyl 5)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Oil Pressure", unit: "PSI", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "CHT (cyl 2)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "CHT (cyl 4)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "CHT (cyl 6)", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Manifold Pressure", unit: "in. Hg", hide: true, category: "general" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Manifold Air Temperature", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Left TIT", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Right TIT", unit: "°F", hide: true, category: "generaltemps" },
    { name: "SSM", unit: "", hide: true, category: "" },
    { name: "Rudder Mistrim Right", unit: "BIN", hide: true, category: "bool" },
    { name: "Rudder Mistrim Left", unit: "BIN", hide: true, category: "bool" },
    { name: "Aileron Mistrim Right", unit: "BIN", hide: true, category: "bool" },
    { name: "Aileron Mistrim Left", unit: "BIN", hide: true, category: "bool" },
    { name: "Elevator Mistrim Down", unit: "BIN", hide: true, category: "bool" },
    { name: "Elevator Mistrim Up", unit: "BIN", hide: true, category: "bool" },
    { name: "Pitch Trim Failure", unit: "BIN", hide: true, category: "bool" },
    { name: "Yaw Damper Failure", unit: "BIN", hide: true, category: "bool" },
    { name: "Roll Failure", unit: "BIN", hide: true, category: "bool" },
    { name: "Pitch Failure", unit: "BIN", hide: true, category: "bool" },
    { name: "System Failure", unit: "BIN", hide: true, category: "bool" },
    { name: "PFT - In progress", unit: "BIN", hide: true, category: "bool" },
    { name: "PFT - Failed", unit: "BIN", hide: true, category: "bool" },
    { name: "EDM", unit: "BIN", hide: true, category: "bool" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
    { name: "Reserved", unit: "", hide: true, category: "" },
];
//Only columns pertaining to engine/fuel
const engineHeaders = [
    "LocalDate", "LocalTime", "UTCOffset",
    "FQtyL", "FQtyR",
    "E1FFlow", "E1OilT", "E1OilP",
    "E1MAP", "E1RPM", "E1PercentPwr",
    "E1CHT1", "E1CHT2", "E1CHT3",
    "E1CHT4", "E1CHT5", "E1CHT6",
    "E1EGT1", "E1EGT2", "E1EGT3",
    "E1EGT4", "E1EGT5", "E1EGT6",
    "E1TIT1", "E1TIT2"
];
//Remove "E1" and fuel qty headers
const avionicsHeaders = [
    "LocalDate", "LocalTime", "UTCOffset",
    "AtvWpt", "Lat", "Long",
    "AltB", "BaroA", "AltMSL",
    "OAT", "IAS", "GndSpd",
    "VSpd", "Pitch", "Roll",
    "LatAc", "NormAc", "HDG",
    "TRK", "volt1", "volt2",
    "amp1", "AltGPS",
    "TAS", "HSIS", "CRS",
    "NAV1", "NAV2", "COM1",
    "COM2", "HCDI", "VCDI",
    "WndSpd", "WndDr", "WptDst",
    "WptBrg", "MagVar", "AfcsOn",
    "RollM", "PitchM", "RollC",
    "PitchC", "VSpdG", "GPSfix",
    "HAL", "VAL", "HPLwas",
    "HPLfd", "VPLwas"
];
//Only EGT headers to check for high values
const egtHeaders = [
    "E1EGT1", "E1EGT2", "E1EGT3",
    "E1EGT4", "E1EGT5", "E1EGT6",
];
//Only CHT headers to check for high values
const chtHeaders = [
    "E1CHT1", "E1CHT2", "E1CHT3",
    "E1CHT4", "E1CHT5", "E1CHT6",
];


/***/ }),

/***/ 4123:
/*!*****************************************!*\
  !*** ./src/app/utils/datetime-utils.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimeUtility": () => (/* binding */ DateTimeUtility)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5871);

class DateTimeUtility {
    /** Return seconds argument to time string in "HH:MM:SS" format.
    Ex) 100 seconds -> "00:01:40" */
    toSeconds(seconds) {
        const date = new Date(0);
        date.setSeconds(seconds);
        return date.toISOString().substr(11, 8);
    }
    /** Calculate the difference (in seconds) from the first row to last row of spreadsheet UTC time column. */
    getTimeDiff(flightTimeArray) {
        try {
            const startTime = new Date("January 1, 1999 " + flightTimeArray[0].substr(0, 8)).getTime();
            const finishTime = new Date("January 1, 1999 " + flightTimeArray[1].substr(0, 8)).getTime();
            return this.toSeconds(Math.abs(finishTime - startTime) / 1000);
        }
        catch (error) {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)("Error processing flight duration: " + error);
        }
    }
    formatTimeArray(flightTimeArray, rowToStartFrom, isNotArray = false) {
        //Leading zeros are truncated in the csv file, so values in the "UTC Time" column
        //may need to be reformatted to the full hh:mm:ss format
        //Ex: 41:23.8 -> 00:41:23.8 (12:41:23.8 a.m.)
        const formattedArray = [];
        let currElement;
        for (let i = rowToStartFrom; i < flightTimeArray.length; i++) {
            if (isNotArray)
                currElement = flightTimeArray[i]; //Called from time format custom pipe
            else
                currElement = flightTimeArray[i]['UTC Time'].trim();
            const indexOfColon = currElement.indexOf(":");
            //Check for 2nd colon character (i.e. check for truncation of zeros)
            if (currElement.indexOf(":", indexOfColon + 1) === -1) {
                if (indexOfColon === 2) {
                    formattedArray.push("00:".concat(currElement));
                }
                else if (indexOfColon === 1) {
                    formattedArray.push("00:0".concat(currElement));
                }
            }
            else
                formattedArray.push(currElement);
        }
        return formattedArray;
    }
}


/***/ }),

/***/ 3146:
/*!*****************************************************!*\
  !*** ./src/app/views/chart/chart-helper-service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartHelperService": () => (/* binding */ ChartHelperService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ChartHelperService {
    constructor() {
        ///////////////////// CHT Chart ////////////////////////////
        this.CHTChartOptions = {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                },
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            yMin: 500,
                            yMax: 500,
                            borderColor: 'red',
                            borderWidth: 2,
                            label: {
                                enabled: true,
                                color: 'red',
                                content: 'Max Safe Temp'
                            }
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: 'white' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: {
                    ticks: { color: 'white' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
            },
        };
        this.CHTChartColors = [
            {
                borderColor: '#ffcc00',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                borderColor: '#007FFF',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                borderColor: '#ffe066',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                borderColor: '#66b3ff',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                borderColor: '#fff0b3',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                borderColor: '#b3d9ff',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
        ];
        this.CHTChartLegend = true;
        this.CHTChartType = 'line';
        ///////////////////// EGT Chart ////////////////////////////
        this.EGTChartOptions = {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                },
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            yMin: 1700,
                            yMax: 1700,
                            borderColor: 'red',
                            borderWidth: 1,
                            label: {
                                enabled: true,
                                color: 'red',
                                content: 'Max Safe Temp'
                            }
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: 'white' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: {
                    ticks: { color: 'white' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
            },
        };
        this.EGTChartColors = [
            {
                borderColor: '#ffcc00',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                borderColor: '#007FFF',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                borderColor: '#ffe066',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                borderColor: '#66b3ff',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                borderColor: '#fff0b3',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                borderColor: '#b3d9ff',
                backgroundColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
        ];
        this.EGTChartLegend = true;
        this.EGTChartType = 'line';
    }
}
ChartHelperService.ɵfac = function ChartHelperService_Factory(t) { return new (t || ChartHelperService)(); };
ChartHelperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChartHelperService, factory: ChartHelperService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4457:
/*!************************************************!*\
  !*** ./src/app/views/chart/chart.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartComponent": () => (/* binding */ ChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ 1783);
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ 367);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 1803);
/* harmony import */ var _services_chart_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/chart-data.service */ 5279);
/* harmony import */ var _utils_datetime_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/datetime-utils */ 4123);
/* harmony import */ var _services_data_import_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/data-import.service */ 8953);
/* harmony import */ var _chart_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart-helper-service */ 3146);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);











function ChartComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("CHT ", i_r5 + 1, " Average: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 2, element_r4, "1.2-2"), "");
} }
function ChartComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("CHT ", i_r7 + 1, ": ", element_r6, "");
} }
function ChartComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("EGT ", i_r9 + 1, " Average: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 2, element_r8, "1.2-2"), "");
} }
function ChartComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("EGT ", i_r11 + 1, ": ", element_r10, "");
} }
class ChartComponent {
    ///////////////////////////////////////////////////////////////
    constructor(chartDataService, converter, importService, chartHelperService) {
        this.chartDataService = chartDataService;
        this.converter = converter;
        this.importService = importService;
        this.chartHelperService = chartHelperService;
        this.baseChart = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.QueryList(); //Used to assign chart labels
        this.markers = 100; // number of data points for each line in chart
        this.chartLabels = []; // labels for CHT and EGT charts (should always be the same)
        this.fileUploadCount = 0;
        this.CHTChartOptions = this.chartHelperService.CHTChartOptions;
        this.CHTChartColors = this.chartHelperService.CHTChartColors;
        this.CHTChartLegend = this.chartHelperService.CHTChartLegend;
        this.CHTChartPlugins = this.chartHelperService.CHTChartOptions.plugins;
        this.CHTChartType = this.chartHelperService.CHTChartType;
        this.EGTChartOptions = this.chartHelperService.EGTChartOptions;
        this.EGTChartColors = this.chartHelperService.EGTChartColors;
        this.EGTChartLegend = this.chartHelperService.EGTChartLegend;
        this.EGTChartPlugins = this.chartHelperService.EGTChartOptions.plugins;
        this.EGTChartType = this.chartHelperService.EGTChartType;
    }
    ngOnInit() {
        // Chart annotation plugin needs to be registered manually
        // see https://www.chartjs.org/chartjs-plugin-annotation/guide/integration.html#script-tag
        chart_js_auto__WEBPACK_IMPORTED_MODULE_0__.default.register(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__.default);
        this.importService.fileCounter$.subscribe(isNewFile => {
            if (isNewFile > this.fileUploadCount) {
                this.chartDataService.initChartData();
                this.refreshChartData();
                this.fileUploadCount++;
            }
        });
    }
    refreshChartData() {
        this.chtAbnormalTempArray = [];
        this.egtAbnormalTempArray = [];
        this.chtAvgValArray = [];
        this.egtAvgValArray = [];
        this.chtAbnormalTempArray = this.chartDataService.getAbnormalTemperatures("cht");
        this.egtAbnormalTempArray = this.chartDataService.getAbnormalTemperatures("egt");
        this.CHTChartData = [
            { data: this.chartDataService.getCHTVals(this.markers)[0], label: 'CHT 1', xAxisID: 'x', yAxisID: 'y' },
            { data: this.chartDataService.getCHTVals(this.markers)[1], label: 'CHT 2', xAxisID: 'x', yAxisID: 'y' },
            { data: this.chartDataService.getCHTVals(this.markers)[2], label: 'CHT 3', xAxisID: 'x', yAxisID: 'y' },
            { data: this.chartDataService.getCHTVals(this.markers)[3], label: 'CHT 4', xAxisID: 'x', yAxisID: 'y' },
            { data: this.chartDataService.getCHTVals(this.markers)[4], label: 'CHT 5', xAxisID: 'x', yAxisID: 'y' },
            { data: this.chartDataService.getCHTVals(this.markers)[5], label: 'CHT 6', xAxisID: 'x', yAxisID: 'y' },
        ];
        this.EGTChartData = [
            { data: this.chartDataService.getEGTVals(this.markers)[0], label: 'EGT 1', xAxisID: 'x', yAxisID: 'y' },
            { data: this.chartDataService.getEGTVals(this.markers)[1], label: 'EGT 2', xAxisID: 'x', yAxisID: 'y' },
            { data: this.chartDataService.getEGTVals(this.markers)[2], label: 'EGT 3', xAxisID: 'x', yAxisID: 'y' },
            { data: this.chartDataService.getEGTVals(this.markers)[3], label: 'EGT 4', xAxisID: 'x', yAxisID: 'y' },
            { data: this.chartDataService.getEGTVals(this.markers)[4], label: 'EGT 5', xAxisID: 'x', yAxisID: 'y' },
            { data: this.chartDataService.getEGTVals(this.markers)[5], label: 'EGT 6', xAxisID: 'x', yAxisID: 'y' },
        ];
        this.chartDataService.chtAverageArray.forEach(element => {
            this.chtAvgValArray.push(element);
        });
        this.chartDataService.egtAverageArray.forEach(element => {
            this.egtAvgValArray.push(element);
        });
        //Regenerate labels after chart data is present
        this.chartLabels.push(...this.getChartLabels());
    }
    ngAfterViewInit() {
        this.baseChart.changes.subscribe(() => {
            for (let child of this.baseChart) {
                child.chart.config.data.labels = this.chartLabels;
                child.chart.update();
            }
        });
    }
    /** Take length of markers array (# of plot points for each line) and assign a HH:MM:SS value to each
     label starting at 00:00:01, with an interval of (record count/markers).
     
     Ex) For (recordCount = 100, markers = 10)
     
     labels = [00:00:01, 00:00:10, 00:00:20, ...] */
    getChartLabels() {
        const labels = [];
        for (let i = 0, j = 0; i < this.markers; i++) {
            labels.push(this.converter.toSeconds(j));
            j += (this.importService.originalRecordCount / this.markers);
        }
        return labels;
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_chart_data_service__WEBPACK_IMPORTED_MODULE_2__.ChartDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_utils_datetime_utils__WEBPACK_IMPORTED_MODULE_3__.DateTimeUtility), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_import_service__WEBPACK_IMPORTED_MODULE_4__.DataImportService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_chart_helper_service__WEBPACK_IMPORTED_MODULE_5__.ChartHelperService)); };
ChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["chart-view"]], viewQuery: function ChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_7__.BaseChartDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.baseChart = _t.first);
    } }, decls: 20, vars: 18, consts: [[1, "bg-image"], [1, "grid-container"], [1, "chart-wrapper", "grid-box"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"], [1, "grid-box", "chart-information"], [4, "ngFor", "ngForOf"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Average Temperatures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ChartComponent_li_7_Template, 3, 5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Abnormal Readings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ChartComponent_li_10_Template, 2, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Average Temperatures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ChartComponent_li_16_Template, 3, 5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Abnormal Readings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ChartComponent_li_19_Template, 2, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("datasets", ctx.CHTChartData)("labels", ctx.chartLabels)("options", ctx.CHTChartOptions)("colors", ctx.CHTChartColors)("legend", ctx.CHTChartLegend)("chartType", ctx.CHTChartType)("plugins", ctx.CHTChartPlugins);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.chtAvgValArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.chtAbnormalTempArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("datasets", ctx.EGTChartData)("labels", ctx.chartLabels)("options", ctx.EGTChartOptions)("colors", ctx.EGTChartColors)("legend", ctx.EGTChartLegend)("chartType", ctx.EGTChartType)("plugins", ctx.EGTChartPlugins);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.egtAvgValArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.egtAbnormalTempArray);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_7__.BaseChartDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe], styles: ["body[_ngcontent-%COMP%] {\r\n    max-width: 90%;\r\n  }\r\n  \r\n.chart-information[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  max-width: -webkit-max-content;\r\n  max-width: max-content;\r\n}\r\n  \r\n.grid-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: -95vh auto auto auto;\r\n  width: 80%;\r\n  height: 80%;\r\n  background: transparent;\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n  grid-column-gap: 5vw;\r\n  grid-row-gap: 5vh;\r\n  align-content: space-between;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n}\r\n  \r\n.grid-box[_ngcontent-%COMP%] {\r\n  background-color: rgba(51,51,51, 0.7);\r\n  padding: 3%;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  align-items:center;\r\n  justify-content:center;\r\n}\r\n  \r\n\r\n  \r\n.bg-image[_ngcontent-%COMP%] {\r\n  background-image: url('aircraft_bg.jpg');\r\n  filter: blur(10px);\r\n  height: 100%;\r\n  width: 100%;\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n  \r\nul[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCOztBQUVGO0VBQ0UsV0FBVztFQUNYLDhCQUFzQjtFQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLDhCQUE4Qjs7QUFFaEM7O0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFHQSxvQkFBb0I7O0FBQ3BCO0VBQ0Usd0NBQW1EO0VBQ25ELGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gIH1cclxuICBcclxuLmNoYXJ0LWluZm9ybWF0aW9uIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xyXG59ICBcclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogLTk1dmggYXV0byBhdXRvIGF1dG87XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICBncmlkLWNvbHVtbi1nYXA6IDV2dztcclxuICBncmlkLXJvdy1nYXA6IDV2aDtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG4uZ3JpZC1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsNTEsNTEsIDAuNyk7XHJcbiAgcGFkZGluZzogMyU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcblxyXG5cclxuLyogUGFnZSBiYWNrZ3JvdW5kICovXHJcbi5iZy1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmNcXGFzc2V0c1xcYWlyY3JhZnRfYmcuanBnJyk7XHJcbiAgZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbnVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSJdfQ== */"] });


/***/ }),

/***/ 3841:
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_table_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/table-data.service */ 1553);
/* harmony import */ var src_app_services_data_import_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-import.service */ 8953);
/* harmony import */ var _services_map_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/map-data.service */ 5059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _pipes_meter_to_mile_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/meter-to-mile.pipe */ 9724);







function HeaderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
} }
function HeaderComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Flight Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Flight Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Date (dd/mm/yy): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Duration (hh:mm:ss): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Distance (mi): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "meterToMile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 3, ctx_r4.flightDate$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 5, ctx_r4.flightDuration$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](27, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 12, ctx_r4.flightDistance$)), "0.1-2"), " ");
} }
const _c0 = function () { return { exact: true }; };
class HeaderComponent {
    constructor(tableDataService, importService, mapDataService) {
        this.tableDataService = tableDataService;
        this.importService = importService;
        this.mapDataService = mapDataService;
    }
    ngOnInit() {
        this.isTableLoaded$ = this.tableDataService.isTableLoaded$;
        this.flightDate$ = this.importService.flightDate$;
        this.flightDistance$ = this.mapDataService.flightDistance$;
        this.flightDuration$ = this.importService.flightDuration$;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_table_data_service__WEBPACK_IMPORTED_MODULE_0__.TableDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_data_import_service__WEBPACK_IMPORTED_MODULE_1__.DataImportService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_map_data_service__WEBPACK_IMPORTED_MODULE_2__.MapDataService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["header"]], decls: 17, vars: 7, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLinkActive", "active current", "aria-current", "page", "routerLink", "/", 1, "nav-link", 3, "routerLinkActiveOptions"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["notLoaded", ""], ["loaded", ""], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDarkDropdownMenuLink", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "disabled"], ["aria-labelledby", "navbarDarkDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-dark"], ["routerLinkActive", "active current", "routerLink", "/chart", 1, "nav-link"], ["routerLinkActive", "active current", "routerLink", "/map", 1, "nav-link"], ["href", "#", "id", "navbarDarkDropdownMenuLink", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-item"], [1, "flightinfo"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "MFD Data Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 1, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, HeaderComponent_ng_template_13_Template, 10, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, HeaderComponent_ng_template_15_Template, 30, 14, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 4, ctx.isTableLoaded$))("ngIfThen", _r3)("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _pipes_meter_to_mile_pipe__WEBPACK_IMPORTED_MODULE_3__.MeterToMilePipe], styles: [".navbar[_ngcontent-%COMP%] {\r\n    z-index: 100;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}\r\n\r\n.flightinfo[_ngcontent-%COMP%] {\r\n    float: right;\r\n    font-weight: 700;\r\n    font-size: inherit;\r\n    margin-left: 10px;    \r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5mbGlnaHRpbmZvIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgICAgXHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 7312:
/*!********************************************!*\
  !*** ./src/app/views/map/map.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/google-maps */ 8834);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_map_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/map-data.service */ 5059);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/database */ 494);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);







const _c0 = function () { return { draggable: false, title: "Start" }; };
class MapComponent {
    constructor(mapDataService, db) {
        this.mapDataService = mapDataService;
        this.db = db;
        this.startCoord = { lat: 0, lng: 0 };
        this.mapInfoContent = { title: "", coord: "" };
        this.zoom = 6;
    }
    ngOnInit() {
        this.code = this.db.list('/airports/usa/', ref => ref.orderByChild('code').equalTo('ktys'));
        this.code.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(entry => {
            return entry.map(val => (Object.assign({ key: val.payload.key }, val.payload.val())));
        })).subscribe(data => console.log(data));
        this.center = this.mapDataService.getCenterCoordinate();
        this.minBound = new google.maps.LatLng(this.mapDataService.getMinLatitude(), this.mapDataService.getMinLongitude());
        this.maxBound = new google.maps.LatLng(this.mapDataService.getMaxLatitude(), this.mapDataService.getMaxLongitude());
        this.setFlightPath();
    }
    ngAfterViewInit() {
        this.map.googleMap.fitBounds(this.getBounds());
    }
    //Set the initial scale of the map based on the min and max lat and long values
    getBounds() {
        let north, south, east, west;
        north = north !== undefined ? Math.max(north, this.mapDataService.getMaxLatitude()) : this.mapDataService.getMaxLatitude();
        south = south !== undefined ? Math.min(south, this.mapDataService.getMinLatitude()) : this.mapDataService.getMinLatitude();
        east = east !== undefined ? Math.max(east, this.mapDataService.getMaxLongitude()) : this.mapDataService.getMaxLongitude();
        west = west !== undefined ? Math.min(west, this.mapDataService.getMinLongitude()) : this.mapDataService.getMinLongitude();
        const bounds = { north, south, east, west };
        return bounds;
    }
    ////////////////////////////////////////////
    // Map interaction functions
    moveMap(event) {
        this.center = (event.latLng.toJSON());
    }
    ////////////////////////////////////////////
    //Set array of latitude and longitude data {lat: number, lng: number}
    //to map polyline data source
    setFlightPath() {
        this.flightPath$ = this.mapDataService.flightPath.asObservable();
        //Get first coordinate pair for start position marker
        this.flightPath$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe(res => {
            this.startCoord.lat = res[0].lat;
            this.startCoord.lng = res[0].lng;
        });
    }
    openMapInfo(marker) {
        this.mapInfoContent = {
            title: "Starting Point",
            coord: this.startCoord.lat + " ," + this.startCoord.lng
        };
        this.mapInfo.open(marker);
    }
    move(event) {
        this.display = event.latLng.toJSON();
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_map_data_service__WEBPACK_IMPORTED_MODULE_0__.MapDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_4__.AngularFireDatabase)); };
MapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["map-view"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_5__.GoogleMap, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_5__.MapInfoWindow, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mapInfo = _t.first);
    } }, decls: 17, vars: 11, consts: [[1, "bg-image"], [1, "content-container"], [1, "map-container"], ["height", "400px", "width", "750px", 3, "center", "mapClick", "mapMousemove"], [3, "position", "options", "mapClick"], ["marker", "mapMarker"], [3, "path"], [1, "coordinate", "grid"], [1, "coordinate"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "google-map", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mapClick", function MapComponent_Template_google_map_mapClick_3_listener($event) { return ctx.moveMap($event); })("mapMousemove", function MapComponent_Template_google_map_mapMousemove_3_listener($event) { return ctx.move($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "map-marker", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mapClick", function MapComponent_Template_map_marker_mapClick_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); return ctx.openMapInfo(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "map-info-window");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "map-polyline", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("center", ctx.center);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("position", ctx.startCoord)("options", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.mapInfoContent.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.mapInfoContent.coord);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("path", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 8, ctx.flightPath$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Latitude: ", ctx.display == null ? null : ctx.display.lat, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Longitude: ", ctx.display == null ? null : ctx.display.lng, "");
    } }, directives: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_5__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__.MapMarker, _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__.MapInfoWindow, _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__.MapPolyline], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], styles: ["body[_ngcontent-%COMP%] {\r\n  max-width: 90%;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: -90vh;\r\n  background: transparent;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: grid;\r\n  grid-template-rows: 50% 5% 5%;\r\n}\r\n\r\n.map-container[_ngcontent-%COMP%] {\r\n  background-color: rgba(51,51,51, 0.7);\r\n  padding: 3%;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  align-items:center;\r\n  justify-content:center;\r\n}\r\n\r\n.coordinate[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n  background-image: url('aircraft_bg.jpg');\r\n  filter: blur(10px);\r\n  height: 100%;\r\n  width: 100%;\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.gmap[_ngcontent-%COMP%] {\r\n  z-index: 100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0Usd0NBQW1EO0VBQ25ELGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJtYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAtOTB2aDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNSUgNSU7XHJcbn1cclxuXHJcbi5tYXAtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLDUxLDUxLCAwLjcpO1xyXG4gIHBhZGRpbmc6IDMlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxufVxyXG5cclxuLmNvb3JkaW5hdGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFBhZ2UgYmFja2dyb3VuZCAqL1xyXG4uYmctaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjXFxhc3NldHNcXGFpcmNyYWZ0X2JnLmpwZycpO1xyXG4gIGZpbHRlcjogYmx1cigxMHB4KTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZ21hcCB7XHJcbiAgei1pbmRleDogMTAwO1xyXG59Il19 */"] });


/***/ }),

/***/ 8379:
/*!********************************************************!*\
  !*** ./src/app/views/not-found/not-found.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    max-width: 90%;\r\n  }\r\n  \r\n  .content-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-top: -90vh;\r\n    background: transparent;\r\n  }\r\n  \r\n  \r\n  \r\n  .bg-image[_ngcontent-%COMP%] {\r\n    background-image: url('aircraft_bg.jpg');\r\n    filter: blur(10px);\r\n    height: 100%;\r\n    width: 100%;\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0VBQ3pCOztFQUVBLG9CQUFvQjs7RUFDcEI7SUFDRSx3Q0FBbUQ7SUFDbkQsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IC05MHZoO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFBhZ2UgYmFja2dyb3VuZCAqL1xyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyY1xcYXNzZXRzXFxhaXJjcmFmdF9iZy5qcGcnKTtcclxuICAgIGZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 181:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/table/table-info/table-info-dialog/table-info-dialog.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableInfoDialog": () => (/* binding */ TableInfoDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



class TableInfoDialog {
    //Bind the formatted first row data
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.logVersion = data.logVersion;
        this.airframeName = data.airframeName;
        this.sysSoftwarePN = data.sysSoftwarePN;
        this.unitSoftwarePN = data.unitSoftwarePN;
        this.mode = data.mode;
        this.unitSoftwareVer = data.unitSoftwareVer;
        this.sysID = data.sysID;
    }
    //////////////////////////////////////////////
    // Close dialog button
    close() {
        this.dialogRef.close();
    }
}
TableInfoDialog.ɵfac = function TableInfoDialog_Factory(t) { return new (t || TableInfoDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
TableInfoDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableInfoDialog, selectors: [["table-info-dialog"]], decls: 34, vars: 7, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "dialog-text"], ["align", "end"], [1, "mat-raised-button", 3, "click"]], template: function TableInfoDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aircraft Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log Version: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Airframe Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Unit Software P/N: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Unit Software Version: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sys Software P/N: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sys ID: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableInfoDialog_Template_button_click_32_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.airframeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.unitSoftwarePN);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.unitSoftwareVer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sysSoftwarePN);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sysID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mode);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: [".mat-raised-button[disabled][_ngcontent-%COMP%] {\r\n    color: rgb(165, 165, 165);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWluZm8tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoidGFibGUtaW5mby1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICAgY29sb3I6IHJnYigxNjUsIDE2NSwgMTY1KTtcclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1030:
/*!****************************************************************!*\
  !*** ./src/app/views/table/table-info/table-info.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableInfoComponent": () => (/* binding */ TableInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _table_info_dialog_table_info_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-info-dialog/table-info-dialog.component */ 181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_import_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data-import.service */ 8953);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 781);






class TableInfoComponent {
    constructor(dialog, uploadService) {
        this.dialog = dialog;
        this.uploadService = uploadService;
    }
    //////////////////////////////////////////////
    openDialog() {
        if (this.isTableLoaded === true) {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogConfig();
            //Set data property to include formatted first row data
            //Needs to be injected into the MatDialogRef class below
            dialogConfig.data = {
                logVersion: this.getFormattedFirstRowData(0),
                airframeName: this.getFormattedFirstRowData(1),
                unitSoftwarePN: this.getFormattedFirstRowData(2),
                unitSoftwareVer: this.getFormattedFirstRowData(3),
                sysSoftwarePN: this.getFormattedFirstRowData(4),
                sysID: this.getFormattedFirstRowData(5),
                mode: this.getFormattedFirstRowData(6)
            };
            this.dialog.open(_table_info_dialog_table_info_dialog_component__WEBPACK_IMPORTED_MODULE_0__.TableInfoDialog, dialogConfig);
        } //End if
        else
            console.error("Table data not loaded - please upload file first.");
    }
    //////////////////////////////////////////////
    //Return formatted values for "aircraft info" (e.g. values for software version, system ID, etc.)
    getFormattedFirstRowData(index) {
        return this.uploadService.getFormattedAircraftInfo(index);
    }
}
TableInfoComponent.ɵfac = function TableInfoComponent_Factory(t) { return new (t || TableInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_import_service__WEBPACK_IMPORTED_MODULE_1__.DataImportService)); };
TableInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TableInfoComponent, selectors: [["table-info"]], inputs: { isTableLoaded: "isTableLoaded" }, decls: 2, vars: 1, consts: [["mat-raised-button", "", 1, "dialog-opener-button", 3, "disabled", "click"]], template: function TableInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TableInfoComponent_Template_button_click_0_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "View File Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.isTableLoaded);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2830:
/*!************************************************!*\
  !*** ./src/app/views/table/table.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2457);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ 2949);
/* harmony import */ var _utils_column_arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/column-arrays */ 6520);
/* harmony import */ var _services_data_import_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-import.service */ 8953);
/* harmony import */ var _services_table_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/table-data.service */ 1553);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _pipes_full_time_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/full-time-formatter.pipe */ 7777);

















function TableComponent_ng_container_53_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](column_r11);
} }
function TableComponent_ng_container_53_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "td", 33);
} }
function TableComponent_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_ng_container_53_th_1_Template, 2, 1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TableComponent_ng_container_53_td_2_Template, 1, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matColumnDef", column_r11);
} }
function TableComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 34);
} }
function TableComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 35);
} }
function TableComponent_ng_container_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
} }
function TableComponent_ng_container_60_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](column_r17);
} }
function TableComponent_ng_container_60_ng_template_3_td_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_ng_container_60_ng_template_3_td_0_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const column_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.showColumnName(column_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "fullTimeFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    const column_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, element_r26[column_r17]), 0, 8), " ");
} }
function TableComponent_ng_container_60_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TableComponent_ng_container_60_ng_template_3_td_0_Template, 4, 7, "td", 39);
} }
function TableComponent_ng_container_60_ng_template_5_td_0_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_ng_container_60_ng_template_5_td_0_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const column_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.showColumnName(column_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    const column_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r32[column_r17], " ");
} }
function TableComponent_ng_container_60_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TableComponent_ng_container_60_ng_template_5_td_0_Template, 2, 1, "td", 39);
} }
function TableComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_ng_container_60_div_1_Template, 1, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TableComponent_ng_container_60_th_2_Template, 2, 1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TableComponent_ng_container_60_ng_template_3_Template, 1, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TableComponent_ng_container_60_ng_template_5_Template, 1, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r17 = ctx.$implicit;
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matColumnDef", column_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", column_r17 === "UTC Time")("ngIfThen", _r20)("ngIfElse", _r22);
} }
function TableComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 41);
} }
function TableComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 35);
} }
const _c0 = function () { return [100, 200, 400]; };
class TableComponent {
    /////////////////////////////////////////////
    constructor(importService, tableDataService, _snackBar) {
        this.importService = importService;
        this.tableDataService = tableDataService;
        this._snackBar = _snackBar;
        this.faFileUpload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFileUpload; //binding for the Font Awesome file upload icon
        this.fileCounter = 0; //Track # file uploads
        //Mat Slide Toggles
        this.isTimeInfoChecked = false;
        this.isGeneralChecked = false;
        this.isGenTempsChecked = false;
        this.isADCChecked = false;
        this.isGIAChecked = false;
        this.isAHRSChecked = false;
        this.isFuelChecked = false;
    }
    ngOnInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource([]);
        this.tempSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource([]);
        this.dummyDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
        this.isTableLoaded$ = this.tableDataService.isTableLoaded$.subscribe();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.currentPage = 0;
        this.timeline = gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.timeline();
    }
    /////////////////////////////////////////////////
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    /////////////////////////////////////////////////
    //Call on file upload through use of the drop area browse button
    onFileSelect(event) {
        //Listen for changes to loaded file data and populate table with data from dataSource
        this.callFileUploader(event);
        this.animatePageElements(); //Start page animation 
    }
    /////////////////////////////////////////////////
    // through use of the drop zone (drag and drop)
    onFileDrop(event) {
        //Override browser handler functionality
        event.stopPropagation();
        event.preventDefault();
        this.animatePageElements(); //Start page animation
        this.callFileUploader(event, true);
    }
    //////////////////////////////////////////////////
    // Call on data import service to convert csv file into table data
    callFileUploader(event, isFromDropZone = false) {
        this.fileCounter++;
        this.importService.onFileChange(event, isFromDropZone).subscribe((data) => {
            this.dataSource.data = data;
            this.tempSource.data = data;
            if (this.isTableLoaded$ !== true) {
                this.tableDataService.toggleIsTableLoaded(true);
                this.setInitialToggles(); // Activates "default" toggles
            }
        }, error => {
            this._snackBar.open("Upload failed --- " + error.message, "OK", { panelClass: "column-snackbar" });
            return;
        });
    }
    /////////////////////////////////////////////////
    //Add class when file is dragged over drop zone 
    onDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        document.getElementById('drop-zone-container').classList.add('isDragover');
    }
    /////////////////////////////////////////////////
    //Remove class when file is dragged away from drop zone
    onDragEnd() {
        document.getElementById('drop-zone-container').classList.remove('isDragover');
    }
    /////////////////////////////////////////////////
    //Show only rows where GPSFix col IN [3D, 3DDiff]
    applyGPSFilter() {
        this.clearFilter();
        const matchFilter = [];
        this.dataSource.data.forEach(obj => {
            Object.entries(obj).forEach(([key, value]) => {
                if (key == "GPSfix" && (value.trim() == "3D" || value.trim() == "3DDiff")) {
                    //console.log(`${key} ${value}`);
                    matchFilter.push(obj);
                }
            });
        });
        this.dataSource.data = matchFilter;
    }
    /////////////////////////////////////////////////
    //Show only rows with high(read: outside of normal operating parameters) EGT or CHT values
    applyHighEgtOrChtFilter() {
        const matchFilter = [];
        this.dataSource.data.forEach(obj => {
            for (const [key, value] of Object.entries(obj)) {
                if (_utils_column_arrays__WEBPACK_IMPORTED_MODULE_0__.chtHeaders.includes(key) && parseInt(value.trim()) >= 500) {
                    //console.log(`${key} ${value}`);
                    matchFilter.push(obj);
                    return;
                }
                if (_utils_column_arrays__WEBPACK_IMPORTED_MODULE_0__.egtHeaders.includes(key) && parseInt(value.trim()) >= 1700) {
                    //console.log(`${key} ${value}`);
                    matchFilter.push(obj);
                    return;
                }
            }
        });
        this.dataSource.data = matchFilter;
    }
    /////////////////////////////////////////////////
    //Clear all table filters and display original data
    clearFilter() {
        this.dataSource.data = this.tempSource.data;
    }
    /////////////////////////////////////////////////
    //Toggle display of undesired columns. Boolean is toggled in onClick method in html file
    //Initial display shows ALL columns
    //NOTE: Downloaded table still shows all columns
    toggleColumnDisplay(colType) {
        for (let elem of _utils_column_arrays__WEBPACK_IMPORTED_MODULE_0__.headersAll) {
            if (elem.category.toLowerCase() === colType) {
                elem.hide = !elem.hide;
            }
        }
    }
    /////////////////////////////////////////////////
    //If paginator index has changed, reset the vertical scroll to position 0
    resetTableScrollPosition(event) {
        if (event.pageIndex != this.currentPage) {
            const table = document.getElementById('csv-table');
            table.scrollTop = 0;
            this.currentPage = event.pageIndex;
        }
    }
    /////////////////////////////////////////////////
    //Boolean check for existence of table data
    get isTableLoaded() {
        return this.isTableLoaded$;
    }
    /////////////////////////////////////////////////
    // Call on GSAP timeline to apply animations to dropzone and filters/table elements
    animatePageElements() {
        this.timeline.to("#drop-zone", { duration: 0.5, width: "20vw", height: "15vh" });
        this.timeline.to(".table-container", { duration: 0.5, visibility: "visible" });
    }
    /////////////////////////////////////////////////
    // Display column name and measurement unit in snackbar when td cell is clicked 
    // Redundant workaround for sticky headers bug
    // If sticky headers fixed for mat table, this can be deprecated
    showColumnName(colName) {
        const displayedColumn = _utils_column_arrays__WEBPACK_IMPORTED_MODULE_0__.headersAll.find(col => colName === col.name);
        const message = displayedColumn.name + " (" + displayedColumn.unit + ")";
        this._snackBar.open(message, null, { duration: 1500, panelClass: "column-snackbar" });
    }
    // Return subsection of column headers that are not currently hidden (toggled off)
    getDisplayedColumns() {
        return _utils_column_arrays__WEBPACK_IMPORTED_MODULE_0__.headersAll.filter(col => !col.hide).map(col => col.name);
    }
    setInitialToggles() {
        if (!(this.fileCounter > 1)) {
            this.isTimeInfoChecked = true;
            this.isGenTempsChecked = true;
            this.toggleColumnDisplay('timeinfo');
            this.toggleColumnDisplay('generaltemps');
        }
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_import_service__WEBPACK_IMPORTED_MODULE_1__.DataImportService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_table_data_service__WEBPACK_IMPORTED_MODULE_2__.TableDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar)); };
TableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["table-view"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { isTableLoaded$: ["isTableLoaded", "isTableLoaded$"] }, outputs: { page: "page" }, decls: 65, vars: 21, consts: [[1, "bg-image"], [1, "content-container"], [1, "drop-zone-container"], ["id", "drop-zone", 3, "drop", "dragover", "dragleave"], ["for", "fileItem", 1, "file-upload"], ["size", "lg", 3, "icon"], ["type", "file", "id", "fileItem", "multiple", "", 1, "form-control-file", 3, "change"], ["id", "drop-zone-text"], [1, "table-container"], [1, "toggle-container"], [1, "toggle-element-container"], [3, "checked", "change"], [1, "table-data-container"], [1, "button-grid"], ["id", "button-grid-filters"], ["mat-raised-button", "", "disabled", "true", 3, "click"], ["id", "table-header", 3, "scroll"], ["scrollHeader", ""], ["id", "mat-header", 3, "dataSource"], ["table", ""], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["id", "csv-table", 3, "scroll"], ["scrollData", ""], ["id", "mat-data", 3, "dataSource"], ["mat-header-row", "", "style", "display:none", 4, "matHeaderRowDef"], [3, "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"], ["paginator", ""], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], ["timeCol", ""], ["generalCol", ""], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-cell", "", 3, "click"], ["mat-header-row", "", 2, "display", "none"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("drop", function TableComponent_Template_div_drop_3_listener($event) { ctx.onFileDrop($event); return ctx.onDragEnd(); })("dragover", function TableComponent_Template_div_dragover_3_listener($event) { return ctx.onDragOver($event); })("dragleave", function TableComponent_Template_div_dragleave_3_listener() { return ctx.onDragEnd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Upload File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TableComponent_Template_input_change_7_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Or Drop Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-slide-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TableComponent_Template_mat_slide_toggle_change_13_listener() { return ctx.toggleColumnDisplay("timeinfo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Date/Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-slide-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TableComponent_Template_mat_slide_toggle_change_17_listener() { return ctx.toggleColumnDisplay("general"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " General Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-slide-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TableComponent_Template_mat_slide_toggle_change_21_listener() { return ctx.toggleColumnDisplay("generaltemps"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Temp. Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-slide-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TableComponent_Template_mat_slide_toggle_change_25_listener() { return ctx.toggleColumnDisplay("adc"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " ADC Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-slide-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TableComponent_Template_mat_slide_toggle_change_29_listener() { return ctx.toggleColumnDisplay("gia"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " GIA Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-slide-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TableComponent_Template_mat_slide_toggle_change_33_listener() { return ctx.toggleColumnDisplay("ahrs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " AHRS Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-slide-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TableComponent_Template_mat_slide_toggle_change_37_listener() { return ctx.toggleColumnDisplay("fuel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Fuel Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_Template_button_click_43_listener() { return ctx.applyGPSFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Filter GPSfix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_Template_button_click_45_listener() { return ctx.applyHighEgtOrChtFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "High CHT/EGT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_Template_button_click_47_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Clear Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function TableComponent_Template_div_scroll_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](57); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](50); return _r5.scrollLeft = _r0.scrollLeft; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-table", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, TableComponent_ng_container_53_Template, 3, 1, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, TableComponent_tr_54_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, TableComponent_tr_55_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function TableComponent_Template_div_scroll_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](50); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](57); return _r0.scrollLeft = _r5.scrollLeft; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-table", 25, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, TableComponent_ng_container_60_Template, 7, 4, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, TableComponent_tr_61_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, TableComponent_tr_62_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "mat-paginator", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function TableComponent_Template_mat_paginator_page_63_listener($event) { return ctx.resetTableScrollPosition($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faFileUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.isTimeInfoChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.isGeneralChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.isGenTempsChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.isADCChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.isGIAChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.isAHRSChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.isFuelChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dummyDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getDisplayedColumns());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.getDisplayedColumns())("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.getDisplayedColumns());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getDisplayedColumns());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.getDisplayedColumns());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.getDisplayedColumns());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", 200)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](20, _c0))("showFirstLastButtons", true);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.SlicePipe, _pipes_full_time_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__.FullTimeFormatterPipe], styles: ["body[_ngcontent-%COMP%] {\r\n  max-width: 90%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  margin: 0%;\r\n  font-weight: 600;\r\n  padding-right: 2vw;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: -95vh;\r\n  background: transparent;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n  background-image: url('aircraft_bg.jpg');\r\n  filter: blur(10px);\r\n  height: 100%;\r\n  width: 100%;\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  z-index: -1;\r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n}\r\n\r\n.button-grid[_ngcontent-%COMP%] {\r\n  clear: both;\r\n  display: grid;\r\n  grid-template-columns: auto, auto, auto;\r\n  grid-template-rows: auto;\r\n}\r\n\r\n#button-grid-filters[_ngcontent-%COMP%] {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n}\r\n\r\nmat-button-toggle-group[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\nmat-button-toggle[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\r\n  background-color: rgb(165, 165, 165);\r\n}\r\n\r\n.mat-raised-button[disabled][_ngcontent-%COMP%] {\r\n  color: rgb(165, 165, 165);\r\n}\r\n\r\n\r\n\r\n#drop-zone[_ngcontent-%COMP%] {\r\n  outline: 2px dashed black;\r\n  outline-offset: -5px;\r\n  width:  80vw;\r\n  height: 35vh;\r\n  background-color:rgb(211, 211, 211, 0.5);\r\n  border-radius: 4px;\r\n  transition: background-color 0.2s;\r\n  display: flex;\r\n  flex-shrink: 1;\r\n  text-align: center;\r\n  z-index: 1;\r\n  font-weight: 500;\r\n  font-size: 0.8vw;\r\n  margin: auto;\r\n  margin-bottom: 2vh;\r\n  position: relative;\r\n}\r\n\r\n#drop-zone-condensed[_ngcontent-%COMP%] {\r\n  width: 20vw;\r\n  height: 15vh;\r\n}\r\n\r\n#drop-zone-initial.isDragover[_ngcontent-%COMP%] {\r\n  background-color: rgb(19, 55, 94, 0.5);\r\n  color: white;\r\n  transition: all 0.2s;\r\n}\r\n\r\n#drop-zone-text[_ngcontent-%COMP%], .file-upload[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n  margin: auto;\r\n  opacity: rgb(255, 255, 255, 1);\r\n  font-weight: 700;\r\n}\r\n\r\n#drop-zone-text[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n.file-upload[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc;\r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  color: black;\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n  margin-right: 5%;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);\r\n  background-color: rgb(238,238,238);\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(210,210,210);\r\n  transition: all 0.25s;\r\n}\r\n\r\n\r\n\r\n#csv-table[_ngcontent-%COMP%], #table-header[_ngcontent-%COMP%]{\r\n  overflow:auto;\r\n  background-color: white;\r\n}\r\n\r\n.mat-table[_ngcontent-%COMP%] { \r\n  max-height: 50vh;\r\n}\r\n\r\n.mat-header-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\r\n  min-width: 7vw;\r\n  max-width: 7vw;\r\n  padding: 10px;\r\n}\r\n\r\n#table-header[_ngcontent-%COMP%]{\r\n  overflow:hidden;\r\n  margin-top: 10px;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  font-size: 0.8vw;\r\n  border-right: 1px solid #f2f2f2;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\nth.mat-header-cell[_ngcontent-%COMP%]:last-of-type {\r\n  min-width: 12vw;\r\n}\r\n\r\nth.mat-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\r\n  padding-left: 10px;\r\n}\r\n\r\n\r\n\r\n.table-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  visibility: hidden;\r\n}\r\n\r\n.table-data-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow: auto;\r\n}\r\n\r\n.toggle-container[_ngcontent-%COMP%] {\r\n  background-color:rgb(211, 211, 211, 0.5);\r\n  border-radius: 10px;\r\n  margin-right: 1vw;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.toggle-element-container[_ngcontent-%COMP%] {\r\n  padding-left: 2%;\r\n  padding-right: 2%;\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n}\r\n\r\nmat-slide-toggle[_ngcontent-%COMP%] {\r\n  padding: 2%;\r\n  line-height: 1.5;\r\n}\r\n\r\n.mat-slide-toggle-content[_ngcontent-%COMP%] {\r\n  font-size: 1vw;\r\n}\r\n\r\n\r\n\r\n[_nghost-%COMP%]     .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\r\n  background-color: rgb(255, 221, 27);\r\n}\r\n\r\n[_nghost-%COMP%]      .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\r\n  background-color: #336699;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSx3Q0FBbUQ7RUFDbkQsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQSw2QkFBNkI7O0FBQzdCO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1SEFBdUg7QUFDekg7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGlDQUFpQzs7QUFDakM7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUhBQXVIO0VBQ3ZILGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxxQkFBcUI7QUFDdkI7O0FBRUEsV0FBVzs7QUFDWDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsc0JBQXNCOztBQUN0QjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQSwyQkFBMkIiLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJ2dztcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogLTk1dmg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiBQYWdlIGJhY2tncm91bmQgKi9cclxuLmJnLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyY1xcYXNzZXRzXFxhaXJjcmFmdF9iZy5qcGcnKTtcclxuICBmaWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLyogIEZpbHRlcnMgLyBvdGhlciBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24tZ3JpZCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8sIGF1dG8sIGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG59XHJcblxyXG4jYnV0dG9uLWdyaWQtZmlsdGVycyB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG59XHJcblxyXG5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbm1hdC1idXR0b24tdG9nZ2xlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxNjUsIDE2NSk7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gIGNvbG9yOiByZ2IoMTY1LCAxNjUsIDE2NSk7XHJcbn1cclxuXHJcbi8qIEZpbGUgdXBsb2FkIC8gZHJvcCB6b25lIGFyZWEgKi9cclxuI2Ryb3Atem9uZSB7XHJcbiAgb3V0bGluZTogMnB4IGRhc2hlZCBibGFjaztcclxuICBvdXRsaW5lLW9mZnNldDogLTVweDtcclxuICB3aWR0aDogIDgwdnc7XHJcbiAgaGVpZ2h0OiAzNXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDIxMSwgMjExLCAyMTEsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAwLjh2dztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2Ryb3Atem9uZS1jb25kZW5zZWQge1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGhlaWdodDogMTV2aDtcclxufVxyXG5cclxuI2Ryb3Atem9uZS1pbml0aWFsLmlzRHJhZ292ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgNTUsIDk0LCAwLjUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuI2Ryb3Atem9uZS10ZXh0LCAuZmlsZS11cGxvYWQge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgb3BhY2l0eTogcmdiKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiNkcm9wLXpvbmUtdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5mYS1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LDIzOCwyMzgpO1xyXG59XHJcblxyXG5sYWJlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwyMTAsMjEwKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbn1cclxuXHJcbi8qIFRhYmxlcyAqL1xyXG4jY3N2LXRhYmxlLCAjdGFibGUtaGVhZGVye1xyXG4gIG92ZXJmbG93OmF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYXQtdGFibGUgeyBcclxuICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsLCAubWF0LWNlbGwge1xyXG4gIG1pbi13aWR0aDogN3Z3O1xyXG4gIG1heC13aWR0aDogN3Z3O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiN0YWJsZS1oZWFkZXJ7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgZm9udC1zaXplOiAwLjh2dztcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjJmMmYyO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xyXG4gIG1pbi13aWR0aDogMTJ2dztcclxufVxyXG5cclxudGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEZpbHRlcnMgYW5kIHRhYmxlICovXHJcbi50YWJsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4udGFibGUtZGF0YS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4udG9nZ2xlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjExLCAyMTEsIDIxMSwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi50b2dnbGUtZWxlbWVudC1jb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxufVxyXG5cclxubWF0LXNsaWRlLXRvZ2dsZSB7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbn1cclxuXHJcbi8qIFNsaWRlIHRvZ2dsZSBjb2xvciAqL1xyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIxLCAyNyk7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM2Njk5O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAIWb9IzSmADwwiHZTPqQmB_DHm_O7R_gY",
        authDomain: "airport-info-1b0ba.firebaseapp.com",
        databaseURL: "https://airport-info-1b0ba-default-rtdb.firebaseio.com",
        projectId: "airport-info-1b0ba",
        storageBucket: "airport-info-1b0ba.appspot.com",
        messagingSenderId: "462696627694",
        appId: "1:462696627694:web:b8bff85296023b9d8222ff"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 5382:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2095:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 1219:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map