import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'


import { AuthService } from '../../shared/services/auth/auth.services';


@Injectable()
export class AuthGuard implements CanActivate {

  
  constructor(private router: Router,
              private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.authService.authState
      .map((user) => {
        // if no user logged in, go to login page
        if (!user) {
          this.router.navigate(['/auth/login']);
        }
        return !!user;
      });

  }
}