import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimerService } from 'src/app/timerservice.service';
import { CountdownTimer } from 'src/app/models/countdown-timer';
import { FormGroup, FormControl } from '@angular/forms';

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

  public timerForm: FormGroup;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.timer = this.timersService.timers[+id];
    this.route.params.subscribe(params => this.timer = this.timersService.timers[+params['id']]);

    this.timerForm = new FormGroup({
      seconds: new FormControl(''),
      minutes: new FormControl(''),
      hours: new FormControl('')
    });

    // this.setValues();
    this.onChanges();
  }

  setValues() {
    this.timerForm
        .setValue({
            seconds: 0,
            minutes: 0,
            hours: 0
        });
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
      this.router.navigate(['main', 'main', 'multi']);
  }

  onChanges(): void {
    this.timerForm.get('seconds').valueChanges.subscribe(val => {
      this.timer.initialSeconds = val;
    });

    this.timerForm.get('minutes').valueChanges.subscribe(val => {
      this.timer.initialMinutes = val;
    });

    this.timerForm.get('hours').valueChanges.subscribe(val => {
      this.timer.initialHours = val;
    });
  }
}
