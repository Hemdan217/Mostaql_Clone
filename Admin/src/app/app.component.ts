import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  ActivationEnd,
  ResolveStart,
  NavigationCancel,
} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay, finalize, pipe } from 'rxjs';
import { AuthService } from './admin/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';
  showDash: boolean = false;
  constructor(
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private authService: AuthService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('Hi Firsrt');

        this.showDash =
          this.authService.isAuthenticated && !event.url.includes('/admin');
      }
      //   this.spinnerService.show();
      // } else if (event instanceof NavigationEnd) {
      //   setTimeout(() => this.spinnerService.hide(), 1000);
      // }
    });
  }
}
