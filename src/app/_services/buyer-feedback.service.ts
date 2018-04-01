import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class BuyerFeedbackService {
    constructor(private http: HttpClient) { }

    getAll() {

        const url = 'http://localhost:8000/api/get/buyer/feedback/all';
        return this.http.get<any>(url)
            .map(resp => {
                if (resp && resp.count > 0) {
                    return resp;
                }
                return Observable.throw('No data found.');
            });

    }

    get(id: string) {

        const url = 'http://localhost:8000/api/get/buyer/feedback?id=' + id;
        return this.http.get<any>(url)
            .map(resp => {
                if (resp && resp.purchase_code != null) {
                    return resp;
                }
                return Observable.throw('No data found.');
            });

    }

    updateStatus(id: string, status: string) {

        const url = 'http://localhost:8000/api/update/buyer/feedback/status';
        const body = new FormData();
        body.append('id', id);
        body.append('status', status);
        return this.http.post<any>(url, body)
            .map(data => {
                return data;
            });

    }

    delete(id: string) {

        const url = 'http://localhost:8000/api/delete/buyer/feedback';
        const body = new FormData();
        body.append('id', id);
        return this.http.post<any>(url, body)
            .map(data => {
                return data;
            });

    }

    insertNew(purchaseCode: string, email: string, phone: string, message: string) {

        const url = 'http://localhost:8000/api/public/buyer/feedback';
        const body = new FormData();
        body.append('purchaseCode', purchaseCode);
        body.append('email', email);
        body.append('phone', phone);
        body.append('message', message);
        return this.http.post<any>(url, body)
            .map(data => {
                return data;
            });
    }

}
