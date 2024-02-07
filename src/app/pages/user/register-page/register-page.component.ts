import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  user:User ={
    email: '',
    password: '',
    role: 'user',
    firstname: '',
    lastname: ''
  }
  constructor(
    private router: Router,
    private services: UserService
  ){}

  ngOnInit(){
  }

  login(){
   
  }
}
