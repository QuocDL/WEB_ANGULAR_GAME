import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-admin',
  templateUrl: './side-bar-admin.component.html',
  styleUrls: ['./side-bar-admin.component.scss']
})
export class SideBarAdminComponent {
  constructor(private router: Router){}


  logOut(){
    sessionStorage.removeItem('result')
    this.router.navigate(['/'])
  }
}
