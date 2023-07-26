import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';

const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},

  {path:"signup",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"Categories",canActivate:[AuthGuard],component:CategoriesComponent},
  {path:"brands",canActivate:[AuthGuard],component:BrandsComponent},
  {path:"productdetials/:id",canActivate:[AuthGuard],component:ProductDetialsComponent},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
