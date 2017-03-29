import { Component, OnInit,Input } from '@angular/core'
import { GameboyLogicService } from './services/gameboy-logic.service'
import { GameboyAction } from './models/gameboy-actions.model'

@Component({
  selector: 'gameboy',
  template: `
    <div class='gameboy'>
        <gameboy-screen ></gameboy-screen>
        <gameboy-arrows (buttonPress)='onButtonPress($event)' ></gameboy-arrows>
        <gameboy-buttons (buttonPress)='onButtonPress($event)' ></gameboy-buttons>
    </div>
  `
})
export class GameboyComponent implements OnInit { 
    
    static AUDIO_SRC:string = 'http://www.soundjay.com/misc/sounds/small-bell-ring-01a.mp3';
    
    constructor( ) { }

    ngOnInit() { }

    onButtonPress(value:GameboyAction):void {

        var audio = new Audio(GameboyComponent.AUDIO_SRC);
        audio.play();       
    }
}