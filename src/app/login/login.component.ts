import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isloading:boolean=false
  isnotvalidform:boolean=false
  APIerrer:string=""


constructor(private _authService:AuthService, private _router:Router){
  if(localStorage.getItem("usertoken")!=null){
    this._authService.checklogged()
  }
}


  loginform:FormGroup = new FormGroup(
    {
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    }
  )



  login(form:FormGroup){
    console.log("hiiii" , form);
   if(form.valid){
      this.isloading=true
    this._authService.login(form.value).subscribe({
      next:(res:any)=>{
        this.isloading=false
        localStorage.setItem("usertoken",res.token)
        this._authService.getuserdata()
        this._router.navigate(["/home"])
        console.log(res)



      },
      error:(err:any)=>{
        this.isloading=false
        this.APIerrer= err.error.errors.msg
        console.log(err);       

        console.log(err.error.errors.msg);       
      }
      
    })

   }else{
    this.isnotvalidform = true
   }
    
    
  }

}
