import { computed, Injectable, signal } from '@angular/core';
import { nightlyPrice } from '../data/rooms';
import { Room, SelectedRoom } from '../models/room';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  readonly open = signal(false);
  readonly checkIn = signal('');
  readonly checkOut = signal('');
  readonly adults = signal(1);
  readonly children = signal(0);
  readonly guestName = signal('');
  readonly guestPhone = signal('');
  readonly guestEmail = signal('');
  readonly selectedRooms = signal<SelectedRoom[]>([]);
  readonly confirmation = signal<string | null>(null);
  readonly error = signal<string | null>(null);

  readonly nights = computed(() => {
    const start = this.checkIn();
    const end = this.checkOut();
    if (!start || !end) return 1;
    const ms = new Date(end).getTime() - new Date(start).getTime();
    const days = Math.round(ms / 86_400_000);
    return Math.max(1, days);
  });

  readonly total = computed(() => {
    const nights = this.nights();
    return this.selectedRooms().reduce(
      (sum, item) => sum + nightlyPrice(item.room, item.adults) * nights,
      0,
    );
  });

  openModal(room?: Room): void {
    this.confirmation.set(null);
    this.error.set(null);
    if (room) {
      this.addRoom(room);
    }
    this.open.set(true);
  }

  closeModal(): void {
    this.open.set(false);
  }

  addRoom(room: Room): void {
    if (this.selectedRooms().length >= 3) return;
    const already = this.selectedRooms().some((item) => item.room.id === room.id);
    if (already) return;
    this.selectedRooms.update((list) => [
      ...list,
      {
        uid: `${room.id}-${Date.now()}`,
        room,
        adults: Math.min(this.adults(), room.maxAdults),
        children: Math.min(this.children(), room.maxChildren),
      },
    ]);
  }

  removeRoom(uid: string): void {
    this.selectedRooms.update((list) => list.filter((item) => item.uid !== uid));
  }

  updateOccupancy(uid: string, field: 'adults' | 'children', value: number): void {
    this.selectedRooms.update((list) =>
      list.map((item) => {
        if (item.uid !== uid) return item;
        const max = field === 'adults' ? item.room.maxAdults : item.room.maxChildren;
        return { ...item, [field]: Math.min(max, Math.max(field === 'adults' ? 1 : 0, value)) };
      }),
    );
  }

  confirm(): boolean {
    this.error.set(null);
    if (!this.guestName() || !this.guestPhone() || !this.guestEmail()) {
      this.error.set('Preencha nome, telefone e e-mail.');
      return false;
    }
    if (!this.checkIn() || !this.checkOut()) {
      this.error.set('Informe check-in e check-out na barra de reservas.');
      return false;
    }
    if (this.selectedRooms().length === 0) {
      this.error.set('Escolha pelo menos um quarto.');
      return false;
    }

    this.confirmation.set(
      `Reserva registrada para ${this.guestName()}. A confirmação seria enviada para ${this.guestEmail()}.`,
    );
    return true;
  }

  resetBooking(): void {
    this.selectedRooms.set([]);
    this.guestName.set('');
    this.guestPhone.set('');
    this.guestEmail.set('');
    this.confirmation.set(null);
  }
}
