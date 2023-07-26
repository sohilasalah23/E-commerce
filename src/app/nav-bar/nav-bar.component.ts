import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isloggedin:boolean=false
  constructor(private _authservice:AuthService){
    this._authservice.userdata.subscribe((res)=>{
      if(this._authservice.userdata.getValue()){
        this.isloggedin=true
      }else{
        this.isloggedin=false
      }
    })
  }



  logout(){
    this._authservice.logout()
  }

}
