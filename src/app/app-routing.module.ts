import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren:  () =>  import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'passenger',
    loadChildren:  () =>  import('./modules/passenger/passenger.module').then((m) => m.PassengerModule),
  },
 
  
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
