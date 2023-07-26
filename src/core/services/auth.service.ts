import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userdata:BehaviorSubject<any>= new BehaviorSubject("")




  constructor(private _hTTP:HttpClient , private _router:Router) {
    if(localStorage.getItem("usertoken")){
      this.getuserdata()
    }
   }






getuserdata(){
  let encodedtoken = JSON.stringify(localStorage.getItem("usertoken"))
  let encoded=jwtDecode(encodedtoken)
  this.userdata.next(encoded)
}



  register(data:any):Observable<any>{
    return this._hTTP.post("https://ecommerce.routemisr.com/api/v1/auth/signup",data)
    console.log("done");
    
  }


  login(data:any):Observable<any>{
    return this._hTTP.post("https://ecommerce.routemisr.com/api/v1/auth/signin",data)
    console.log("done");
    
  }


  logout(){
    localStorage.removeItem("usertoken")
    this.userdata.next(null)
    this._router.navigate(["/login"])
  }



  checklogged(){
    if(localStorage.getItem("usertoken")!=null){
      this._router.navigate(['/home'])
    }
  }
}
