import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  // cartid:string|null = localStorage.getItem("cartid")


  cartid:string=""

  shippingAddress:FormGroup= new FormGroup({
    details:new FormControl('',Validators.required),
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(13)]),
    city:new FormControl('',Validators.required),
  })


  constructor(private _CartService:CartService , private _activatedRoute:ActivatedRoute){
    this._activatedRoute.paramMap.subscribe(
      (res:any)=>{
        this.cartid=res.params.cartId

      }
    )
  }



  handleOnline(){
    this._CartService.generateOnlinePayment(this.cartid,this.shippingAddress.value).subscribe({
      next:(res)=>{
        console.log(res.session.client_reference_id)
        localStorage.setItem("cartid",res.session.client_reference_id)


        if(res.status=="success"){
        

          console.log(res.session.url)
          window.location.href=res.session.url
        }
      }
    })
  }
}
