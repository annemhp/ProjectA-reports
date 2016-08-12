System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var IssuesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            IssuesService = (function () {
                function IssuesService(_http) {
                    this._http = _http;
                    this._url1 = "https://projecta1-5156a.firebaseio.com/issues";
                    this._url_reports = "https://projecta1-5156a.firebaseio.com/reports";
                }
                IssuesService.prototype.getIssues = function () {
                    return this._http.
                        get(this._url1 + ".json")
                        .map(function (res) { return res.json(); });
                };
                IssuesService.prototype.getIssuesByDepartments = function (department) {
                    return this._http.
                        get(this._url1 + ".json?orderBy=\"department\"&equalTo=\"" + department + '"')
                        .map(function (res) { return res.json(); });
                };
                IssuesService.prototype.getIssuesByStatus = function (status) {
                    return this._http.
                        get(this._url1 + ".json?orderBy=\"status\"&equalTo=\"" + status + '"')
                        .map(function (res) { return res.json(); });
                };
                IssuesService.prototype.addIssue = function (issue) {
                    return this._http.post(this._url1 + ".json", JSON.stringify(issue))
                        .map(function (res) { return res.json(); });
                };
                IssuesService.prototype.addReports = function (report) {
                    return this._http.put(this._url_reports + ".json", JSON.stringify(report))
                        .map(function (res) { return res.json(); });
                };
                IssuesService.prototype.getIssue = function (id) {
                    return this._http.get(this._url1 + "/" + id + ".json")
                        .map(function (res) { return res.json(); });
                };
                IssuesService.prototype.getUpdate = function (id) {
                    return this._http.get(this._url1 + "/" + id + "/updates.json")
                        .map(function (res) { return res.json(); });
                };
                IssuesService.prototype.UpdateIssue = function (update, issueId) {
                    return this._http.post(this._url1 + "/" + issueId + "/updates.json", JSON.stringify(update))
                        .map(function (res) { return res.json(); });
                };
                IssuesService.prototype.UpdateStatus = function (update, issueId) {
                    return this._http.patch(this._url1 + "/" + issueId + "/.json", JSON.stringify({ 'status': update['status'] }))
                        .map(function (res) { return res.json(); });
                };
                IssuesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], IssuesService);
                return IssuesService;
            }());
            exports_1("IssuesService", IssuesService);
        }
    }
});
//# sourceMappingURL=issues.service.js.map