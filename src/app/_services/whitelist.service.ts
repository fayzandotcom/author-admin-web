import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';

@Injectable()
export class WhitelistService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    get() {
        const url = this.config.API_BASE_URL + '/api/get/verify/attempts/author';
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        return this.http.get<any>(url, {headers})
            .map(resp => {
                if (resp && resp.count > 0) {
                    return resp;
                }
                return Observable.throw('No data found.');
            });
    }

    add(purchaseCode: string) {
        const url = this.config.API_BASE_URL + '/api/insert/author/purchase/code';
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        const body = new FormData();
        body.append('purchaseCode', purchaseCode)
        return this.http.post<any>(url, body, {headers})
            .map(data => {
                return data;
            });
    }

    remove(purchaseCode: string) {

        const url = this.config.API_BASE_URL +  '/api/delete/author/purchase/code';
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        const body = new FormData();
        body.append('purchaseCode', purchaseCode)
        return this.http.post<any>(url, body, {headers})
            .map(data => {
                return data;
            });

    }

}
