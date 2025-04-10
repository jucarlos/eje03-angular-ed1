import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user.interfac';
import { HttpClient } from '@angular/common/http';


type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
const baseUrl = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Los servicios son singleton. 
  private authStatus: AuthStatus = 'checking';
  private user: User | null = null;

  private http = inject( HttpClient );

  constructor() { }


  public getAuthStatus(): string {

    return this.authStatus;

  }

  public getUser(): User | null {

    return this.user;
  }


  public login( email: string, password: string ) {

    return this.http.post(`${baseUrl}/api/auth/login`, {
      email: email,
      password: password,
    }   )


  }




}
