import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from 'store';
import { AuthService } from '../../../auth/shared/services/auth/auth.services'
import { User } from '../../../auth/models/user.interface'


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <h6>{{ user$ | async | json }}</h6>
      <div class="wrapper">
      <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  authSubscription: Subscription;

  constructor(private store: Store,
    private authService: AuthService) { }

  ngOnInit() {
    // subscribe to initiate this observable
    this.authSubscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
