import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IssuesService {

	private _url1 = "https://projecta1-5156a.firebaseio.com/issues";

	private _url_reports = "https://projecta1-5156a.firebaseio.com/reports";

	constructor(private _http: Http) {
	}

	getIssues() {
		return this._http.
			get(this._url1 + ".json")
			.map(res => res.json()
			);
	}


	getIssuesByDepartments(department) {
		return this._http.
			get(this._url1 + `.json?orderBy="department"&equalTo="`+department+'"')
			.map(res => res.json()
			);	
		}

	getIssuesByStatus(status) {
		return this._http.
			get(this._url1 + `.json?orderBy="status"&equalTo="`+status+'"')
			.map(res => res.json()
			);	
	}

	addIssue(issue) {
		return this._http.post(this._url1 + ".json", JSON.stringify(issue))
			.map(res => res.json());
	}

	addReports(report) {
		 return this._http.put(this._url_reports +".json", JSON.stringify(report))
			.map(res => res.json());
	}


	getIssue(id) {
		return this._http.get(this._url1 + "/" + id + ".json")
			.map(res => res.json());
	}

	getUpdate(id) {
		return this._http.get(this._url1 + "/" + id + "/updates.json")
			.map(res => res.json());
	}

	UpdateIssue(update, issueId) {
		return this._http.post(this._url1 + "/" + issueId + "/updates.json", JSON.stringify(update))
			.map(res => res.json());
	}

	UpdateStatus(update, issueId) {
		return this._http.patch(this._url1 + "/" + issueId + "/.json", JSON.stringify({ 'status': update['status'] }))
			.map(res => res.json());
	}
}