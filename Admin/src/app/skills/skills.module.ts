import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetSkillsComponent } from './get-skills/get-skills.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsComponent } from './statistics/statistics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { EditSkillComponent } from './get-skills/EditSkill/EditSkill.component';
import { AddSkillComponent } from './get-skills/AddSkill/AddSkill.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component: GetSkillsComponent,
    title: 'Get All Skills',
  },
  {
    path: 'Get',
    component: GetSkillsComponent,
    title: 'Get All Skills',
  },
  {
    path: 'Statistics',
    component: StatisticsComponent,
    title: 'Get All Skills',
  },
];

@NgModule({
  declarations: [
    GetSkillsComponent,
    StatisticsComponent,
    EditSkillComponent,
    AddSkillComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    NgxPaginationModule,
  ],
  entryComponents: [GetSkillsComponent, EditSkillComponent, AddSkillComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
})
export class SkillsModule {}
