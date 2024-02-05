import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WEB_ANGULAR_GAME';
  loading!: boolean

  constructor(
    private router: Router
  ){
  }

  ngOnInit(){
    this.router.events.subscribe((e)=>{
      console.log(e);
      if(e){
        this.loading = false
        setTimeout(()=>{
          this.loading = true
        }, 1500)
      }
    })
  }
}
