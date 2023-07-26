import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartdetials:Cart={}as Cart
  cartisempty:boolean= true
  isloading:boolean=true



  constructor(private _cartService:CartService){
    if(this.cartdetials.data==null){
      this.isloading=false
    }

  }


  ngOnInit(): void {
    // this.checkcart()
    this.getcart()
  }

  getcart(){
    return this._cartService.getcart().subscribe({
      next:(res)=>{
        this.cartdetials = res
      this.cartisempty= true
      this.isloading= true


      },
      error:(err)=>{
        // console.log(err.error.statusMsg)
        if(err.error.statusMsg=="fail"){
          this.cartisempty= false
          this.isloading= true

        }
      }
      
      
    })
  }
  // checkcart(){
  //   if(this.cartdetials.numOfCartItems==0){
  //     this.cartisempty= false
  //   }else{
  //     this.cartisempty= true

  //   }

  // }
  updatecart(id:string,count:number){
    this._cartService.updatecart(id,count).subscribe({
      next:(res)=>{
        this.cartdetials=res

      },
      error:(err)=>console.log(err)
      
    })
  }

  removeitem(id:string){
    this._cartService.removeitem(id).subscribe({
      next:(res)=>this.cartdetials=res,
      error:(err)=>console.log(err)
      
    })
  }

  removecart(){
    this._cartService.removecart().subscribe({
      next:(res)=>{
        this.cartdetials=res
      this.cartisempty= false
      this.isloading=true

      },
      error:(err)=>console.log(err)
      
      
    })
  }


}
