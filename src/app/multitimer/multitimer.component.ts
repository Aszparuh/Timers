import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timerservice.service';
import { CountdownTimer } from '../models/countdown-timer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multitimer',
  templateUrl: './multitimer.component.html',
  styleUrls: ['./multitimer.component.css']
})
export class MultitimerComponent implements OnInit {

  constructor(private timerService: TimerService, private router: Router) { }

  ngOnInit() {
  }

  public get timers(): CountdownTimer[] {
    return this.timerService.timers;
  }

  public navigateToTimer(id: string) {
    this.router.navigate(['timer', id]);

  }
}
