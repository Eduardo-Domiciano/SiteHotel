const MAX_LEN = 100;

/** Remove tags HTML, caracteres de controle e limita o tamanho. */
export function sanitizeText(value: string, max = MAX_LEN): string {
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/[<>"'`;\\]/g, '')
    .trim()
    .slice(0, max);
}

export function sanitizeEmail(value: string, max = MAX_LEN): string {
  const cleaned = sanitizeText(value, max).toLowerCase();
  // Mantém só caracteres comuns de e-mail
  return cleaned.replace(/[^a-z0-9.@_+-]/g, '').slice(0, max);
}

export function withinMaxLength(value: string, max = MAX_LEN): boolean {
  return value.length > 0 && value.length <= max;
}

export const FIELD_MAX = MAX_LEN;
