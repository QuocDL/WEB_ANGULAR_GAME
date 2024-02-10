import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // @HostListener('document:keydown', ['event'])
  // onKeyDown(event: KeyboardEvent) {
  //   if (event.key === '123' ) {
  //     event.preventDefault(); 
  //   }
  // }
  // @HostListener('contextmenu', ['event'])
  // onRightClick(event: MouseEvent) {
  // event.preventDefault();
  // }
  
  
  title = 'WEB_ANGULAR_GAME';
  loading!: boolean
 

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ){
  }

  ngOnInit() {
    
    this.router.events.subscribe(()=>{
      window.scrollTo(0,0)
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 1200);
    })
  }
}