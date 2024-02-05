import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WEB_ANGULAR_GAME';
  loading = false  

  constructor(
  ){
  }

  ngOnInit(){
    setTimeout(()=>{
      this.loading = true
    }, 2000)
  }
}
