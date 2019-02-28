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
      new CountdownTimer(this.counter, notificationService, 1),
      new CountdownTimer(this.counter, notificationService, 2),
      new CountdownTimer(this.counter, notificationService, 3),
      new CountdownTimer(this.counter, notificationService, 4),
      new CountdownTimer(this.counter, notificationService, 5),
      new CountdownTimer(this.counter, notificationService, 6),
      new CountdownTimer(this.counter, notificationService, 7),
      new CountdownTimer(this.counter, notificationService, 8),
      new CountdownTimer(this.counter, notificationService, 9),
      new CountdownTimer(this.counter, notificationService, 10),
    );
  }
}
