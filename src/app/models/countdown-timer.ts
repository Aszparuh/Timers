import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

export class CountdownTimer {
    private _seconds = 0;
    private _minutes = 0;
    private _hours = 0;
    private _initialSeconds = 0;
    private _initialMinutes = 0;
    private _initialHours = 0;
    private sub: Subscription;
    public isTicking: boolean;
    public startButtonName = 'START';
    public isPaused = false;
    public isFinished = false;

    private audio = new Audio('./assets/audio/alarm.mp3');

    constructor(private counter: Observable<Number>) {
    }

    public get initialSeconds(): number {
        return this._initialSeconds;
    }

    public set initialSeconds(v: number) {
        if (v > 60 || v < 0) {
            throw Error('Seconds cannot be negative or more than 60');
        }

        this._initialSeconds = v;
    }

    public get initialMinutes(): number {
        return this._initialMinutes;
    }

    public set initialMinutes(v: number) {
        if (v > 60 || v < 0) {
            throw Error('Seconds cannot be negative or more than 60');
        }

        this._initialMinutes = v;
    }

    public get initialHours(): number {
        return this._initialHours;
    }

    public set initialHours(v: number) {
        if (v > 60 || v < 0) {
            throw Error('Seconds cannot be negative or more than 60');
        }

        this._initialHours = v;
    }

    public get seconds(): number {
        return this._seconds;
    }

    public set seconds(v: number) {
        if (v > 60 || v < 0) {
            throw Error('Seconds cannot be negative or more than 60');
        }

        this._seconds = v;
    }

    public get minutes(): number {
        return this._minutes;
    }

    public set minutes(v: number) {
        if (v > 60 || v < 0) {
            throw Error('Minutes cannot be negative or more than 60');
        }

        this._minutes = v;
    }

    public get hours(): number {
        return this._hours;
    }

    public set hours(v: number) {
        if (v > 99 || v < 0) {
            throw Error('Hours cannot be negative or more than 60');
        }

        this._hours = v;
    }

    public passSecond(): void {
        if (!this.isFinished && !this.timeEnded()) {
            if (this.seconds === 0) {
                this.passMinute();
            } else {
                this.seconds -= 1;
            }
        } else {
            this.finish();
            this.soundAlarm();
        }
    }

    public passMinute(): void {
        if (this.minutes === 0) {
            this.passHour();
        } else {
            this.minutes -= 1;
        }

        this.seconds = 59;
    }

    public passHour(): void {
        if (this.hours > 0) {
            this.hours -= 1;
        }

        this.minutes = 59;
    }

    public timeEnded(): boolean {
        return (this.seconds === 0)
             && (this.minutes === 0)
             && (this.hours === 0);
    }

    public start(): void {
        if (!this.isTicking) {
            if (!this.isPaused) {
                this.reset();
            }

            this.sub = this.counter
                .pipe(tap(i => this.passSecond()))
                .subscribe();
            this.isTicking = true;
            this.startButtonName = 'PAUSE';
            this.isFinished = true;
        } else {
            this.pause();
            this.startButtonName = 'START';
        }
    }

    public pause(): void {
        this.sub.unsubscribe();
        this.isTicking = false;
        this.isPaused = true;
        this.isFinished = false;
    }

    public finish(): void {
        this.sub.unsubscribe();
        this.isFinished = true;
        this.isTicking = false;
        this.startButtonName = 'START';
        this.isPaused = false;
        this.reset();
    }

    public reset(): void {
        this.seconds = this.initialSeconds;
        this.minutes = this.initialMinutes;
        this.hours = this.initialHours;
    }

    private soundAlarm(): void {
        this.audio.load();
        this.audio.play();
    }
}
