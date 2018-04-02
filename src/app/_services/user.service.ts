import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    changePassword(username: string, oldPassword: string, newPassword: string) {

        const url = this.config.API_BASE_URL + '/api/change/password';
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        const body = new FormData();
        body.append('username', username)
        body.append('oldPassword', oldPassword);
        body.append('newPassword', newPassword);
        return this.http.post<any>(url, body, {headers})
            .map(data => {
                return data;
            });

    }

}
