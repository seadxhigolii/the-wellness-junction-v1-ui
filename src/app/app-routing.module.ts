import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Route for the Home component
  { path: 'dashboard', component: DashboardComponent }, // Route for the Dashboard component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
