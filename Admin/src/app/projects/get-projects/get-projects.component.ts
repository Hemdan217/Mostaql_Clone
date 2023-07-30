import { Router } from '@angular/router';
import { ProjectsService } from './../projects.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-get-projects',
  templateUrl: './get-projects.component.html',
  styleUrls: ['./get-projects.component.scss'],
})
export class GetProjectsComponent implements  OnInit {
  constructor(private ProService: ProjectsService, private router: Router){
  }
  
  ngOnInit() {

    this.ProService.getAllProjects().subscribe(data  =>  { this.data = data});
        
  }
  
 
  
  data: any = {} ;

  filterProjects(value:any){
    if(value){
      this.data.projects = this.data.projects.filter( (p : any ) => p.title.toLowerCase().includes(value))
      
    }else{

      this.ProService.getAllProjects().subscribe(data  =>  this.data = data);
    }
  }

  deactiveProject( id:string, status: string){
    this.ProService.deactivateProject({id, status}).subscribe((d: any) => {
      d.deactivatedProject.status = (this.data.projects.find((pr:any) => pr._id == d.deactivatedProject._id)).status
      console.log((this.data.projects.find((pr:any) => pr._id == d.deactivatedProject._id)).status)
    });
 
   
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/projects/Get'])
    })
    
  }

  p:number = 1;
}
