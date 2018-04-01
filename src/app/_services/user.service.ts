import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    changePassword(username: string, oldPassword: string, newPassword: string) {

        const url = 'http://localhost:8000/api/change/password';
        const body = new FormData();
        body.append('username', username)
        body.append('oldPassword', oldPassword);
        body.append('newPassword', newPassword);
        return this.http.post<any>(url, body)
            .map(data => {
                return data;
            });

    }

}
