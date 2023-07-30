import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdminModuleComponent } from './add-admin-module.component';
import { RouterModule, Routes } from '@angular/router';
import { addAdminGuard } from './add-admin.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const route:Routes = [
  {
    path:'',
    component:AddAdminModuleComponent,
    title:'Admin | Add-Admin',
    canActivate:[addAdminGuard]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AddAdminModuleComponent],
  exports:[AddAdminModuleComponent]
})
export class AddAdminModuleModule { }
