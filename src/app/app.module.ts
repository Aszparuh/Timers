import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingletimerComponent } from './singletimer/singletimer.component';
import { MultitimerComponent } from './multitimer/multitimer.component';
import { NgxElectronModule } from 'ngx-electron';


@NgModule({
  declarations: [
    AppComponent,
    SingletimerComponent,
    MultitimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
