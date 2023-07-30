import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthMiddlewareGuard } from './auth-middleware.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthMiddlewareGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthMiddlewareGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
    canActivate: [AuthMiddlewareGuard],
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then((m) => m.CategoriesModule),
    canActivate: [AuthMiddlewareGuard],
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
    canActivate: [AuthMiddlewareGuard],
  },
  {
    path: 'add-admin',
    loadChildren: () =>
      import('./add-admin-module/add-admin-module.module').then(
        (m) => m.AddAdminModuleModule
      ),
    canActivate: [AuthMiddlewareGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
