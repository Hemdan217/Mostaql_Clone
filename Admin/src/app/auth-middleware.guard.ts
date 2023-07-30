import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './admin/auth.service';
import Swal from 'sweetalert2';
export const AuthMiddlewareGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log('Hi Firsrt 2124');
  if (authService.isAuthenticated) {
    return true;
  } else {
    Swal.mixin({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      title: 'You Must Login First',
      icon: 'error',
    }).fire();
    router.navigate(['/admin/login']);
    return false;
  }
};
