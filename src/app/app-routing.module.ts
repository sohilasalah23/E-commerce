import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandDetialsComponent } from './brand-detials/brand-detials.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';

const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},

  {path:"signup",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"Categories",canActivate:[AuthGuard],component:CategoriesComponent},
  {path:"brands",canActivate:[AuthGuard],component:BrandsComponent},
  {path:"checkout/:cartId",canActivate:[AuthGuard],component:CheckoutComponent},
  {path:"allorders",canActivate:[AuthGuard],component:AllordersComponent},
  {path:"productdetials/:id",canActivate:[AuthGuard],component:ProductDetialsComponent},
  {path:"brandsdetials/:id",canActivate:[AuthGuard],component:BrandDetialsComponent},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
