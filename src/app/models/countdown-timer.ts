export class CountdownTimer {
    private _seconds: number;
    private _minutes: number;
    private _hours: number;

    constructor(seconds: number, minutes: number, hours: number) {
        this.seconds = seconds;
        this.minutes = minutes;
        this.hours = hours;
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

        this.minutes = v;
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
}
