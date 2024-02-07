import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  searchItem!: Product[]
  searchText = ''
  nameUser = ''
  userState = 'default'
  constructor(
    private router: Router,
    private services: ProductService
  ){}

  ngOnInit(){
    this.searchProduct()
    window.addEventListener('scroll',(e)=>{
      this.searchText = ''
    })
    this.router.events.subscribe(()=>{
      if(sessionStorage.getItem('result')){
        const result = sessionStorage.getItem('result')
        const userData = result && JSON.parse(result)
        if(userData.user.role === 'admin'){
          this.userState = 'admin'
          this.nameUser = userData.user.email
        }else if(userData.user.role === 'user'){
          this.userState = 'user'
          this.nameUser = userData.user.email
        }else{
          this.userState = 'default'
        }
      }
    })
  }
   
  searchProduct(){
    this.services.getProduct().subscribe((e)=>{
      this.searchItem = e
    })   
  }
  
  logOut(){
    sessionStorage.removeItem('result')
    this.userState = 'default'
  }
}
