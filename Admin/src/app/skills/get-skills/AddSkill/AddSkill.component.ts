import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { GetSkillsComponent } from '../get-skills.component';
import { SkillsService } from '../../skills.service';
import { CategoriesService } from '../../../categories/categories.service';
// export interface ISkill {
//   _id: string;
//   name: string;
//   categotryId: {};
// }
@Component({
  selector: 'app-AddSkill',
  templateUrl: './AddSkill.component.html',
  styleUrls: ['./AddSkill.component.scss'],
})
export class AddSkillComponent implements OnInit {
  allCategories: any[] = [];
  newSkill: {
    name: string;
    nameAr: string;
    categoryId: string;
  } = { name: '', categoryId: '', nameAr: '' };
  constructor(
    public dialogRef: MatDialogRef<GetSkillsComponent>,
    private skillService: SkillsService
  ) {}
  ngOnInit(): void {

    this.skillService.getCategories().subscribe((data) => {
    
      this.allCategories = data.categories;
    });
  
  }
  close(): void {
    this.dialogRef.close();
  }
  save() {
    this.skillService.addNewSkill(this.newSkill).subscribe((data) => {
      this.dialogRef.close();
    });
  }
}
