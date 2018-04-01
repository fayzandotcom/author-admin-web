import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class VerifyAttemptService {
    constructor(private http: HttpClient) { }

    get(purchaseCode: string) {

        const url = 'http://localhost:8000/api/get/verify/attempt?purchaseCode=' + purchaseCode;
        return this.http.get<any>(url)
            .map(data => {
                if (data && data.purchase_code != null) {
                    return data;
                }
                return Observable.throw('No data found.');
            });

    }

    updateTriesAllowed(purchaseCode: string, triesAllowed: string): Observable<HttpEvent<any>> {

        const url = 'http://localhost:8000/api/update/verify/tries';
        const body = new FormData();
        body.append('purchaseCode', purchaseCode)
        body.append('tries', triesAllowed);
        return this.http.post<any>(url, body)
            .map(data => {
                return data;
            });

    }

}
