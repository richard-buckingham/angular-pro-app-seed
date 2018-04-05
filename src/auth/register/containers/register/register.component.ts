import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.services';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  error: string;

  constructor(private authService: AuthService, private router: Router) { }

  async registerUser(event: FormGroup) {
    this.error = '';
    //console.log('event.value = ', event.value);
    // destruct the properties we want from event.value
    const { email, password } = event.value;
    //console.log('email = ', email);
    //console.log('password = ', password);
    // await for this promise to resolve
    try {
      await this.authService.createUser(email, password);
      this.router.navigate(['/']);
    } catch (err) {
      this.error = err;
      console.log(err.message);
    }
  }


}