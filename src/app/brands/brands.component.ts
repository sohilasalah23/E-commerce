import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Brandproduct } from '../brandproduct';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  products:Brandproduct[]=[]

  searchterm:string=""


  constructor(private _productsService:ProductsService){}


ngOnInit(): void {
  this.getbrands()
}



  getbrands(){
    return this._productsService.getbrands().subscribe({
      next:(res)=>{
        this.products=res.data
        console.log(this.products);
        
      },
      error:(err)=>console.log(err)
      
      
    })
  }
  
}
