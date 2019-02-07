import { Injectable, ErrorHandler } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     return next.handle(request).retry(5);
   }
 }

//     const newRequest = request.clone({
//
//   });
//
//   console.log(newRequest);
//
//   return next.handle(newRequest).do(
//     succ => console.log(succ),
//     err => {
//     // (event: HttpEvent<any>) => {}, (err: any) => {
//     if (err.status === 403 ) {
//       console.error('Error Message Working');
//
//
// }})}
// }
