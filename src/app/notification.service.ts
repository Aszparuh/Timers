import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private win;
  private audio = new Audio('./assets/audio/alarm.mp3');

  constructor(private electronService: ElectronService) {
    this.registerMainEvents();
    this.audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
  }

  public notify(id: number): void {
    this.win = new this.electronService.remote.BrowserWindow({
      width: 500,
      height: 250,
      webPreferences: {
        nativeWindowOpen: true
      },
    });
    this.win.on('closed', () => {
      // const ipc = this.electronService.ipcRenderer;
      // ipc.send('fromMain');
      // this.win = null;
    });
    this.win.setMenu(null);
    this.win.loadURL(`file://${__dirname}/../../dist/timers/index.html#/notification/` + id);
    this.win.once('ready-to-show', () => {
      this.win.show();
    });
    // this.win.show();
    this.soundAlarm();
  }

  public stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  private soundAlarm(): void {
    this.audio.load();
    this.audio.play();
  }

  private registerMainEvents(): void {
    // const ipc = this.electronService.remote.ipcMain;
    // ipc.on('fromMain', (event, messages) => {
    //   this.stop();
    // });
  }
}

