import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
import { Timer } from './models/timer';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

	title = 'timers';
	timer: Timer;
	
	ngOnInit(): void {
		this.timer = new Timer(interval(1000));
	}

	/// Start the timer
	start() {
		this.timer.start();
	}

	/// finish timer
	finish() {
		this.timer.finish();
	}

	/// reset timer
	reset() {
		this.timer.reset();
	}

}
