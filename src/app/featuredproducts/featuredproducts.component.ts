import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-featuredproducts',
  templateUrl: './featuredproducts.component.html',
  styleUrls: ['./featuredproducts.component.css']
})
export class FeaturedproductsComponent implements OnInit {
  allproduct:Product[]=[]
  searchterm:string=""

  constructor(private _productservice:ProductsService){}



ngOnInit(): void {
  this.getallproduct()
}


  getallproduct(){
    this._productservice.getproducts().subscribe({
      next:(res)=>{
        this.allproduct = res.data
      },
      error:(err)=>{
        console.log(err)

      }
    })
  }

}
