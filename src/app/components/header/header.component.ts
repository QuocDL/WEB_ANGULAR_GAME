import { Component } from '@angular/core';
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

  constructor(
    private services: ProductService
  ){}

  ngOnInit(){
    this.searchProduct()
    window.addEventListener('scroll',(e)=>{
      this.searchText = ''
    })
  }
   
  searchProduct(){
    this.services.getProduct().subscribe((e)=>{
      this.searchItem = e
    })
    
  }
 

}
