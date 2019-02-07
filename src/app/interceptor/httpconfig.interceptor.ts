import { Injectable } from '@angular/core';
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

  constructor() {}

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const newRequest = request.clone({
      headers: request.headers.set
      ('Authorization',
    'token-here')
  });

  console.log(newRequest);

  return next.handle(newRequest).do(
    succ => console.log(succ),
    err => {
    // (event: HttpEvent<any>) => {}, (err: any) => {
    if (err.status === 403 ) {
      console.error('Error Message Working');


    // return next
    // .handle(request)
    // .do((event: HttpEvent<any>) => {}, (err: any) => {
    //   if (err.status === 0) {
    //     console.log('Error Message Here!');
    //   } else if (err.status === 0) {
    //     console.log('403 Error Message Here!');
    //   }
    //   console.log("Test");
    //

      // -------
        // do error handling here
      // }
//     });
//   }
}})}
}
