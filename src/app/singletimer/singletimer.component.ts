import { Component, OnInit } from '@angular/core';
import { CountdownTimer } from '../models/countdown-timer';
import { interval } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TimerService } from '../timerservice.service';

@Component({
  selector: 'app-singletimer',
  templateUrl: './singletimer.component.html',
  styleUrls: ['./singletimer.component.css']
})
export class SingletimerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private timersService: TimerService) {

  }
  timer: CountdownTimer;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.timer = this.timersService.timers[+id];
  }

  /// Start the timer
  start() {
      this.timer.start();
  }

  /// finish timer
  stop() {
      this.timer.stop();
  }
}
