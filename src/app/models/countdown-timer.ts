import { Observable, Subscription } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

export class CountdownTimer {
    private _seconds = 0;
    private _minutes = 0;
    private _hours = 0;
    private sub: Subscription;
    public isTicking: boolean;

    constructor(private counter: Observable<Number>) {
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
        if (!this.IsFinished) {
            if (this.seconds === 0) {
                this.passMinute();
            } else {
                this.seconds -= 1;
            }
        }
    }

    public passMinute(): void {
        if (this.minutes === 0) {
            this.passHour();
        } else {
            this.minutes -= 1;
            this.seconds = 59;
        }
    }

    public passHour(): void {
        if (this.hours !== 0) {
            this.hours -= 1;
            this.minutes = 59;
        }
    }

    public IsFinished(): boolean {
        return (this.seconds === 0)
            && (this.minutes === 0)
            && (this.hours === 0);
    }

    public start(): void {
        if (!this.isTicking) {
            this.sub = this.counter
            .pipe(takeWhile(_ => !this.IsFinished), tap(i => this.passSecond()))
            .subscribe();
            this.isTicking = true;
        }
    }

    public finish(): void {
        this.sub.unsubscribe();
        this.isTicking = false;
    }
}
