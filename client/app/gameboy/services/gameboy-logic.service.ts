import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject'
import { GameboyAction } from '../models/gameboy-actions.model'
import { GameboyItem} from '../models/gameboy-item.model'

@Injectable()
export class GameboyLogicService {

    private _actionAnnounceSubject = new Subject<Object>()
    actionAnnounced$ = this._actionAnnounceSubject.asObservable();

    private arraySrcImage: any[] = [
       "https://www.filterforge.com/filters/12591-v7.jpg",
       "http://piq.codeus.net/static/media/userpics/piq_290567_400x400.png"
    ];

    announceNewAction(action: GameboyAction) {
        this._actionAnnounceSubject.next(action);
    }

    spawnObjectRandomly():GameboyItem { 
        var src:string = this.arraySrcImage[this.randomNumber(1,0)];
        var leftPosition:number = this.randomNumber(275,0)
        var topPosition:number = this.randomNumber(195,0)
        return new GameboyItem(leftPosition, topPosition, src);
    }

    randomNumber(max:number,min:number):number {
        return Math.floor(Math.random()*(max-min+1))+min;
    }
}