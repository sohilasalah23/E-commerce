import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.css']
})
export class ProductDetialsComponent {

  productid:string=""
  productdetials :Product= {}as Product
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  constructor(private _activatedRoute:ActivatedRoute ,private _productsService:ProductsService , private _CartService:CartService){
    this._activatedRoute.paramMap.subscribe((res:any)=>
    this.productid= res.params.id
    )
    this._productsService.getproductsbyid(this.productid).subscribe({
      next:(res)=>{
        console.log(res.data);
        this.productdetials=res.data
        
      }
    })
  }



  addtocart(id:string){
    return this._CartService.addtocart(id).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.log(err)
      
      
    })
  }

}
