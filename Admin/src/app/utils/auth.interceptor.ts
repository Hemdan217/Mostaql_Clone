import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const toekn = sessionStorage.getItem('token');
    if (req.url.includes('admin/auth/login')) {
      return next.handle(req);
    }
    if (toekn) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + toekn),
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
