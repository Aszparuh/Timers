import { Injectable } from '@angular/core';
import { CountdownTimer } from './models/countdown-timer';
import { Observable, interval } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public timers: CountdownTimer[];
  private counter: Observable<Number>;

  constructor(private notificationService: NotificationService) {
    this.counter = interval(1000);
    this.timers = new Array(
      new CountdownTimer(this.counter, notificationService),
      new CountdownTimer(this.counter, notificationService),
      new CountdownTimer(this.counter, notificationService),
      new CountdownTimer(this.counter, notificationService),
      new CountdownTimer(this.counter, notificationService),
      new CountdownTimer(this.counter, notificationService),
      new CountdownTimer(this.counter, notificationService),
      new CountdownTimer(this.counter, notificationService),
      new CountdownTimer(this.counter, notificationService),
      new CountdownTimer(this.counter, notificationService),
    );
  }
}
