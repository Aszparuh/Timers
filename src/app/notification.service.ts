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
    const vin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nativeWindowOpen: true
      }});
    vin.loadURL(`file://${__dirname}/../../dist/timers/index.html`);
    vin.show();
  }
}

