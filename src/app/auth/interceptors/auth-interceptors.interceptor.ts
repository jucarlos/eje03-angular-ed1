import { HttpHandlerFn, HttpRequest } from "@angular/common/http";



export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
 
 

  console.log('Pasando por el interceptor');

  const authToken = localStorage.getItem('token') || '';
  

  console.log('Pasando por el interceptor: ', authToken);
  // const authToken = inject(AuthService).getToken();
  // Clone the request to add the authentication header.

  console.log('Pasando poor interceptor: ', req);

  const newReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${authToken}`),
  });

  return next(newReq);



}