import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CountdownTimer } from './models/countdown-timer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

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
