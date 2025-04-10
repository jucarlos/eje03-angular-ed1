import { inject } from '@angular/core';
import {  CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';


export const notAuthenticatedGuard: CanMatchFn = async (route, segments) => {


  console.log('Pasando por guard');

  const authService = inject( AuthService );
  const router = inject( Router );

  const isAuthenticated = await firstValueFrom(authService.checkStatus() );
  

  if ( isAuthenticated ) {
    router.navigateByUrl('/')
    return false;
  }

  return true;
};
