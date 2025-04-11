import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user.interfac';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AuthResponse } from '../interfaces/login-response.interface';
import { UserDto } from '../interfaces/userdto.interface';


type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
const baseUrl = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Los servicios son singleton. 
  private authStatus: AuthStatus = 'not-authenticated';
  private user: User | null = null;
  private token: string = localStorage.getItem('token') || '';

  private http = inject( HttpClient );

  constructor() {
    this.checkStatus().subscribe();
  }


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
    localStorage.removeItem('token');
  }


  public checkStatus(): Observable<boolean> {

    this.authStatus = 'checking';
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return of ( false );
    }


    return this.http.get<AuthResponse>(`${baseUrl}/api/auth/check-status`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .pipe (

      tap( resp => {
        return this.authenticationSuccess( resp );
       }),

       map( () => true ),

       catchError( error => {
        this.logout();
        return of ( false );
       })
    )
  }


  public login( email: string, password: string ): Observable<boolean> {

    return this.http.post<AuthResponse>(`${baseUrl}/api/auth/login`, {
      email: email,
      password: password,
    })
    .pipe(

      tap( resp => {
       return this.authenticationSuccess( resp );
      }),

      map( ( ) => true  ),

      catchError ( error => {

        this.logout();
        return of( false );
      })

    )

  }


  register( userDto: UserDto ): Observable<boolean> {

    this.authStatus = 'checking';

    return this.http.post<AuthResponse>(`${baseUrl}/api/auth/register` 
      ,  userDto )
    .pipe(
      tap( resp => {    /// si todo va bien
        this.authenticationSuccess( resp );
      }),
      map( () => true ),
      catchError( ( error: any ) => {
        // this.logout();
        // return of ( false );
        return this.authenticationError( error );
      })
    )
  }



  private authenticationSuccess( resp: AuthResponse ): Observable<boolean> {

    this.authStatus = 'authenticated';
    this.user = resp.user;
    this.token = resp.token;

    localStorage.setItem('token', this.token);
    return of ( true );
    
  }

  private authenticationError ( error : any ): Observable<boolean> {
    this.logout();
    return of(false);
  }





}
