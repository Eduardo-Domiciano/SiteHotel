import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loginBackgrounds } from '../../core/data/hotel';
import { PageHeader } from '../../layout/page-header/page-header';

@Component({
  selector: 'app-login',
  imports: [PageHeader, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  readonly background =
    loginBackgrounds[Math.floor(Math.random() * loginBackgrounds.length)];
  mode: 'login' | 'signup' = 'login';
  message = '';

  login = { email: '', password: '' };
  signup = { name: '', birth: '', email: '', password: '', confirm: '' };

  submitLogin(): void {
    if (!this.login.email || !this.login.password) {
      this.message = 'Preencha e-mail e senha.';
      return;
    }
    this.message = 'Login de demonstração: nenhum dado é enviado a um servidor.';
  }

  submitSignup(): void {
    if (this.signup.password !== this.signup.confirm) {
      this.message = 'As senhas não coincidem.';
      return;
    }
    if (!this.signup.name || !this.signup.email || !this.signup.password) {
      this.message = 'Preencha nome, e-mail e senha.';
      return;
    }
    this.message = `Conta de demonstração criada para ${this.signup.name}.`;
  }
}
