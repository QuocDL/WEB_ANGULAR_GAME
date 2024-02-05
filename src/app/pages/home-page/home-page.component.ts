import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  products!: Product[]
  constructor(
   private services: ProductService
  ){
  }
  ngOnInit(){
    this.loadProduct()
  }

  loadProduct(){
    this.services.getProduct().subscribe((e)=>{
      this.products = e
    })
  }

}
