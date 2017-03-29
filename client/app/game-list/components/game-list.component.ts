import { Component, OnInit } from '@angular/core'
import { GameListService } from '../services/game-list.service'
import { GameListModel } from '../models/game-list.model'

@Component({
  selector: 'game-list',
  template: `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <div class="container">
  <h1 class="title-style"> Game List </h1>
  <table class="table">
    <thead class="thead-inverse">
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Year</th>
        <th>Developer</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let game of gameList" >
        <td>
          <img src={{game.image}} [style.width.px]="50">
        </td>
        <td> {{ game.title }} </td>
        <td> {{ game.year }} </td>
        <td> {{ game.developer }} </td>
        <td> {{ game.description }} </td>
      </tr>
    </tbody>
  </table>
</div>
  `
})
export class GameListComponent implements OnInit { 

    private image_url = "http://localhost:3000/img/games/";
    gameList:GameListModel[];
    errorMessage:string;
    constructor(private _gameListService:GameListService) { }

    ngOnInit() {
      this._gameListService.getGameList()
                    .subscribe(
                        res => this.gameList = res,
                        error => this.errorMessage = error,
                        () => this.gameList.forEach(game => (game.image.indexOf(this.image_url) == -1 ? 
                                                                    game.image = this.image_url+game.image : game.image))
                     )


    }
}
