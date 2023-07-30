import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-statistics-projects',
  templateUrl: './statistics-projects.component.html',
  styleUrls: ['./statistics-projects.component.scss'],
})
export class StatisticsProjectsComponent implements OnInit {
  constructor(private proService: ProjectsService){}


  ngOnInit(){
    this.proService.getProjectsStats().subscribe(stats => {
      console.log(stats)
      this.stats = stats;

    })
  }

  stats: any = {};
}
