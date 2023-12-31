import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FeaturedproductsComponent } from './featuredproducts/featuredproducts.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoriesComponent } from './categories/categories.component';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { SearchproductPipe } from './searchproduct.pipe';
import { BrandsComponent } from './brands/brands.component';
import { BrandDetialsComponent } from './brand-detials/brand-detials.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FeaturedproductsComponent,
    ProductItemComponent,
    ProductDetialsComponent,
    CategoriesComponent,
    MainsliderComponent,
    SearchproductPipe,
    BrandsComponent,
    BrandDetialsComponent,
    CheckoutComponent,
    AllordersComponent,
    LoaderComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   HttpClientModule,
   BrowserAnimationsModule,
   CarouselModule,
   FormsModule  

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
