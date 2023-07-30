import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { SkillsService } from '../skills.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  chart: any;
  constructor(private skillService: SkillsService) {}
  ngOnInit(): void {
    this.skillService.getSkillsStatistics().subscribe((data) => {
      let labels: any[] = [];
      let dataset: any[] = [];
      data.results.forEach((res: any) => {
        console.log(res);
        console.log();
        dataset.push(res.numProjects);
        labels.push(res.skill[0]?.name);
      });
      console.log(labels);
      console.log(dataset);
      this.createChart(labels, dataset);
    });
  }
  createChart(labels: any, dataset: any) {
    this.chart = new Chart('MyChart', {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels,
        datasets: [
          {
            data: dataset,
            backgroundColor: [
              '#f56954',
              '#00a65a',
              '#f39c12',
              '#00c0ef',
              '#3c8dbc',
              '#d2d6de',
            ],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }
}
