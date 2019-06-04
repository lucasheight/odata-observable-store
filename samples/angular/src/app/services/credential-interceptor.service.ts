import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class CredentialInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    const credReq = req.clone({
     // setHeaders: {"test1":"1","Test2":"2"}
    });
    return next.handle(credReq);
  }


  constructor() { }
}
