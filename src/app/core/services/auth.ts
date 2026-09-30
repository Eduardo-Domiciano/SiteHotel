import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { DEMO_USER, DEMO_USER_PROFILE } from '../data/demo-user';
import { ApiUser, AuthPayload, TokenPair } from '../models/api';
import { FIELD_MAX, sanitizeEmail, sanitizeText, withinMaxLength } from '../utils/sanitize';

const ACCESS_KEY = 'mh_access';
const REFRESH_KEY = 'mh_refresh';
const USER_KEY = 'mh_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly router = inject(Router);
  private readonly userSignal = signal<ApiUser | null>(this.readUser());

  readonly user = this.userSignal.asReadonly();
  readonly isLoggedIn = computed(() => !!this.userSignal());
  readonly fieldMax = FIELD_MAX;
  readonly demoHint = `Demo: ${DEMO_USER.email} / ${DEMO_USER.password}`;

  register(body: {
    name: string;
    email: string;
    password: string;
    phone?: string;
    birthDate?: string;
  }): Observable<AuthPayload> {
    const name = sanitizeText(body.name);
    const email = sanitizeEmail(body.email);
    const password = sanitizeText(body.password);

    const err = this.validateCredentials(name, email, password, true);
    if (err) return throwError(() => ({ message: err }));

    // Demo: cadastro só simula e autentica como Cleare Redfield
    return this.loginAsDemo();
  }

  login(email: string, password: string): Observable<AuthPayload> {
    const cleanEmail = sanitizeEmail(email);
    const cleanPassword = sanitizeText(password);

    const err = this.validateCredentials('', cleanEmail, cleanPassword, false);
    if (err) return throwError(() => ({ message: err }));

    const ok =
      cleanEmail === DEMO_USER.email.toLowerCase() && cleanPassword === DEMO_USER.password;
    if (!ok) {
      return throwError(() => ({
        message: `Use a conta demo: ${DEMO_USER.email} / ${DEMO_USER.password}`,
      }));
    }
    return this.loginAsDemo();
  }

  refresh(): Observable<AuthPayload> {
    if (!this.userSignal()) {
      return throwError(() => ({ message: 'Sessão expirada.' }));
    }
    return this.loginAsDemo();
  }

  me(): Observable<ApiUser> {
    const user = this.userSignal() ?? DEMO_USER_PROFILE;
    this.userSignal.set(user);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return of(user).pipe(delay(150));
  }

  updateProfile(body: { name: string; phone?: string; birthDate?: string }): Observable<ApiUser> {
    const name = sanitizeText(body.name);
    if (!withinMaxLength(name)) {
      return throwError(() => ({ message: `Nome: no máximo ${FIELD_MAX} caracteres.` }));
    }
    const phone = body.phone ? sanitizeText(body.phone) : null;
    const current = this.userSignal() ?? DEMO_USER_PROFILE;
    const updated: ApiUser = {
      ...current,
      name,
      phone,
      birthDate: body.birthDate || current.birthDate,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(USER_KEY, JSON.stringify(updated));
    this.userSignal.set(updated);
    return of(updated).pipe(delay(150));
  }

  changePassword(currentPassword: string, newPassword: string): Observable<void> {
    const current = sanitizeText(currentPassword);
    const next = sanitizeText(newPassword);
    if (current !== DEMO_USER.password) {
      return throwError(() => ({ message: 'Senha atual incorreta (demo).' }));
    }
    if (!withinMaxLength(next) || next.length < 8) {
      return throwError(() => ({
        message: `Nova senha: entre 8 e ${FIELD_MAX} caracteres.`,
      }));
    }
    // Demo: não altera a senha fixa da conta exemplo
    return of(undefined).pipe(delay(150));
  }

  logout(): void {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(USER_KEY);
    this.userSignal.set(null);
    void this.router.navigateByUrl('/login');
  }

  accessToken(): string | null {
    return localStorage.getItem(ACCESS_KEY);
  }

  private loginAsDemo(): Observable<AuthPayload> {
    const payload: AuthPayload = {
      user: { ...DEMO_USER_PROFILE },
      tokens: {
        accessToken: 'demo-access-token',
        refreshToken: 'demo-refresh-token',
        expiresIn: 3600,
      },
    };
    return of(payload).pipe(
      delay(200),
      tap((data) => this.persist(data)),
    );
  }

  private validateCredentials(
    name: string,
    email: string,
    password: string,
    requireName: boolean,
  ): string | null {
    if (requireName && !withinMaxLength(name)) {
      return `Nome: obrigatório, no máximo ${FIELD_MAX} caracteres.`;
    }
    if (!withinMaxLength(email) || !email.includes('@')) {
      return `E-mail: obrigatório, no máximo ${FIELD_MAX} caracteres.`;
    }
    if (!withinMaxLength(password) || password.length < 8) {
      return `Senha: entre 8 e ${FIELD_MAX} caracteres.`;
    }
    return null;
  }

  private persist(data: AuthPayload): void {
    localStorage.setItem(ACCESS_KEY, data.tokens.accessToken);
    localStorage.setItem(REFRESH_KEY, data.tokens.refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    this.userSignal.set(data.user);
  }

  private readUser(): ApiUser | null {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as ApiUser;
    } catch {
      return null;
    }
  }
}

export type { TokenPair };
