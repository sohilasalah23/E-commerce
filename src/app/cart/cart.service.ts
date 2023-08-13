import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  token:string|null = localStorage.getItem("usertoken")
  numOfCartItems:BehaviorSubject<number>= new BehaviorSubject(0)

  constructor(private _httpClient:HttpClient) { 
    this.getcart().subscribe({
      next:(res:any)=>{
        this.numOfCartItems.next(res.numOfCartItems)
      }
    })
  }





  addtocart(id:string):Observable<any>{
    return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/cart",
    {productId:id},
   )
  }
  getcart():Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/cart",
   )
  }
  updatecart(id:string,count:number):Observable<any>{
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {count:count},
   )
  }
  removeitem(id:string):Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
  )
  }

  removecart():Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
    )
  }


  generateOnlinePayment(cartId:string , shippingAddress:any):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {shippingAddress:shippingAddress},
)
  }



  getUserOrders(cartId:string):Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${cartId}`)
    
  }

}

