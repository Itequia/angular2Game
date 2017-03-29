import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http'
//import { AppHttpService } from '../../services/app-http-service'
import { Observable } from 'rxjs/Observable'
import { About } from '../models/about.model'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
@Injectable()
export class AboutService {

    private _aboutUrl = 'http://localhost:3000/api/about';
    private _headers:Headers
    private _options:RequestOptions

    constructor(private _http: Http) { 
        this._onInit();
    }

    private _onInit() {
        this._headers = new Headers({'Content-Type': 'application/json'})
        this._options = new RequestOptions({headers: this._headers})
    }
    getAboutInfo():Observable<About> {
        
        return this._http.get(this._aboutUrl,this._options)
                         .map(res => <About>res.json())
                         .catch(this.handleError);
                         //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }   

    private handleError(error:Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}