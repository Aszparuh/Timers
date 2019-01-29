import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingletimerComponent } from './singletimer/singletimer.component';
import { MultitimerComponent } from './multitimer/multitimer.component';

@NgModule({
  declarations: [
    AppComponent,
    SingletimerComponent,
    MultitimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
