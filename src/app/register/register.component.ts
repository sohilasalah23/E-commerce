import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isloading:boolean=false
  isnotvalidform:boolean=false
  APIerrer:string=""


constructor(private _authService:AuthService, private _router:Router){
  if(localStorage.getItem("usertoken")!=null){
    this._authService.checklogged()
  }
}


  registerform:FormGroup = new FormGroup(
    {
      name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
      rePassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
      phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(13)]),
    }
  )



  register(form:FormGroup){
    console.log("hiiii" , form);
   if(form.valid){
      this.isloading=true
    this._authService.register(form.value).subscribe({
      next:(res:any)=>{
        this.isloading=false
        this._router.navigate(["/login"])
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
