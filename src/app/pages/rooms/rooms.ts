import { CurrencyPipe } from '@angular/common';
import { DestroyRef, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { meetingImages } from '../../core/data/hotel';
import { nightlyFrom, nightlyPrice, rooms } from '../../core/data/rooms';
import { Room } from '../../core/models/room';
import { PageHeader } from '../../layout/page-header/page-header';
import { ReservationService } from '../../core/services/reservation';

@Component({
  selector: 'app-rooms',
  imports: [PageHeader, CurrencyPipe, FormsModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms {
  readonly rooms = rooms;
  readonly adults = signal<Record<string, number>>(
    Object.fromEntries(rooms.map((room) => [room.id, 1])),
  );
  readonly slide = signal(0);
  readonly slides = meetingImages;
  readonly event = {
    type: '',
    name: '',
    email: '',
    phone: '',
    rooms: 0,
    people: 0,
    date: '',
    coffee: false,
    lunch: false,
    dinner: false,
    sent: false,
  };

  private readonly reservation = inject(ReservationService);

  constructor() {
    const id = window.setInterval(() => {
      this.slide.update((current) => (current + 1) % this.slides.length);
    }, 2500);
    inject(DestroyRef).onDestroy(() => window.clearInterval(id));
  }

  adultsOf(room: Room): number {
    return this.adults()[room.id] ?? 1;
  }

  setAdults(room: Room, value: string | number): void {
    const next = Math.min(room.maxAdults, Math.max(1, Number(value) || 1));
    this.adults.update((map) => ({ ...map, [room.id]: next }));
  }

  from(room: Room): number {
    return nightlyFrom(room, this.adultsOf(room));
  }

  price(room: Room): number {
    return nightlyPrice(room, this.adultsOf(room));
  }

  select(room: Room): void {
    this.reservation.adults.set(this.adultsOf(room));
    this.reservation.openModal(room);
  }

  requestQuote(): void {
    this.event.sent = true;
  }
}
