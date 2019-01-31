import { Component, OnInit } from '@angular/core';
import { CountdownTimer } from '../models/countdown-timer';
import { ActivatedRoute, Router } from '@angular/router';
import { TimerService } from '../timerservice.service';

@Component({
  selector: 'app-singletimer',
  templateUrl: './singletimer.component.html',
  styleUrls: ['./singletimer.component.css']
})
export class SingletimerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private timersService: TimerService,
    private router: Router) {

  }
  timer: CountdownTimer;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.timer = this.timersService.timers[+id];
    this.route.params.subscribe(params => this.timer = this.timersService.timers[+params['id']]);
  }

  /// Start the timer
  start() {
      this.timer.start();
  }

  /// finish timer
  stop() {
      this.timer.stop();
  }

  navigateToMulti() {
      this.router.navigate(['multi']);
  }
}
