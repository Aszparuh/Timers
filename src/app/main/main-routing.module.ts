import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingletimerComponent } from './singletimer/singletimer.component';
import { MultitimerComponent } from './multitimer/multitimer.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'timer/:id', component: SingletimerComponent },
  { path: 'multi', component: MultitimerComponent },
  { path: '',
    redirectTo: 'multi',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
