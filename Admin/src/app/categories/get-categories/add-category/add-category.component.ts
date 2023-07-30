import { GetSkillsComponent } from '../../../skills/get-skills/get-skills.component';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { GetCategoriesComponent } from '../get-categories.component';
import { CategoriesService } from '../../categories.service';
// import { SkillsService } from '../../skills.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  allCategories: any[] = [];
  newCategory: {
    title: string;
    titleAr: string;
  } = { title: '', titleAr: '' };
  constructor(
    public dialogRef: MatDialogRef<GetCategoriesComponent>,
    private categoryService: CategoriesService
  ) {}
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      console.log(data);
      this.allCategories = data.categories;
    });
  }
  close(): void {
    this.dialogRef.close();
  }
  save() {
    this.categoryService
      .addNewCategory(this.newCategory)
      .subscribe((result) => {
        console.log(result);
      });
    this.close();
  }
}
