import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form: FormGroup;
  message = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required], 
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const { username, password } = this.form.value;

    this.userService.register(username, password).subscribe({
      next: () => {
        this.message = 'Usuario registrado. La contraseña por defecto es SECRET.';
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'No se ha podido registrar el usuario';
        this.message = '';
      },
    });
  }
}

