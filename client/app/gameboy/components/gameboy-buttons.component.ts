import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { GameboyAction } from '../models/gameboy-actions.model';

@Component({
    selector: 'gameboy-buttons',
    template: `
    <div>
        <button (click)="buttonPressEvent($event)" id="buttonA" class="gameboy-button gameboy-button-a">A</button>
        <button (click)="buttonPressEvent($event)" id="buttonB" class="gameboy-button gameboy-button-b">B</button>
    </div>
    <div>
        <button (click)="buttonPressEvent($event)" id="buttonStart" class="gameboy-button-start">Start</button>
        <button (click)="buttonPressEvent($event)" id="buttonSelect" class="gameboy-button-select">Select</button>
        <img id="speaker_img" class="imagen-speaker" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg" alt="Description"/>
    </div>
    `
})
export class GameboyButtonsComponent implements OnInit {
    
    @Output() buttonPress: EventEmitter<GameboyAction> 
              = new EventEmitter<GameboyAction>();

    ngOnInit() {  }

    buttonPressEvent(event):void {
        var buttonId = (event.target.id as string);
        var action:GameboyAction;
        switch(buttonId) {
            case "buttonA": 
                action = GameboyAction.PressA;
                break;
            case "buttonB": 
                action = GameboyAction.PressB;
                break;
            case "buttonStart": 
                action = GameboyAction.PressStart;
                break;
            case "buttonSelect": 
                action = GameboyAction.PressSelect;
                break;
        }
        this.buttonPress.emit(action);
    }

}
