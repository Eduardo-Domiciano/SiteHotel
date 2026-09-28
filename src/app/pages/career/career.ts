import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { careerAreas } from '../../core/data/hotel';
import { PageHeader } from '../../layout/page-header/page-header';

@Component({
  selector: 'app-career',
  imports: [PageHeader, FormsModule],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {
  readonly areas = careerAreas;
  form = { area: '', name: '', phone: '', email: '', fileName: '' };
  message = '';

  onFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.form.fileName = input.files?.[0]?.name ?? '';
  }

  submit(): void {
    if (!this.form.area || !this.form.name || !this.form.email) {
      this.message = 'Preencha área, nome e e-mail.';
      return;
    }
    this.message = `Candidatura de ${this.form.name} para ${this.form.area} registrada neste navegador.`;
  }
}
