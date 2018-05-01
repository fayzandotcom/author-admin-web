import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';

@Injectable()
export class PurchaseCodeService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    get() {

        const url = this.config.API_BASE_URL + '/api/get/verify/attempts';
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

    getDetail(purchaseCode: string) {

        const url = this.config.API_BASE_URL + '/api/get/verify/attempt?purchaseCode=' + purchaseCode;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        return this.http.get<any>(url, {headers})
            .map(resp => {
                if (resp) {
                    return resp;
                }
                return Observable.throw('No data found.');
            });

    }

    update(purchaseCode: string, blacklist: string, triesAllowed: string): Observable<HttpEvent<any>> {

        const url = this.config.API_BASE_URL + '/api/update/purchasecode';
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        const body = new FormData();
        body.append('purchaseCode', purchaseCode)
        body.append('blacklist', blacklist);
        body.append('tries', triesAllowed);
        return this.http.post<any>(url, body, {headers})
            .map(data => {
                return data;
            });

    }

    updateBlacklist(purchaseCode: string, blacklist: string): Observable<HttpEvent<any>> {

        const url = this.config.API_BASE_URL + '/api/update/blacklist';
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        const body = new FormData();
        body.append('purchaseCode', purchaseCode)
        body.append('blacklist', blacklist);
        return this.http.post<any>(url, body, {headers})
            .map(data => {
                return data;
            });

    }

}
