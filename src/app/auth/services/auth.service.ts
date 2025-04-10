import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user.interfac';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AuthResponse } from '../interfaces/login-response.interface';


type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
const baseUrl = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Los servicios son singleton. 
  private authStatus: AuthStatus = 'not-authenticated';
  private user: User | null = null;
  private token: string = '';

  private http = inject( HttpClient );

  constructor() { }


  public getAuthStatus(): AuthStatus {

    if ( this.authStatus === 'checking') {
      return 'checking'
    }
    if ( this.user ) {
      return 'authenticated'
    }

    return 'not-authenticated';

  }

  public getUser(): User | null {
    return this.user;
  }

  public getToken(): string {
    return this.token;
  }


  public logout(): void {
    this.user = null;
    this.authStatus = 'not-authenticated';
    this.token = '';
  }



  public login( email: string, password: string ): Observable<boolean> {

    return this.http.post<AuthResponse>(`${baseUrl}/api/auth/login`, {
      email: email,
      password: password,
    })
    .pipe(

      tap( resp => {
        this.authStatus = 'authenticated';
        this.user = resp.user;
        this.token = resp.token;

        
      }),

      map( ( ) => true  ),

      catchError ( error => {

        this.authStatus = 'not-authenticated';
        this.token = '';
        this.user = null;
        return of( false );
      })

    )




  }




}
