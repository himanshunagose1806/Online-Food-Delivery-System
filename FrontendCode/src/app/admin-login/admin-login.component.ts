import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Admin } from '../models/admin.model';

@Component({
  selector: 'app-admin-login',
  standalone: false,
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  restLoginForm!: FormGroup;
  message = '';
  showPassword: boolean = false;
  redirectUrl: string = '/admin-dashboard';
  loginSuccess: boolean = false; // flag for animation

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.restLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.route.queryParams.subscribe(params => {
      this.redirectUrl = '/admin-dashboard';
    });
  }

  onLoginSuccess(): void {
    if (this.restLoginForm.invalid) return;

    const { email, password } = this.restLoginForm.value;

    const Admin1: Admin = {
      aName: 'Admin',
      aEmail: 'admin@gmail.com',
      password: 'admin123'
    };

    if (email === Admin1.aEmail && password === Admin1.password) {
      this.message = 'Login successful!';
      this.loginSuccess = true; 
      this.authService.adminLogin(Admin1);

      setTimeout(() => {
        this.router.navigate([this.redirectUrl]);
      }, 4000); 
    } else {
      this.message = 'Invalid email or password.';
      this.loginSuccess = false;
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
