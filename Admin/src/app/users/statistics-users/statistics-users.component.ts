import { usersStatisticsType } from '../types';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-users',
  templateUrl: './statistics-users.component.html',
  styleUrls: ['./statistics-users.component.scss'],
})
export class StatisticsUsersComponent implements OnInit {

  userStatistics:usersStatisticsType | null = null

  constructor(private userService:UsersService){}
  ngOnInit(): void {
    this.userService.getAllUsersStatistics().subscribe(data=>{
     this.userStatistics = data
    })
  }
}
