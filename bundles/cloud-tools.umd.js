(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material-moment-adapter'), require('@angular/material'), require('@angular/common'), require('@angular/forms'), require('ngx-captcha')) :
    typeof define === 'function' && define.amd ? define('cloud-tools', ['exports', '@angular/core', '@angular/material-moment-adapter', '@angular/material', '@angular/common', '@angular/forms', 'ngx-captcha'], factory) :
    (factory((global['cloud-tools'] = {}),global.ng.core,global.ng['material-moment-adapter'],global.ng.material,global.ng.common,global.ng.forms,global.ngxCaptcha));
}(this, (function (exports,core,materialMomentAdapter,material,common,forms,ngxCaptcha) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FieldsComponent = /** @class */ (function () {
        function FieldsComponent() {
        }
        /**
         * @return {?}
         */
        FieldsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (['text', 'email', 'select', 'password', 'textarea', 'datetime', 'number', 'multiple_select', 'button', 'switch', 'recaptcha'].indexOf(this.field.type) === -1) {
                    throw ("Unable to render the field '" + this.field.name + "' with the field type : '" + this.field.type + "'. This type is not supported.");
                }
                if (!(this.group.get(this.field.name) instanceof forms.AbstractControl)) {
                    throw "Unable to retreive the field \"" + this.field.name + "\" from the [group] provided to the \"app-fields\" component.";
                }
                this[this.field.name] = this.field.control;
            };
        FieldsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cloud-fields',
                        template: "<ng-container [formGroup]=\"group\">\r\n\t<!-- text field field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"[ 'text', 'password', 'email' ].indexOf( field.type ) != -1\" class=\"example-full-width w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<input [readonly]=\"field.readonly\" [type]=\"field.type\" [formControlName]=\"field.name\" matInput [placeholder]=\"field.label\" [value]=\"field.value ? field.value : ''\">\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<!-- date time field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"field.type == 'datetime'\" class=\"w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<input [readonly]=\"field.readonly\" [formControlName]=\"field.name\" matInput [matDatepicker]=\"picker\" [placeholder]=\"field.label\">\r\n\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t<mat-datepicker #picker startView=\"year\" [startAt]=\"field.data.startDate\"></mat-datepicker>\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<!-- select field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"field.type == 'select'\" class=\"w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<mat-select [formControlName]=\"field.name\" [placeholder]=\"field.label\">\r\n\t\t\t<mat-option *ngFor=\"let option of field.options\" [value]=\"option.value\">\r\n\t\t\t{{ option.label }}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"field.type == 'multiple_select'\" multiple class=\"w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<mat-select [formControlName]=\"field.name\" [placeholder]=\"field.label\">\r\n\t\t\t<mat-option *ngFor=\"let option of field.options\" [value]=\"option.value\">\r\n\t\t\t{{ option.label }}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<!-- textarea field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"field.type == 'textarea'\" class=\"w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<textarea [formControlName]=\"field.name\" matInput [placeholder]=\"field.label\"></textarea>\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<!-- text field field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"[ 'number' ].indexOf( field.type ) != -1\" class=\"example-full-width w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<input [readonly]=\"field.readonly\" [formControlName]=\"field.name\" matInput type=\"number\" [placeholder]=\"field.label\" [value]=\"field.value ? field.value : ''\">\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\t\t\r\n\t</mat-form-field>\r\n\r\n\t<!-- switch field -->\r\n\t<ng-container *ngIf=\"[ 'switch' ].indexOf( field.type ) != -1\">\r\n\t\t<mat-slide-toggle [formControlName]=\"field.name\" [checked]=\"field.value\">{{ field.label }}</mat-slide-toggle>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<br>\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t\t<br>\r\n\t\t<small *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</small>\r\n\t\t<br>\r\n\t\t<br>\r\n\t</ng-container>\r\n\r\n\t<!-- (reset)=\"handleReset()\"\r\n\t(ready)=\"handleReady()\"\r\n\t(load)=\"handleLoad()\"\r\n\t[type]=\"type\"\r\n\t[ngModelOptions]=\"{ standalone: true }\"\r\n\t[badge]=\"badge\"\r\n\t(success)=\"handleSuccess($event)\"-->\r\n\t<!-- recaptcha field -->\r\n\t<ng-container *ngIf=\"[ 'recaptcha' ].includes( field.type )\">\r\n\t\t<ngx-recaptcha2 #captchaElem\r\n\t\t\t[siteKey]=\"field.data.siteKey\"\r\n\t\t\t[useGlobalDomain]=\"false\"\r\n\t\t\ttype=\"image\"\r\n\t\t\t[formControlName]=\"field.name\">\r\n\t\t</ngx-recaptcha2>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<br>\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\t\r\n\t</ng-container>\r\n\t<!-- button -->\r\n\t<button [type]=\"field.type\" *ngIf=\"[ 'button' ].indexOf( field.type ) !== -1\" (click)=\"field.onClick( group )\" mat-raised-button color=\"primary\">{{ field.label }}</button>\r\n</ng-container>",
                        styles: ["mat-form-field{margin-bottom:10px;width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        FieldsComponent.ctorParameters = function () { return []; };
        FieldsComponent.propDecorators = {
            field: [{ type: core.Input, args: ['field',] }],
            group: [{ type: core.Input, args: ['group',] }]
        };
        return FieldsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MaterialModules = [
        material.MatCheckboxModule,
        material.MatDatepickerModule,
        material.MatFormFieldModule,
        material.MatInputModule,
        material.MatRadioModule,
        material.MatSelectModule,
        material.MatSliderModule,
        material.MatSlideToggleModule,
        material.MatMenuModule,
        material.MatSidenavModule,
        material.MatToolbarModule,
        material.MatCardModule,
        material.MatDividerModule,
        material.MatExpansionModule,
        material.MatGridListModule,
        material.MatListModule,
        material.MatTabsModule,
        material.MatButtonModule,
        material.MatIconModule,
        material.MatProgressSpinnerModule,
        material.MatProgressBarModule,
        material.MatRippleModule,
        material.MatDialogModule,
        material.MatSnackBarModule,
        material.MatPaginatorModule,
        material.MatSortModule,
        material.MatTableModule,
        materialMomentAdapter.MatMomentDateModule
    ];
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        MaterialModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: MaterialModules,
                        exports: MaterialModules,
                    },] }
        ];
        return MaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CloudToolsModule = /** @class */ (function () {
        function CloudToolsModule() {
        }
        CloudToolsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [FieldsComponent],
                        imports: [
                            MaterialModule,
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            ngxCaptcha.NgxCaptchaModule
                        ],
                        exports: [FieldsComponent]
                    },] }
        ];
        return CloudToolsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CloudToolsModule = CloudToolsModule;
    exports.ɵa = FieldsComponent;
    exports.ɵb = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=cloud-tools.umd.js.map