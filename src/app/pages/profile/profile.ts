import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DEMO_RESERVATIONS } from '../../core/data/demo-user';
import { AuthService } from '../../core/services/auth';
import { FIELD_MAX, sanitizeText } from '../../core/utils/sanitize';
import { PageHeader } from '../../layout/page-header/page-header';

@Component({
  selector: 'app-profile',
  imports: [PageHeader, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  private readonly auth = inject(AuthService);

  readonly loading = signal(true);
  readonly maxLen = FIELD_MAX;
  message = '';
  error = '';

  form = { name: '', email: '', phone: '', birthDate: '' };
  password = { current: '', next: '', confirm: '' };
  reservations = [...DEMO_RESERVATIONS];

  ngOnInit(): void {
    this.auth.me().subscribe({
      next: (user) => {
        this.form = {
          name: user.name,
          email: user.email,
          phone: user.phone ?? '',
          birthDate: user.birthDate ?? '',
        };
        this.loading.set(false);
      },
      error: () => {
        this.error = 'Não foi possível carregar o perfil.';
        this.loading.set(false);
      },
    });
  }

  saveProfile(): void {
    this.message = '';
    this.error = '';
    const name = sanitizeText(this.form.name);
    const phone = sanitizeText(this.form.phone);
    this.form.name = name;
    this.form.phone = phone;
    if (name.length > this.maxLen || phone.length > this.maxLen) {
      this.error = `Campos com no máximo ${this.maxLen} caracteres.`;
      return;
    }
    this.auth
      .updateProfile({
        name,
        phone: phone || undefined,
        birthDate: this.form.birthDate || undefined,
      })
      .subscribe({
        next: () => {
          this.message = 'Perfil atualizado (demo local).';
        },
        error: (err) => {
          this.error = err?.message ?? 'Falha ao atualizar perfil.';
        },
      });
  }

  savePassword(): void {
    this.message = '';
    this.error = '';
    const current = sanitizeText(this.password.current);
    const next = sanitizeText(this.password.next);
    const confirm = sanitizeText(this.password.confirm);
    if (next !== confirm) {
      this.error = 'As novas senhas não coincidem.';
      return;
    }
    this.auth.changePassword(current, next).subscribe({
      next: () => {
        this.message = 'Senha validada (demo: a senha fixa da conta não muda).';
        this.password = { current: '', next: '', confirm: '' };
      },
      error: (err) => {
        this.error = err?.message ?? 'Falha ao alterar senha.';
      },
    });
  }

  logout(): void {
    this.auth.logout();
  }
}
