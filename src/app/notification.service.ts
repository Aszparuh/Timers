import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { BrowserWindow } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private win: BrowserWindow;
  private audio = new Audio('./assets/audio/alarm.mp3');

  constructor(private electronService: ElectronService) { }

  public notify(): void {
      this.win = new this.electronService.remote.BrowserWindow({
      width: 300,
      height: 200,
      webPreferences: {
        nativeWindowOpen: true
      },
    });
    this.win.on('closed', () => {
      this.win = null;
    });
    this.win.setMenu(null);
    this.win.loadURL(`file://${__dirname}/../../dist/timers/index.html#/notification`);
    this.win.once('ready-to-show', () => {
      this.win.show();
    });
    // this.win.show();
    this.soundAlarm();
  }

  public stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.win.destroy();
  }

  private soundAlarm(): void {
    this.audio.load();
    this.audio.play();
  }
}

