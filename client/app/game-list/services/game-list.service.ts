import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { GameListModel } from '../models/game-list.model'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'


@Injectable()
export class GameListService {

    private _aboutUrl = 'http://localhost:3000/api/games';
    private _headers:Headers
    private _options:RequestOptions

     constructor(private _http: Http) { 
        this._onInit();
    }

    private _onInit() {
        this._headers = new Headers({'Content-Type': 'application/json'})
        this._options = new RequestOptions({headers: this._headers})
    }
    getGameList():Observable<GameListModel[]> {
        
        return this._http.get(this._aboutUrl,this._options)
                         .map(res => <GameListModel[]>res.json())
                         .catch(this.handleError);
                         //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }   

    private handleError(error:Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}