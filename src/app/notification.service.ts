import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private electronService: ElectronService) { }

  public notify(): void {
      const win = new this.electronService.remote.BrowserWindow({
      width: 300,
      height: 200,
      webPreferences: {
        nativeWindowOpen: true
      }
    });

    win.setMenu(null);
    win.loadURL(`file://${__dirname}/../../dist/timers/index.html#/notification`);
    win.once('ready-to-show', () => {
      win.show();
    });
  }
}

