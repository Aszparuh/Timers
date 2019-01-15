import { Observable, Subscription } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

export class Timer {
    constructor(private counter: Observable<Number>) { }

    private max: number = 1;
    private current: number;
    private sub: Subscription;

    public start(): void {
        this.sub = this.counter
        .pipe(takeWhile(_ => !this.IsFinished), tap(i => this.current += 0.1))
        .subscribe();
    }

    public finish(): void {
        this.current = this.max;
        this.sub.unsubscribe();
    }

    public reset(): void {
        this.current = 0;
    }

    public get Max(): number {
        return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
    }

    public set Max(v: number) {
        this.max = v;
    }

    public get Current(): number {
        return isNaN(this.current) || this.current < 0 ? 0 : this.current;
    }

    public get IsFinished(): boolean {
        return this.Current >= this.Max;
    }
    
}
