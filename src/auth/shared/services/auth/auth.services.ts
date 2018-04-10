import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/add/operator/do'

import { Store } from 'store';

import { User } from '../../../models/user.interface';

@Injectable()
export class AuthService {

  // subscribe to changes in the auth state. Eg: new users, updated users, etc
  auth$ = this.angularFireAuth.authState
  // implement side effect  
  .do(next => {
      if (!next) {
        console.log('user not logged in, or has logged out');
        // no user has logged in yet, or the user has logged out. Setting user state to null
        this.store.set('user', null);
        return;
      }
      // user has logged in, set logged in user in the store
      console.log('user logged in...');
      
      const user: User = {
        email: next.email,
        uid: next.uid,
        authenticated: true
      }
      this.store.set('user', user);

    })

  constructor(private store: Store, 
              private angularFireAuth: AngularFireAuth) { }

  get authState() {
    return this.angularFireAuth.authState;
  }

  createUser(email: string, password: string) {
    return this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

}