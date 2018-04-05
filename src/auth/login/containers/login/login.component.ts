import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  error: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  async loginUser(event: FormGroup) {
    this.error = '';
    //console.log('event.value = ', event.value);
    // destruct the properties we want from event.value
    const { email, password } = event.value;
    //console.log('email = ', email);
    //console.log('password = ', password);
    // await for this promise to resolve
    try {
      await this.authService.loginUser(email, password);
      console.log('user logged in successfully...')
      this.router.navigate(['/']);
    } catch (err) {
      this.error = err;
      console.log(err.message);
    }
  }
}