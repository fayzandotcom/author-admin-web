import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';

@Injectable()
export class VerifyAttemptService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    get(purchaseCode: string) {

        const url = this.config.API_BASE_URL + '/api/get/verify/attempt?purchaseCode=' + purchaseCode;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        return this.http.get<any>(url, {headers})
            .map(data => {
                if (data && data.purchase_code != null) {
                    return data;
                }
                return Observable.throw('No data found.');
            });

    }

    updateTriesAllowed(purchaseCode: string, triesAllowed: string): Observable<HttpEvent<any>> {

        const url = this.config.API_BASE_URL + '/api/update/verify/tries';
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token);
        const body = new FormData();
        body.append('purchaseCode', purchaseCode)
        body.append('tries', triesAllowed);
        return this.http.post<any>(url, body, {headers})
            .map(data => {
                return data;
            });

    }

}
