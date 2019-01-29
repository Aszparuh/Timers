import { Component, OnInit } from '@angular/core';
import { CountdownTimer } from '../models/countdown-timer';
import { interval } from 'rxjs';

@Component({
  selector: 'app-singletimer',
  templateUrl: './singletimer.component.html',
  styleUrls: ['./singletimer.component.css']
})
export class SingletimerComponent implements OnInit {

  constructor() { }

  title = 'timers';
  timer: CountdownTimer;

  ngOnInit(): void {
      this.timer = new CountdownTimer(interval(1000));
  }

  /// Start the timer
  start() {
      this.timer.start();
  }

  /// finish timer
  finish() {
      this.timer.finish();
  }

  pause() {
      this.timer.pause();
  }

  /// reset timer
  reset() {
      // this.timer.reset();
  }

}
