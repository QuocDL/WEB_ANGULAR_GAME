import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.scss']
})
export class DetailGameComponent {
  category = ''
  listProduct!: Product[]
  active!:boolean
  product!: Product
  userState = false
  constructor(
    private router: Router,
    private services: ProductService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
      this.loadProduct()
      this.active = true
      this.loadProductALl()
        if(sessionStorage.getItem('result')){
          this.userState = true
        }else{
          this.userState =false
        }
  }

  clickBtn(param: boolean){
    this.active = param
  }
  loadProduct(){
    const id = this.route.snapshot.params['id']
    if(id){
      this.services.getDetailProduct(id).subscribe(e=>{
        this.product = e
        this.category = JSON.stringify(e.genre)
      })
    }
  }
  loadProductALl(){
      this.services.getProduct().subscribe(e=>{
        this.listProduct = e
      })
  }

}
