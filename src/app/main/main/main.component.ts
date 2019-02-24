import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/timerservice.service';
import { CountdownTimer } from 'src/app/models/countdown-timer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private timerService: TimerService) {
  }

  ngOnInit(): void {
  }

  getTimers(): CountdownTimer[] {
      return this.timerService.timers;
  }
}
