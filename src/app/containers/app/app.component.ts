import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from 'store';
import { AuthService } from '../../../auth/shared/services/auth/auth.services'
import { User } from '../../../auth/models/user.interface'


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  authSubscription: Subscription;

  constructor(private store: Store,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    // subscribe to initiate this observable
    this.authSubscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  async onLogout() {
    await this.authService.logout();
    // redirect to the login page
    this.router.navigate(['/auth/login']);
  }
}
