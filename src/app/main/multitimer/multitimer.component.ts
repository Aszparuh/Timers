import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimerService } from 'src/app/timerservice.service';
import { CountdownTimer } from 'src/app/models/countdown-timer';

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
    this.router.navigate(['main', 'main', 'timer', id]);
  }
}
