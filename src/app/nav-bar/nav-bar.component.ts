import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isloggedin:boolean=false
  numOfCartItems:number=0
  constructor(private _authservice:AuthService,private _cartservice:CartService){
    this._authservice.userdata.subscribe((res)=>{
      if(this._authservice.userdata.getValue()){
        this.isloggedin=true
      }else{
        this.isloggedin=false
      }
    })



    this._cartservice.numOfCartItems.subscribe((res)=>
      this.numOfCartItems=res
    )





  }



  logout(){
    this._authservice.logout()
  }

}
