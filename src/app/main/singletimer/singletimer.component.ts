import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimerService } from 'src/app/timerservice.service';
import { CountdownTimer } from 'src/app/models/countdown-timer';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-singletimer',
  templateUrl: './singletimer.component.html',
  styleUrls: ['./singletimer.component.css']
})
export class SingletimerComponent implements OnInit, OnChanges {
  timer: CountdownTimer;

  public timerForm: FormGroup;

  ngOnChanges(): void {
    this.timerForm = new FormGroup({
      seconds: new FormControl('', [Validators.min(0), Validators.max(59)]),
      minutes: new FormControl('', [Validators.min(0), Validators.max(59)]),
      hours: new FormControl('', [Validators.min(0), Validators.max(59)])
    });

    this.timerForm.reset();
    this.setValues();
    this.onChanges();
  }

  constructor(
    private route: ActivatedRoute,
    private timersService: TimerService,
    private router: Router) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.timer = this.timersService.timers[+id];
    this.route.params.subscribe(params => {
      this.timer = this.timersService.timers[+params['id']];
      this.timerForm = new FormGroup({
        seconds: new FormControl('', [Validators.min(0), Validators.max(59)]),
        minutes: new FormControl('', [Validators.min(0), Validators.max(59)]),
        hours: new FormControl('', [Validators.min(0), Validators.max(59)])
      });

      this.timerForm.reset();
      this.setValues();
      this.onChanges();
    });
  }


  get formSeconds() { return this.timerForm.get('seconds'); }
  get formMinutes() { return this.timerForm.get('minutes'); }
  get formHours() { return this.timerForm.get('hours'); }

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
      if (val > -1 && val < 60) {
        this.timer.initialSeconds = val;
      }
    });

    this.timerForm.get('minutes').valueChanges.subscribe(val => {
      if (val > -1 && val < 60) {
        this.timer.initialMinutes = val;
      }
    });

    this.timerForm.get('hours').valueChanges.subscribe(val => {
      if (val > -1 && val < 60) {
        this.timer.initialHours = val;
      }
    });
  }
}
