import { inject } from '@angular/core';
import {  CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const notAuthenticatedGuard: CanMatchFn = (route, segments) => {


  console.log('Pasando por guard');

  const authService = inject( AuthService );
  const router = inject( Router );

  const isAuthenticated = authService.checkStatus();
  // TODO cambiar la entrada de este observable.

  if ( isAuthenticated ) {
    router.navigateByUrl('/')
    return false;
  }

  return true;
};
