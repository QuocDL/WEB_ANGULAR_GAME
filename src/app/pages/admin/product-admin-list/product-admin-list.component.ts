import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-admin-list',
  templateUrl: './product-admin-list.component.html',
  styleUrls: ['./product-admin-list.component.scss']
})
export class ProductAdminListComponent {
  products!: Product[]

  constructor(
    private services: ProductService
  ){}

  ngOnInit(){
    this.loadProducts()
  }

  loadProducts(){
    this.services.getProduct().subscribe(e=>{
      this.products = e
    })
  }


  deleteProducts(id: any){
    if(confirm('Are you sure?')){
      this.services.deleteProduct(id).subscribe(()=>{
        this.loadProducts()
      })
    }
  }
}
