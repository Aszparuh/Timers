import { Injectable } from '@angular/core';
import { CountdownTimer } from './models/countdown-timer';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public timers: CountdownTimer[];
  private counter: Observable<Number>;

  constructor() {
    this.counter = interval(1000);
    this.timers = new Array(
      new CountdownTimer(this.counter),
      new CountdownTimer(this.counter),
      new CountdownTimer(this.counter),
      new CountdownTimer(this.counter),
      new CountdownTimer(this.counter),
      new CountdownTimer(this.counter),
      new CountdownTimer(this.counter),
      new CountdownTimer(this.counter),
      new CountdownTimer(this.counter),
      new CountdownTimer(this.counter),
    );
  }
}
