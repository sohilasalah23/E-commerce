import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  allcategories:Category[]= []

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive:{
      0:{
          items:1,
          nav:true
      },
      400:{
        items:2,
        nav:true
      },
      600:{
          items:3,
          nav:true
      },
      1000:{
          items:5,
          nav:true,
          loop:true
      }
  }
  }

  constructor(private _productsService:ProductsService){}



  ngOnInit(): void {
    this.getcategories()
  }


  getcategories(){
    this._productsService.getcategories().subscribe({
      next:(res)=>{
        this.allcategories=res.data
        console.log(res.data)
      }
    })
  }

}
