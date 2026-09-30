import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DEMO_USER } from '../../core/data/demo-user';
import { loginBackgrounds } from '../../core/data/hotel';
import { AuthService } from '../../core/services/auth';
import { FIELD_MAX, sanitizeEmail, sanitizeText } from '../../core/utils/sanitize';
import { PageHeader } from '../../layout/page-header/page-header';

@Component({
  selector: 'app-login',
  imports: [PageHeader, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly background =
    loginBackgrounds[Math.floor(Math.random() * loginBackgrounds.length)];
  readonly maxLen = FIELD_MAX;
  readonly demoUser = DEMO_USER;
  mode: 'login' | 'signup' = 'login';
  message = '';
  busy = false;

  login: { email: string; password: string } = {
    email: DEMO_USER.email,
    password: DEMO_USER.password,
  };
  signup = { name: '', birth: '', email: '', password: '', confirm: '' };

  submitLogin(): void {
    const email = sanitizeEmail(this.login.email);
    const password = sanitizeText(this.login.password);
    this.login.email = email;
    this.login.password = password;

    if (!email || !password) {
      this.message = 'Preencha e-mail e senha.';
      return;
    }
    if (email.length > this.maxLen || password.length > this.maxLen) {
      this.message = `Cada campo tem no máximo ${this.maxLen} caracteres.`;
      return;
    }

    this.busy = true;
    this.message = '';
    this.auth.login(email, password).subscribe({
      next: () => {
        this.busy = false;
        void this.router.navigateByUrl('/perfil');
      },
      error: (err: HttpErrorResponse | { message?: string }) => {
        this.busy = false;
        this.message =
          (err as { message?: string }).message ||
          (err as HttpErrorResponse).error?.error?.message ||
          'Falha no login.';
      },
    });
  }

  submitSignup(): void {
    const name = sanitizeText(this.signup.name);
    const email = sanitizeEmail(this.signup.email);
    const password = sanitizeText(this.signup.password);
    const confirm = sanitizeText(this.signup.confirm);
    this.signup.name = name;
    this.signup.email = email;
    this.signup.password = password;
    this.signup.confirm = confirm;

    if (password !== confirm) {
      this.message = 'As senhas não coincidem.';
      return;
    }
    if (!name || !email || !password) {
      this.message = 'Preencha nome, e-mail e senha.';
      return;
    }
    if ([name, email, password, confirm].some((v) => v.length > this.maxLen)) {
      this.message = `Cada campo tem no máximo ${this.maxLen} caracteres.`;
      return;
    }
    if (password.length < 8) {
      this.message = 'A senha deve ter pelo menos 8 caracteres.';
      return;
    }

    this.busy = true;
    this.message = '';
    this.auth
      .register({
        name,
        email,
        password,
        birthDate: this.signup.birth || undefined,
      })
      .subscribe({
        next: () => {
          this.busy = false;
          void this.router.navigateByUrl('/perfil');
        },
        error: (err: HttpErrorResponse | { message?: string }) => {
          this.busy = false;
          this.message =
            (err as { message?: string }).message ||
            (err as HttpErrorResponse).error?.error?.message ||
            'Falha no cadastro.';
        },
      });
  }
}
