import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsProjectsComponent } from './statistics-projects/statistics-projects.component';
import { GetProjectsComponent } from './get-projects/get-projects.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SingleProjectComponent } from './single-project/single-project.component';
import { NgxPaginationModule } from 'ngx-pagination';
const routes: Routes = [
  {
    path: '',
    component: GetProjectsComponent,
    title: 'Get All Projects',
  },
  {
    path: 'Get',
    component: GetProjectsComponent,
    title: 'Get All Projects',
  },
  {
    path: 'Statistics',
    component: StatisticsProjectsComponent,
    title: 'Statistics For Projects',
  },
  {
    path: ':id',
    component: SingleProjectComponent,
    // title: 'Single Project',
  },
];

@NgModule({
  declarations: [StatisticsProjectsComponent, GetProjectsComponent, SingleProjectComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule, NgxPaginationModule],
})
export class ProjectsModule {}
