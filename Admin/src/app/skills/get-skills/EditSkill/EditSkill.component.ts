import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { GetSkillsComponent } from '../get-skills.component';
import { SkillsService } from '../../skills.service';
import { CategoriesService } from './../../../categories/categories.service';
// export interface ISkill {
//   _id: string;
//   name: string;
//   categotryId: {};
// }
@Component({
  selector: 'app-EditSkill',
  templateUrl: './EditSkill.component.html',
  styleUrls: ['./EditSkill.component.scss'],
})
export class EditSkillComponent implements OnInit {
  allCategories: any[] = [];
  categoryId: string = '';
  constructor(
    public dialogRef: MatDialogRef<GetSkillsComponent>,
    @Inject(MAT_DIALOG_DATA) public skill: any,
    private skillService: SkillsService
  ) {}
  ngOnInit(): void {
    this.skillService.getCategories().subscribe((data) => {
      console.log(this.skill);
      this.allCategories = data.categories;
    });
  }
  close(): void {
    this.dialogRef.close();
    console.log(this.skill);
  }
  save() {
    console.log(this.skill);
    this.skillService.updateSkill(this.skill).subscribe((result) => {
      console.log(result);
    });
    this.close();
  }
}
