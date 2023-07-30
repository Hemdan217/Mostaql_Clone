import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  adminName!:string

  constructor(private route:Router){}
  routes: any[] = [
    {
      name: 'users',
      icon: 'fa-solid fa-users',
      actions: ['freelancers', 'clients'],
    },
    {
      name: 'projects',
      icon: 'fas fa-edit',
      actions: ['Get', 'Statistics'],
    },
    {
      name: 'categories',
      icon: 'fas fa-cogs',
      actions: ['Get', 'Statistics'],
    },
    {
      name: 'skills',
      icon: 'fas fa-list-alt',
      actions: ['Get', 'Statistics'],
    },
    {
      name: 'add-admin',
      icon: 'fa-solid fa-user-plus',
    },
  ];

  ngOnInit(): void {
    const token:string | null = sessionStorage.getItem('token')?.split('.')[1]!
    const unDecodedToken = JSON.parse(atob(token))
    
    this.adminName = unDecodedToken.adminRole
    console.log(unDecodedToken)
  }

  logoutHandler(){
    sessionStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }
}
