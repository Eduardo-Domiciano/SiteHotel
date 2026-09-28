import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { hotel } from '../../core/data/hotel';

@Component({
  selector: 'app-site-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.css',
})
export class SiteNav {
  readonly hotel = hotel;
  readonly menuOpen = signal(false);

  readonly links = [
    { path: '/', label: 'Home', exact: true },
    { path: '/sobre', label: 'Sobre', exact: false },
    { path: '/acomodacoes', label: 'Acomodações', exact: false },
    { path: '/login', label: 'Login', exact: false },
    { path: '/trabalhe-conosco', label: 'Trabalhe Conosco', exact: false },
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
