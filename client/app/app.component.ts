import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx'; 

@Component({
  selector: 'main-app',
  template: `
    <router-outlet></router-outlet>
    <div class="site-background"></div>
  `
})
export class AppComponent implements OnInit { 
  
  constructor(
   
  ) { }

  ngOnInit() {
  }
}