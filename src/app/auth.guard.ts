import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): any {
    let user: any = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      if (user.email === 'admin' && user.password === 'admin') {
        return true;
      } else {
        this.router.navigate([''])
        return false;
      }
    } else {
      this.router.navigate([''])
      return false;
    }
  }

}
