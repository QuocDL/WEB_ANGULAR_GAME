import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  formRegister!: boolean 
  user:User ={
    email: '',
    password: '',
    role: 'user',
    firstname: '',
    lastname: ''
  }
  loginState = ''

  constructor(
    private router: Router,
    private services: UserService
  ){}

  ngOnInit(){
    const userState = sessionStorage.getItem('result')
    if(userState){
      this.router.navigate(['/'])
    }
    if(this.router.url === '/login'){
      this.formRegister = false  
    }else if(this.router.url === '/register'){
      this.formRegister = true
    }
  }

  clickSubmit(){
    if(!this.formRegister){
          this.services.loginService(this.user).subscribe((e)=>{
            if(e){
              sessionStorage.setItem('result', JSON.stringify(e))
              this.router.navigate(['/'])
            }
          }, (error)=>{
            this.loginState = error.error
          })
    }else{
      this.services.registerServices(this.user).subscribe(e=>{
        console.log(e);
        this.router.navigate(['/login'])
      }, err=>{
        this.loginState = err.error
      })
    }
  }

}
