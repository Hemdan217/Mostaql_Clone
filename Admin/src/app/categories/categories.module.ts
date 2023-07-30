import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCategoriesComponent } from './get-categories/get-categories.component';
import { AddCategoryComponent } from './get-categories/add-category/add-category.component';
// import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { UpdateCategoryComponent } from './get-categories/update-category/update-category.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {
    path: '',
    component: GetCategoriesComponent,
    title: 'Get All Categories',
  },
  {
    path: 'Get',
    component: GetCategoriesComponent,
    title: 'Get All Categories',
  },
  {
    path: 'Statistics',
    component: StatisticsComponent,
    title: 'Add New Category',
  },
];

@NgModule({
  declarations: [
    GetCategoriesComponent,
    AddCategoryComponent,
    // DeleteCategoryComponent,
    UpdateCategoryComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    NgxPaginationModule
  ],
  entryComponents: [
    GetCategoriesComponent,
    UpdateCategoryComponent,
    AddCategoryComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
})
export class CategoriesModule {}
