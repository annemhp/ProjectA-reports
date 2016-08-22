import {Component, OnInit} from '@angular/core';
import {DepartmentCode } from './department-code';
import {IssuesService} from './issues.service';
import {StatusCode} from './status-code'

@Component({
    selector: 'my-app',
    template: `<h1 >Update reports</h1>
                <button type="button" (click) = "onClick()"
                *ngIf="!started" 
                class="btn btn-default">Start Update</button>
                <h3 *ngIf="started && inProgress" >Update Inprogress</h3>
                <h3 *ngIf="started && !inProgress" >Update Done App</h3>
                `,
    providers: [IssuesService]

})
export class AppComponent {

    started = false;
    inProgress = false;
    countUpdates = 0;
    numberOfDepts = 0;

    open = 0;
    inprogress = 0;
    resolved = 0;
    invalid = 0;

    reports = new Object();
    issues: any[];
    issuesObj: any;
    departmentCode = new DepartmentCode();
    statusCode = new StatusCode();
    statuses = this.statusCode.statusMap;


    constructor(private _service: IssuesService) {
        this.issues = [];
    }


    onClick() {
        this.started = !this.started;
        this.inProgress = !this.inProgress;
        var departObj = this.departmentCode.departmentsMap;

        var departments = Object.keys(departObj);
        this.numberOfDepts = departments.length;

        for (let department of departments) {
            this._service.getIssuesByDepartments(department)
                .subscribe(issues => {
                    this.issues = (issues) ? Object.keys(issues).map(key => issues[key]) : null,
                        this.updateDepartmentCount(this.issues, department);
                });
        }
    }


    updateDepartmentCount(issues, department) {
        console.log(issues);

        this.countUpdates++;

        var open = 0;
        var inprogress = 0;
        var resolved = 0;
        var invalid = 0;
        for (let issue of issues) {
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
        }

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
            }


            this._service.addReports(this.reports)
                .subscribe(x => {
                    // Ideally, here we'd want:
                    // this.form.markAsPristine();
                    this.inProgress = !this.inProgress;
                });




        }
    }



}