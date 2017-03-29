import { Component, OnInit,Input, OnChanges,ViewChild ,ElementRef} from '@angular/core'
import { Subscription } from "rxjs/Rx"
import { GameboyAction } from '../models/gameboy-actions.model'
import { GameboyLogicService } from '../services/gameboy-logic.service'
import { GameboyItem } from '../models/gameboy-item.model'

@Component({
	selector: 'gameboy-screen',
	template: `
    <div class="gameboy-screen">
		<img class="img-character" [style.top.px]="topCharacter" 
		[style.left.px]="leftCharacter" src="https://i.stack.imgur.com/ukKRG.jpg">
		
		<div *ngFor="let item of itemArray">
			<img class="img-character" [style.top.px]="item.topPosition"
			[style.left.px]="item.leftPosition" src="{{item.src}}">
		</div>
		
	</div>
  	`
})
export class GameboyScreenComponent implements OnInit {

	subscription: Subscription

	topCharacter:number;
	leftCharacter:number;
	itemArray:GameboyItem[] = new Array<GameboyItem>();

	constructor(
		private _gameboyLogicService: GameboyLogicService
	) { }

	ngOnInit() {
		this.topCharacter = 190;
    	this.leftCharacter = 130;

		this.subscription = this._gameboyLogicService.actionAnnounced$
			.subscribe(action => {
				switch(action) {
					case GameboyAction.MoveUp:
						this.topCharacter = (this.topCharacter - 5 > 5) ? this.topCharacter-5: this.topCharacter;
						break;
					case GameboyAction.MoveDown:
						this.topCharacter = (this.topCharacter + 5 < 195) ? this.topCharacter+5: this.topCharacter;
						break;
					case GameboyAction.MoveLeft:
						this.leftCharacter = (this.leftCharacter - 5 > 5) ? this.leftCharacter-5: this.leftCharacter;
						break;
					case GameboyAction.MoveRight:
						this.leftCharacter = (this.leftCharacter + 5 < 275) ? this.leftCharacter+5: this.leftCharacter;
						break;
			
				}
				this.itemArray.push(this._gameboyLogicService.spawnObjectRandomly());
			}
		)
		
		
	}
	ngOnChanges( ) {
		
	}
	
	
}