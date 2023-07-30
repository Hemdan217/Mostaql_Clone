import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CategoriesService } from '../categories.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  chart: any;
  constructor(private categoryService: CategoriesService) {}
  ngOnInit(): void {
    this.categoryService.getCategoriesStatistics().subscribe((data) => {
      let labels: any[] = [];
      let dataset: any[] = [];
      data.results.forEach((res: any) => {
        dataset.push(res.numProjects);
        labels.push(res.category[0]?.title);
      });
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
