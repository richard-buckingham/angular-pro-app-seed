import { Component, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent {

  @Output() submitted = new EventEmitter<FormGroup>();
  
  // define the form
  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  })
  
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if (this.form.valid) {
      // emit event
      this.submitted.emit(this.form);
    }
  }

  get passwordInvalid() : boolean {
    const control = this.form.get('password');
    return control.hasError('required') && control.touched;
  }

  get emailFormat(): boolean {
    const control = this.form.get('email');
    return control.hasError('email') && control.touched;
  }  
}
