import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userLogin: FormGroup;
  schema: any;
  s: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.userLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.authService.userLoggedOut();
    this.s = Swal.mixin({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    });
  }

  ngOnInit(): void {
    this.schema = [
      {
        name: 'email',
        type: 'email',
      },
      {
        name: 'password',
        type: 'password',
      },
    ];
  }
  login() {
    const { email, password } = this.userLogin.value;
    this.authService.login(email, password).subscribe(
      (data) => {
        this.s.fire({
          title: 'Welcome',
          icon: 'success',
        });
        this.authService.setAuthenticated(data.token);
        setTimeout(() => {
          this.router.navigate(['/users']);
        }, 1000);
      },

      (err) =>
        this.s.fire({
          title: err.error.message,
          icon: 'error',
        })
    );
  }
}
