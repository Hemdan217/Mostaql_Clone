import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CategoriesService } from '../../categories.service';
import { GetCategoriesComponent } from '../get-categories.component';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements OnInit {
  categoryId: string = '';
  constructor(
    public dialogRef: MatDialogRef<GetCategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public category: any,
    private categoryService: CategoriesService
  ) {}
  ngOnInit(): void {
    console.log(this.category);
  }
  close(): void {
    this.dialogRef.close();
  }
  save() {
    this.categoryService.updateCategory(this.category).subscribe((result) => {
      console.log(result);
    });
    this.close();
  }
}
