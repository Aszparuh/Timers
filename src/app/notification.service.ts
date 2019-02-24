import { Injectable } from '@angular/core';
import { NodeInjectorFactory } from '@angular/core/src/render3/interfaces/injector';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private electronService: ElectronService) { }

  public notify(): void {
    const BrowserWindow = this.electronService.remote.BrowserWindow;
    const win = new BrowserWindow({
      width: 300,
      height: 200,
      webPreferences: {
        nativeWindowOpen: true
      }
    });
    win.setMenu(null);
    win.loadURL(`file://${__dirname}/../../dist/timers/index.html#/notification`);
    win.show();
  }
}

