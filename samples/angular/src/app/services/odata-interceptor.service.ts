import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class OdataInterceptorService implements HttpInterceptor {
  public key: string;
  private _keyMatchExpression: RegExp = /\/(\(+.*\)+)\//;
  constructor(private http: HttpClient) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //build the service and method url from environment setting
    const newUrl: string = `${environment.serviceUrl}/${this.key || ""}${req.url}`;
    const credReq = req.clone({
      url: newUrl
    });

    return next.handle(credReq)
      .pipe(tap(event => {
        //get service key if undefined (https://www.odata.org/odata-services/service-usages/request-key-tutorial/)
        if (this.key === undefined && event instanceof HttpResponse) {
          //extract the key and store it
          let res: HttpResponse<any> = event;
          let keyResults = res.url.match(this._keyMatchExpression)
          this.key = keyResults[1];
        }
      }
      ))
      ;
  }
}
