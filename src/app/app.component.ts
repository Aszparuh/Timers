import { Component, OnInit } from '@angular/core';
import { TimerService } from './timerservice.service';
import { CountdownTimer } from './models/countdown-timer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    constructor(private timerService: TimerService) {

    }

    ngOnInit(): void {
    }

    getTimers(): CountdownTimer[] {
        return this.timerService.timers;
    }
}
