import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public id: number;

  constructor(private electronService: ElectronService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  public sendAlarmStop(): void {
    const ipc = this.electronService.ipcRenderer;
    ipc.send('fromMain');
    const win = this.electronService.remote.getCurrentWindow();
    win.close();
  }
}
