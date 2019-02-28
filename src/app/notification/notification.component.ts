import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
  }

  public sendAlarmStop(): void {
    const ipc = this.electronService.ipcRenderer;
    ipc.send('fromMain');
  }
}
