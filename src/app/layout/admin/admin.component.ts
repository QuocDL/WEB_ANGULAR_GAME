import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private router: Router){}


  ngOnInit(){
    const result = sessionStorage.getItem('result')
    const userData = result && JSON.parse(result)
    if(userData.user.role !== 'admin'){
      this.router.navigate(['/'])
    }
  }
}
