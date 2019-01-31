import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingletimerComponent } from './singletimer/singletimer.component';
import { MultitimerComponent } from './multitimer/multitimer.component';

const routes: Routes = [
  { path: 'timer/:id', component: SingletimerComponent },
  { path: 'multi', component: MultitimerComponent },
  { path: '',
    redirectTo: 'multi',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
