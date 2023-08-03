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
      next:(res)=>{
        this.numOfCartItems.next(res.numOfCartItems)
      }
    })
  }





  addtocart(id:string):Observable<any>{
    return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/cart",
    {productId:id},
    {headers:{
      token:`${this.token}`
      
    }
      
    })
  }
  getcart():Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/cart",
    {headers:{
      token:`${this.token}`    
    }
    })
  }
  updatecart(id:string,count:number):Observable<any>{
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {count:count},
     {headers:{
      token:`${this.token}`    
    }

    })
  }
  removeitem(id:string):Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
     {headers:{
      token:`${this.token}`    
    }

    })
  }

  removecart():Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
     {headers:{
      token:`${this.token}`    
    }

    })
  }


  generateOnlinePayment(cartId:string , shippingAddress:any):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {shippingAddress:shippingAddress},
     {headers:{
      token:`${this.token}`    
    }

    })
  }



  getUserOrders(cartId:string):Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${cartId}`)
    
  }

}

