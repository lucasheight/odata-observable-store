import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpClient,
  HttpEvent,
  HttpResponse,
} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { tap } from "rxjs";

@Injectable()
export class OdataInterceptorService implements HttpInterceptor {
  public key: string;
  private _keyMatchExpression: RegExp = /\/(\(+.*\)+)\//;
  constructor(private http: HttpClient) {}
  intercept(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: HttpRequest<any>,
    next: HttpHandler
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Observable<HttpEvent<any>> {
    const prefix = this.key
      ? `${environment.serviceUrl}/${this.key}`
      : environment.serviceUrl;
    const credReq = req.clone({ url: `${prefix}${req.url}` });

    return next.handle(credReq).pipe(
      tap((event) => {
        if (this.key === undefined && event instanceof HttpResponse) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const res: HttpResponse<any> = event;
          const keyResults = res.url?.match(this._keyMatchExpression);
          if (keyResults) {
            this.key = keyResults[1];
          }
        }
      })
    );
  }
}
