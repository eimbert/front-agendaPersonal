import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type PriceTierName = 'Hora valle' | 'Hora media' | 'Hora punta';

interface PriceTier {
  name: PriceTierName;
  price: number;
  color: string;
}

interface SessionSlot {
  id: string;
  date: string;
  time: string;
  tier: PriceTierName;
  price: number;
  color: string;
  reserved?: boolean;
}

interface CalendarDay {
  key: string;
  date: Date;
  inMonth: boolean;
  slots: SessionSlot[];
}

interface CalendarMonth {
  label: string;
  year: number;
  month: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly weekDays = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  readonly approachItems = [
    {
      icon: '01',
      title: 'Reflexión útil',
      description:
        'Un espacio para detenerse, tomar perspectiva y ordenar lo que está en juego.',
    },
    {
      icon: '02',
      title: 'Mirada práctica',
      description:
        'Trabajo orientado a reconocer recursos, ampliar opciones y aterrizar decisiones.',
    },
    {
      icon: '03',
      title: 'Acción con claridad',
      description:
        'Acompañamiento para avanzar hacia objetivos concretos con rigor y sensibilidad.',
    },
  ];

  readonly focusAreas = [
    'Acompañamiento directivo',
    'Desarrollo de la función directiva y del liderazgo',
    'Profesionales del ámbito de recursos humanos',
    'Retos específicos del liderazgo femenino',
    'Preparación de profesionales senior para la jubilación',
    'Cambio vital',
  ];

  readonly credentials = [
    'Formación en Psicología',
    'Especialización en organizaciones y grupos',
    'Programa de Dirección Avanzada en Recursos Humanos por ESADE',
    'Programa Certificado de Coaching Integral, Life & Executive Coach',
  ];

  readonly priceTiers: PriceTier[] = [
    { name: 'Hora valle', price: 55, color: '#2f6f68' },
    { name: 'Hora media', price: 75, color: '#9b7a38' },
    { name: 'Hora punta', price: 95, color: '#6f5f8f' },
  ];

  readonly testimonials = [
    {
      name: 'Marta G.',
      context: 'Transición profesional',
      quote:
        'Me ayudó a convertir una etapa confusa en decisiones concretas. Sentí escucha, orden y mucha honestidad.',
    },
    {
      name: 'Daniel R.',
      context: 'Promoción directiva',
      quote:
        'Las sesiones fueron muy prácticas. Salgo siempre con claridad sobre qué conversación debo tener y cómo prepararla.',
    },
    {
      name: 'Laura P.',
      context: 'Desarrollo personal',
      quote:
        'Un espacio tranquilo y exigente a la vez. Me sirvió para recuperar foco sin sentirme juzgada.',
    },
    {
      name: 'Ana S.',
      context: 'Gestión de prioridades',
      quote:
        'La agenda, las notas y el seguimiento hicieron que el proceso fuera fácil de sostener entre sesiones.',
    },
  ];


  readonly deskFolders = [
    {
      id: 'sessions',
      title: 'Mis sesiones',
      description: 'Histórico, coste y observaciones',
      count: '6',
    },
    {
      id: 'notes',
      title: 'Mis notas',
      description: 'Anotaciones privadas por fecha',
      count: '4',
    },
    {
      id: 'contracts',
      title: 'Acuerdo de acompañamiento',
      description: 'PDF, objetivos y sesiones previstas',
      count: '2',
    },
    {
      id: 'goals',
      title: 'Objetivos y seguimiento',
      description: 'Acciones acordadas entre sesiones',
      count: '5',
    },
  ];

  readonly sessionRecords = [
    {
      date: '12/06/2026',
      time: '17:00',
      cost: '75 EUR',
      agreementTitle: 'Transición profesional',
      observations: 'Revisar opciones de cambio y preparar conversación con dirección.',
    },
    {
      date: '29/05/2026',
      time: '11:00',
      cost: '55 EUR',
      agreementTitle: 'Transición profesional',
      observations: 'Identificación de recursos personales y primeras acciones de foco.',
    },
    {
      date: '15/05/2026',
      time: '18:00',
      cost: '95 EUR',
      agreementTitle: 'Liderazgo y prioridades',
      observations: 'Trabajo sobre límites, delegación y preparación de reunión de equipo.',
    },
    {
      date: '24/04/2026',
      time: '09:30',
      cost: '55 EUR',
      agreementTitle: 'Liderazgo y prioridades',
      observations: 'Ordenar prioridades de la semana y distinguir urgencias de decisiones relevantes.',
    },
    {
      date: '10/04/2026',
      time: '12:30',
      cost: '95 EUR',
      agreementTitle: 'Cambio vital',
      observations: 'Explorar el impacto personal del cambio y definir señales de avance realistas.',
    },
    {
      date: '27/03/2026',
      time: '11:00',
      cost: '75 EUR',
      agreementTitle: 'Cambio vital',
      observations: 'Primera revisión de objetivos, expectativas del proceso y compromiso entre sesiones.',
    },
  ];

  readonly noteRecords = [
    {
      date: '12/06/2026',
      text: 'Salgo con más claridad sobre el siguiente paso. Necesito concretar qué conversaciones evitaré posponer.',
    },
    {
      date: '29/05/2026',
      text: 'Detecto que el bloqueo principal no es técnico sino de confianza en la decisión.',
    },
    {
      date: '15/05/2026',
      text: 'Me llevo como tarea observar cuándo digo sí por inercia.',
    },
    {
      date: '24/04/2026',
      text: 'Quiero observar mejor qué decisiones me dan energía y cuáles sostengo solo por costumbre.',
    },
  ];

  readonly contractRecords = [
    {
      title: 'Transición profesional',
      date: '01/06/2026',
      sessions: '6 sesiones estimadas',
      status: 'Activo',
      objectives: 'Clarificar opciones, preparar decisiones y sostener el plan de cambio.',
    },
    {
      title: 'Liderazgo y prioridades',
      date: '20/04/2026',
      sessions: '4 sesiones estimadas',
      status: 'Cerrado',
      objectives: 'Trabajar límites, delegación y comunicación con el equipo.',
    },
  ];

  readonly goalRecords = [
    {
      title: 'Preparar conversación pendiente',
      due: 'Antes de la próxima sesión',
      status: 'En curso',
    },
    {
      title: 'Definir tres criterios de decisión',
      due: 'Esta semana',
      status: 'Pendiente',
    },
    {
      title: 'Registrar situaciones de sobrecarga',
      due: 'Durante 7 días',
      status: 'En curso',
    },
    {
      title: 'Revisar límites de disponibilidad',
      due: 'Próximos 10 días',
      status: 'Pendiente',
    },
    {
      title: 'Escribir aprendizajes de cierre',
      due: 'Tras cada sesión',
      status: 'Activo',
    },
  ];

  readonly months = this.buildMonths();
  readonly slots = this.buildSlots();

  currentPage: 'home' | 'client' = 'home';
  currentMonthIndex = 0;
  selectedDate = this.slots[0]?.date ?? this.formatDate(new Date());
  selectedTier: PriceTierName | 'Todas' = 'Todas';
  selectedDeskFolder = 'sessions';
  activeTestimonialIndex = 0;
  pendingSlot: SessionSlot | null = null;
  nextSession: SessionSlot | null = null;
  cancellationPending = false;
  reservedSlotId = '';
  reservationMessage = '';
  importMessage = '';
  privateNote =
    'Me sentí más centrada después de la sesión y quiero trabajar la conversación pendiente esta semana.';
  photoAvailable = true;
  logoAvailable = false;

  get visibleDays(): CalendarDay[] {
    const month = this.months[this.currentMonthIndex];
    const firstDay = new Date(month.year, month.month, 1);
    const startOffset = (firstDay.getDay() + 6) % 7;
    const start = new Date(month.year, month.month, 1 - startOffset);

    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      const key = this.formatDate(date);
      const slots = this.slots.filter((slot) => {
        const tierMatches = this.selectedTier === 'Todas' || slot.tier === this.selectedTier;
        return slot.date === key && tierMatches;
      });

      return {
        key,
        date,
        inMonth: date.getMonth() === month.month,
        slots,
      };
    });
  }

  get selectedSlots(): SessionSlot[] {
    return this.slots.filter((slot) => {
      const tierMatches = this.selectedTier === 'Todas' || slot.tier === this.selectedTier;
      return slot.date === this.selectedDate && tierMatches;
    });
  }

  get selectedDateLabel(): string {
    const date = this.parseDate(this.selectedDate);
    return new Intl.DateTimeFormat('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }).format(date);
  }

  get activeTestimonial() {
    return this.testimonials[this.activeTestimonialIndex];
  }

  get nextSessionLabel(): string {
    if (!this.nextSession) {
      return '';
    }

    const date = this.parseDate(this.nextSession.date);
    const day = new Intl.DateTimeFormat('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }).format(date);

    return day + ' · ' + this.nextSession.time + ' h';
  }

  get canEnterNextSession(): boolean {
    if (!this.nextSession) {
      return false;
    }

    return Date.now() >= this.getSessionDateTime(this.nextSession).getTime();
  }

  get canCancelNextSession(): boolean {
    if (!this.nextSession) {
      return false;
    }

    const cancellationLimit = this.getSessionDateTime(this.nextSession).getTime() - 24 * 60 * 60 * 1000;
    return Date.now() < cancellationLimit;
  }

  previousMonth(): void {
    if (this.currentMonthIndex > 0) {
      this.currentMonthIndex -= 1;
      this.selectFirstAvailable();
    }
  }

  nextMonth(): void {
    if (this.currentMonthIndex < this.months.length - 1) {
      this.currentMonthIndex += 1;
      this.selectFirstAvailable();
    }
  }

  selectDate(day: CalendarDay): void {
    if (!day.slots.length) {
      return;
    }

    this.selectedDate = day.key;
    this.reservationMessage = '';
  }

  reserve(slot: SessionSlot): void {
    this.pendingSlot = slot;
    this.reservationMessage = '';
  }

  openPrivateArea(): void {
    this.currentPage = 'client';
    this.pendingSlot = null;
    this.cancellationPending = false;
    this.reservationMessage = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goHome(): void {
    this.currentPage = 'home';
    this.pendingSlot = null;
    this.cancellationPending = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  confirmReservation(): void {
    if (!this.pendingSlot) {
      return;
    }

    this.reservedSlotId = this.pendingSlot.id;
    this.nextSession = this.pendingSlot;
    this.reservationMessage = `Reserva solicitada para ${this.selectedDateLabel}, ${this.pendingSlot.time}. Recibirás la confirmación por email.`;
    this.pendingSlot = null;
  }

  cancelReservation(): void {
    this.pendingSlot = null;
  }

  requestCancelNextSession(): void {
    if (!this.canCancelNextSession) {
      return;
    }

    this.cancellationPending = true;
  }

  confirmCancelNextSession(): void {
    if (!this.canCancelNextSession) {
      return;
    }

    this.nextSession = null;
    this.reservedSlotId = '';
    this.cancellationPending = false;
    this.reservationMessage = 'Cita cancelada correctamente.';
  }

  dismissCancelNextSession(): void {
    this.cancellationPending = false;
  }

  downloadPlanning(): void {
    this.importMessage = 'La planificación se está preparando para descarga.';
  }

  simulateImport(): void {
    this.importMessage =
      'Planificación actualizada. Las citas ya reservadas se han mantenido sin cambios.';
  }

  onPhotoError(): void {
    this.photoAvailable = false;
  }

  private selectFirstAvailable(): void {
    const month = this.months[this.currentMonthIndex];
    const firstSlot = this.slots.find((slot) => {
      const date = this.parseDate(slot.date);
      return date.getMonth() === month.month && date.getFullYear() === month.year;
    });

    this.selectedDate = firstSlot?.date ?? this.formatDate(new Date(month.year, month.month, 1));
    this.reservationMessage = '';
  }

  private buildMonths(): CalendarMonth[] {
    const today = new Date();
    return Array.from({ length: 3 }, (_, index) => {
      const date = new Date(today.getFullYear(), today.getMonth() + index, 1);
      return {
        label: new Intl.DateTimeFormat('es-ES', {
          month: 'long',
          year: 'numeric',
        }).format(date),
        year: date.getFullYear(),
        month: date.getMonth(),
      };
    });
  }

  private buildSlots(): SessionSlot[] {
    const today = new Date();
    const times = ['09:30', '11:00', '12:30', '16:30', '18:00'];
    const dayOffsets = [2, 5, 7, 10, 14, 17, 21, 25, 31, 36, 42, 49, 58, 67, 76];
    const slots: SessionSlot[] = [];

    dayOffsets.forEach((offset, dayIndex) => {
      const date = new Date(today);
      date.setDate(today.getDate() + offset);
      const dateKey = this.formatDate(date);
      const availableTimes = times.slice(0, 3 + (dayIndex % 3));

      availableTimes.forEach((time, timeIndex) => {
        const tier = this.priceTiers[(dayIndex + timeIndex) % this.priceTiers.length];

        slots.push({
          id: `${dateKey}-${time}`,
          date: dateKey,
          time,
          tier: tier.name,
          price: tier.price,
          color: tier.color,
          reserved: dayIndex === 4 && timeIndex === 1,
        });
      });
    });

    return slots;
  }

  private getSessionDateTime(slot: SessionSlot): Date {
    const [hours, minutes] = slot.time.split(':').map(Number);
    const sessionDate = this.parseDate(slot.date);
    sessionDate.setHours(hours, minutes, 0, 0);
    return sessionDate;
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private parseDate(value: string): Date {
    const [year, month, day] = value.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
}
