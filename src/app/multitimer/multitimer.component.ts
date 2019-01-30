import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timerservice.service';
import { CountdownTimer } from '../models/countdown-timer';

@Component({
  selector: 'app-multitimer',
  templateUrl: './multitimer.component.html',
  styleUrls: ['./multitimer.component.css']
})
export class MultitimerComponent implements OnInit {

  constructor(private timerService: TimerService) { }

  ngOnInit() {
  }

  public get timers(): CountdownTimer[] {
    return this.timerService.timers;
  }
}
