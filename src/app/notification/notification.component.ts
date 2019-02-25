import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private audio = new Audio('assets/audio/alarm.mp3');
  constructor(private electronService: ElectronService) { }

  ngOnInit() {
    this.soundAlarm();
  }

  public stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    const window = this.electronService.remote.getCurrentWindow();
    window.close();
  }

  private soundAlarm(): void {
    this.audio.load();
    this.audio.play();
  }
}
