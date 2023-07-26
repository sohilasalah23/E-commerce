import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Brandproduct } from '../brandproduct';

@Component({
  selector: 'app-brand-detials',
  templateUrl: './brand-detials.component.html',
  styleUrls: ['./brand-detials.component.css']
})
export class BrandDetialsComponent {
  brandid:string=""
  brandDetials:Brandproduct={} as Brandproduct
  constructor(private _activatedRoute:ActivatedRoute ,private _productsService:ProductsService ){
    this._activatedRoute.paramMap.subscribe((res:any)=>{
    this.brandid= res.params.id
    console.log(this.brandid)
  }
    )
    this._productsService.getbrandsbyid(this.brandid).subscribe({
      next:(res)=>{console.log(res.data)
        this.brandDetials= res.data},
      error:(err)=>console.log("err"+err)
      
      
    }
    )
  }

  

}
