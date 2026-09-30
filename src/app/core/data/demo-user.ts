import { ApiUser } from '../models/api';

/** Conta fixa da demonstração (sem backend). */
export const DEMO_USER = {
  name: 'Cleare Redfield',
  email: 'cleare.redfield@mikhalateia.demo',
  password: 'Redfield29',
  phone: '(00) 9876-5432',
  birthDate: '1990-05-15',
} as const;

export const DEMO_USER_PROFILE: ApiUser = {
  id: 'demo-cleare-redfield',
  name: DEMO_USER.name,
  email: DEMO_USER.email,
  phone: DEMO_USER.phone,
  birthDate: DEMO_USER.birthDate,
  avatarUrl: null,
  createdAt: '2026-09-29T12:00:00.000Z',
  updatedAt: '2026-09-29T12:00:00.000Z',
};

/** Reserva de exemplo com check-in em 29 de setembro de 2026. */
export const DEMO_RESERVATIONS = [
  {
    id: 'demo-res-2026-09-29',
    checkIn: '2026-09-29',
    checkOut: '2026-10-02',
    total: '747.00',
    status: 'confirmed',
    roomName: 'Luxo Casal',
  },
] as const;
