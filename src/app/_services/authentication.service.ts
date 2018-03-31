import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<HttpEvent<any>> {

        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('isLogin', 'true');
            const body = {
                id: 1,
                username: username,
                firstName: username,
                lastName: username,
                token: 'fake-jwt-token'
            };
            console.log('auth service - login success');
            return Observable.of(new HttpResponse({ status: 200, body: body }));
        } else {
            console.log('auth service - login fail');
            return Observable.throw('Username or password is incorrect');
        }

        /*return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });*/
    }

    logout() {
        // remove user from local storage to log user out
        // localStorage.removeItem('currentUser');
        localStorage.removeItem('isLogin');
    }
}
