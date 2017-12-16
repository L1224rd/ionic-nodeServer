import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(
        private http: Http
    ) {

    }

    registerUser(username: string, password: string): Observable<any> {
        let url = 'http://localhost:3000/user/register';
        let body = `username=${username}&password=${password}`;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(url, body, { headers: headers })
            .map((res: Response) => res.json());
    }
}