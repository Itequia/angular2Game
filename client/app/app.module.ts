import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { HttpModule,Http }    from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'

import { GameboyComponent } from './gameboy/gameboy.component'
import { GameboyScreenComponent } from './gameboy/components/gameboy-screen.component'
import { GameboyArrowComponent } from './gameboy/components/gameboy-arrows.component'
import { GameboyButtonsComponent} from './gameboy/components/gameboy-buttons.component'
import { GameboyLogicService } from './gameboy/services/gameboy-logic.service'

import { GameListComponent } from './game-list/components/game-list.component'
import { GameListService } from './game-list/services/game-list.service'

import { AboutComponent } from './about/components/about.component'
import { AboutService } from './about/services/about.service'
import { ReverseCustomPipe } from './customPipe/reverseCustomPipe.component'

import { AppHttpService } from './services/app-http-service'
import { appRoutes } from './routes'


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule  
    ],
  declarations: [
    AppComponent,
    GameboyComponent,
    GameboyScreenComponent,
    GameboyArrowComponent,
    GameboyButtonsComponent,
    GameListComponent,
    AboutComponent,
    ReverseCustomPipe

  ],
  providers: [
    GameboyLogicService,
    AppHttpService,
    AboutService,
    GameListService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }