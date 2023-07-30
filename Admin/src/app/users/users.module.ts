import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsUsersComponent } from './statistics-users/statistics-users.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FreelancersComponent } from './freelancers/freelancers.component';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsUsersComponent,
    title: 'Get Statistics For Users',
  },
  {
    path:'freelancers',
    component:FreelancersComponent,
    title:'Freelancers Control'
  },
  {
    path:'clients',
    component:ClientsComponent,
    title:'Clients Control'
  }


];

@NgModule({
  declarations: [
    StatisticsUsersComponent,
    FreelancersComponent,
    ClientsComponent,

  ],

  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule,FormsModule],
})
export class UsersModule {}
