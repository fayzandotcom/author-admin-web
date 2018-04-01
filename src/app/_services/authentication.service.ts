import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<HttpEvent<any>> {

        const body = new FormData();
        body.append('username', username)
        body.append('password', password);
        return this.http.post<any>('http://localhost:8000/api/login', body)
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('loginUser', JSON.stringify(user));
                    localStorage.setItem('isLogin', 'true');
                }
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('loginUser');
        localStorage.removeItem('isLogin');
    }
}
