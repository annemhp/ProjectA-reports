System.register(['@angular/core', './department-code', './issues.service', './status-code'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, department_code_1, issues_service_1, status_code_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (department_code_1_1) {
                department_code_1 = department_code_1_1;
            },
            function (issues_service_1_1) {
                issues_service_1 = issues_service_1_1;
            },
            function (status_code_1_1) {
                status_code_1 = status_code_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_service) {
                    this._service = _service;
                    this.started = false;
                    this.inProgress = false;
                    this.countUpdates = 0;
                    this.numberOfDepts = 0;
                    this.open = 0;
                    this.inprogress = 0;
                    this.resolved = 0;
                    this.invalid = 0;
                    this.reports = new Object();
                    this.departmentCode = new department_code_1.DepartmentCode();
                    this.statusCode = new status_code_1.StatusCode();
                    this.statuses = this.statusCode.statusMap;
                    this.issues = [];
                }
                AppComponent.prototype.onClick = function () {
                    var _this = this;
                    this.started = !this.started;
                    this.inProgress = !this.inProgress;
                    var departObj = this.departmentCode.departmentsMap;
                    var departments = Object.keys(departObj);
                    this.numberOfDepts = departments.length;
                    var _loop_1 = function(department) {
                        this_1._service.getIssuesByDepartments(department)
                            .subscribe(function (issues) {
                            _this.issues = (issues) ? Object.keys(issues).map(function (key) { return issues[key]; }) : null,
                                _this.updateDepartmentCount(_this.issues, department);
                        });
                    };
                    var this_1 = this;
                    for (var _i = 0, departments_1 = departments; _i < departments_1.length; _i++) {
                        var department = departments_1[_i];
                        _loop_1(department);
                    }
                };
                AppComponent.prototype.updateDepartmentCount = function (issues, department) {
                    var _this = this;
                    console.log(issues);
                    this.countUpdates++;
                    var open = 0;
                    var inprogress = 0;
                    var resolved = 0;
                    var invalid = 0;
                    for (var _i = 0, issues_1 = issues; _i < issues_1.length; _i++) {
                        var issue = issues_1[_i];
                        switch (issue['status']) {
                            case 'open':
                                open++;
                                break;
                            case 'inprogress':
                                inprogress++;
                                break;
                            case 'resolved':
                                resolved++;
                                break;
                            case 'invalid':
                                invalid++;
                                break;
                        }
                    }
                    this.reports[department] = {
                        open: open,
                        inprogress: inprogress,
                        resolved: resolved,
                        invalid: invalid
                    };
                    this.open += open;
                    this.inprogress += inprogress;
                    this.resolved += resolved;
                    this.invalid += invalid;
                    if (this.numberOfDepts == this.countUpdates) {
                        this.reports['all'] = {
                            open: this.open,
                            inprogress: this.inprogress,
                            resolved: this.resolved,
                            invalid: this.invalid
                        };
                        this._service.addReports(this.reports)
                            .subscribe(function (x) {
                            // Ideally, here we'd want:
                            // this.form.markAsPristine();
                            _this.inProgress = !_this.inProgress;
                        });
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1 >Update reports</h1>\n                <button type=\"button\" (click) = \"onClick()\"\n                *ngIf=\"!started\" \n                class=\"btn btn-default\">Start Update</button>\n                <h3 *ngIf=\"started && inProgress\" >Update Inprogress</h3>\n                <h3 *ngIf=\"started && !inProgress\" >Update Done App</h3>\n                ",
                        providers: [issues_service_1.IssuesService]
                    }), 
                    __metadata('design:paramtypes', [issues_service_1.IssuesService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map