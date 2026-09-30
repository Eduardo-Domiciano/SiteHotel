import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { careerAreas } from '../../core/data/hotel';
import {
  FIELD_MAX,
  sanitizeEmail,
  sanitizeText,
  withinMaxLength,
} from '../../core/utils/sanitize';
import { PageHeader } from '../../layout/page-header/page-header';

const ALLOWED_RESUME = new Set(['.pdf', '.doc', '.docx']);

@Component({
  selector: 'app-career',
  imports: [PageHeader, FormsModule],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {
  readonly areas = careerAreas;
  readonly maxLen = FIELD_MAX;
  form = { area: '', name: '', phone: '', email: '', fileName: '' };
  private file: File | null = null;
  message = '';

  onFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    if (!file) {
      this.file = null;
      this.form.fileName = '';
      return;
    }
    const ext = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    if (!ALLOWED_RESUME.has(ext)) {
      this.message = 'Envie apenas PDF, DOC ou DOCX.';
      input.value = '';
      this.file = null;
      this.form.fileName = '';
      return;
    }
    this.file = file;
    this.form.fileName = sanitizeText(file.name, 120);
    this.message = '';
  }

  submit(): void {
    const area = sanitizeText(this.form.area);
    const name = sanitizeText(this.form.name);
    const phone = sanitizeText(this.form.phone);
    const email = sanitizeEmail(this.form.email);

    this.form.area = area;
    this.form.name = name;
    this.form.phone = phone;
    this.form.email = email;

    if (!area || !name || !email) {
      this.message = 'Preencha área, nome e e-mail.';
      return;
    }
    if (!this.areas.includes(area)) {
      this.message = 'Selecione uma área de atuação válida.';
      return;
    }
    if (!withinMaxLength(name) || !withinMaxLength(email)) {
      this.message = `Nome e e-mail: no máximo ${this.maxLen} caracteres.`;
      return;
    }
    if (phone && phone.length > this.maxLen) {
      this.message = `Telefone: no máximo ${this.maxLen} caracteres.`;
      return;
    }
    if (!email.includes('@')) {
      this.message = 'Informe um e-mail válido.';
      return;
    }

    this.message = `Candidatura de ${name} para ${area} registrada. A confirmação foi enviada por e-mail para ${email}.`;
  }
}
