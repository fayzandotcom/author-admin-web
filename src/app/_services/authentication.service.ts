import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    login(username: string, password: string): Observable<HttpEvent<any>> {

        const body = new FormData();
        body.append('username', username)
        body.append('password', password);
        const url = this.config.API_BASE_URL + '/api/login';
        return this.http.post<any>(url, body)
            .map(user => {
                // login successful if there's a jwt token in the response
                console.log(user);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('loginUser', JSON.stringify(user));
                    console.log(user.token);
                    localStorage.setItem('token', user.token);
                    localStorage.setItem('loginUsername', username);
                    localStorage.setItem('isLogin', 'true');
                }
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('loginUser');
        localStorage.removeItem('token');
        localStorage.removeItem('isLogin');
        localStorage.removeItem('loginUsername');
    }
}
