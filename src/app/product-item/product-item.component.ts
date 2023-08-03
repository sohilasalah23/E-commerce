import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product :Product ={} as Product

  constructor(private _cartService:CartService){}



  addtocart(id:string){
   return this._cartService.addtocart(id).subscribe({
      next:(res)=>{
        this._cartService.numOfCartItems.next(res.numOfCartItems)
      },
      error:(err)=>console.log(err)
      
      
    })
  }

}
