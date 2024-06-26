import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) =>{
  if (localStorage.getItem("userToken")!=null) {
  return true;
    
  } else {
    const router: Router = inject(Router);
    router.navigate(['/login'])
  return false;
    
  }
};

