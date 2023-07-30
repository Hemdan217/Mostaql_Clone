import { Component, DoCheck, OnInit } from '@angular/core';
import { freelancerType } from '../types';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.scss'],
})
export class FreelancersComponent implements OnInit {
  search: string = '';
  freelancers: {
    _id: string;
    email: string;
    isVerify: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    isActive: string;
  }[] = [];

  filteredFreelancer: {
    _id: string;
    email: string;
    isVerify: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    isActive: string;
  }[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.usersService.getAllFreelancers().subscribe((data) => {
      this.freelancers = data.freelancers;
      this.filteredFreelancer = data.freelancers;
    });
  }

  onDeactiveFreelancer(id: string) {
    const data = {
      freelancerId: id,
    };
    this.usersService.deactivatedFreelancer(data);
    setTimeout(() => {
      this.loadData();
    }, 100);
  }

  onVerifyFreelancer(id: string) {
    const data = {
      freelancerId: id,
    };
    this.usersService.verifyFreelancer(data);
    setTimeout(() => {
      this.loadData();
    }, 100);
  }

  filterFreelancer(text: string) {
    if (text) {
      this.filteredFreelancer = this.freelancers.filter((acc) =>
        acc.email.includes(text.toLocaleLowerCase())
      );
    } else {
      this.filteredFreelancer = this.freelancers;
    }
  }
}
