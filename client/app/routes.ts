import { Routes } from '@angular/router';

import { GameboyComponent } from './gameboy/gameboy.component'
import { GameListComponent } from './game-list/components/game-list.component'
import { AboutComponent } from './about/components/about.component'

export const appRoutes:Routes = [
    { path: '', component: GameListComponent },
    { path: 'gameboy', component: GameboyComponent },
    { path: 'about', component: AboutComponent},
    { path: 'games', component: GameListComponent},
    { path: '**', redirectTo: '/gameboy' , pathMatch: 'full'}
    
]
