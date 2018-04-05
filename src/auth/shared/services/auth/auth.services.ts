import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  createUser(email: string, password: string) {
    return this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password);
  }

}