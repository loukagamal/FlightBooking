import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableFlightsComponent } from './available-flights/available-flights.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },

{path 
  :'Departments/:id',component:AvailableFlightsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
