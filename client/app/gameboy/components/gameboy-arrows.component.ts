import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Subscription } from "rxjs/Rx"
import { GameboyLogicService } from '../services/gameboy-logic.service'
import { GameboyAction } from '../models/gameboy-actions.model'


@Component({
    selector: 'gameboy-arrows',
    template: `
    <div class="gameboy-arrows">
        <button (click)="buttonPressEvent($event)" id="buttonLeft" class="gameboy-arrow-left"></button>
        <button (click)="buttonPressEvent($event)" id="buttonUp" class="gameboy-arrow-up"></button>
        <button (click)="buttonPressEvent($event)" id="buttonRight" class="gameboy-arrow-right"></button>
        <button (click)="buttonPressEvent($event)" id="buttonDown" class="gameboy-arrow-down"></button>
    </div>
    `
})
export class GameboyArrowComponent implements OnInit {

    /*@Output() buttonPress:EventEmitter<GameboyAction> =
                new EventEmitter<GameboyAction>();*/
    subscription: Subscription
    
	constructor(
        private _gameboyLogicService: GameboyLogicService
    ) { }

	ngOnInit() {}

    buttonPressEvent(event) {
        var buttonId:string = (event.target.id as string);
        var action:GameboyAction;
        switch(buttonId) {
            case "buttonLeft": 
                action = GameboyAction.MoveLeft;
                break;
            case "buttonUp": 
                action = GameboyAction.MoveUp;
                break;
            case "buttonRight": 
                action = GameboyAction.MoveRight;
                break;
            case "buttonDown": 
                action = GameboyAction.MoveDown;
                break;
        }
        this._gameboyLogicService.announceNewAction(action);
    }
}