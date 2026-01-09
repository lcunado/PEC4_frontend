import { Component } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { UserService } from '../services/user.service'; 
import { UserStoreService } from '../services/user-store.service'; 
import { Router } from '@angular/router'; 

@Component({ 
  selector: 'app-login', 
  templateUrl: './login.component.html', 
}) 

export class LoginComponent { 
  form: FormGroup; 
  errorMessage = ''; 
  
  constructor( 
    private fb: FormBuilder, 
    private userService: UserService, 
    private userStore: UserStoreService, 
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
    
    this.userService.login(username, password).subscribe({ 
      next: (response) => { 
        const fakeToken = 'FAKE_TOKEN_' + username;
        this.userStore.setToken(fakeToken); 
        this.router.navigate(['/article/list']); 
      }, 
      error: () => { 
        this.errorMessage = 'Credenciales inválidas'; 
      }, 
    }); 
  } 
}
