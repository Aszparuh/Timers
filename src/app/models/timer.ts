import { Observable, Subscription } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

export class Timer {
    constructor(private counter: Observable<Number>) { }

    private maxSeconds: number = 1;
    private maxMinutes: number = 0;
    private maxHours: number = 0;
    private seconds: number = 0;
    private minutes: number = 0;
    private hours: number = 0;
    private sub: Subscription;

    public get MaxSeconds(): number {
        return this.maxSeconds;
    }

    public set MaxSeconds(v: number) {
        this.maxSeconds = v;
    }

    public get MaxMinutes(): number {
        return this.maxMinutes;
    }

    public set MaxMinutes(v: number) {
        this.maxMinutes = v;
    }

    public get MaxHours(): number {
        return this.maxHours;
    }

    public set MaxHours(v: number) {
        this.maxHours = v;
    }

    public get IsFinished(): boolean {
        return (this.seconds >= this.maxSeconds)
        && (this.minutes >= this.maxMinutes)
        && (this.hours >= this.maxHours);
    }

    public get Minutes() : number {
        return this.minutes;
    }

    public set Minutes(v : number) {
        this.minutes = v;
    }

    public get Seconds() : number {
        return this.seconds;
    }
    
    public set Seconds(v : number) {
        this.seconds = v;
    }
    
    public get Hours() : number {
        return this.hours;
    }
    
    public set Hours(v : number) {
        this.hours = v;
    }

    public start(): void {
        this.sub = this.counter
        .pipe(takeWhile(_ => !this.IsFinished), tap(i => this.addSecond()))
        .subscribe();
    }

    public finish(): void {
        this.seconds = this.maxSeconds;
        this.sub.unsubscribe();
    }

    public reset(): void {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }

    public addSecond(): void {
        console.log(this.seconds);
        if (this.seconds == 60) {
           this.seconds = 0;
           this.addMinute(); 
        } else {
            this.seconds += 1;
        }
    }

    public addMinute(): void {
        if (this.minutes == 60) {
            this.minutes = 0;
            this.addHour();
        } else {
            this.minutes += 1;
        }
    }

    public addHour(): void {
        this.hours += 1;
    }
}
