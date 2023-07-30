import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import Swal from 'sweetalert2';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from '@angular/material/dialog';
import { EditSkillComponent } from './EditSkill/EditSkill.component';
import { AddSkillComponent } from './AddSkill/AddSkill.component';
@Component({
  selector: 'app-get-skills',
  templateUrl: './get-skills.component.html',
  styleUrls: ['./get-skills.component.scss'],
})
export class GetSkillsComponent implements OnInit {
  skills: any[] = [];
  p: number = 1;
  constructor(
    private skillService: SkillsService,
    public dialogModel: MatDialog
  ) {}
  ngOnInit(): void {
    this.loadData();
  }

  add() {
    const dialogWithForm = this.dialogModel.open(AddSkillComponent, {
      restoreFocus: true,
      width: '900px',
    });
    dialogWithForm.afterClosed().subscribe((result) => {
      this.loadData();
    });
  }
  edit(skill: any) {
    const dialogWithForm = this.dialogModel.open(EditSkillComponent, {
      restoreFocus: true,
      width: '900px',
      data: skill,
    });
    dialogWithForm.afterClosed().subscribe((result) => {
      this.loadData();
    });
  }

  remove(id: any) {
    Swal.fire({
      title: 'Are you sure to delete this skill?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.skillService.deleteSkill(id).subscribe(() => {
          this.loadData();
        });
      }
    });
  }
  loadData(): void {
    this.skillService.getSkills().subscribe(
      (data) => {
        this.skills = data.results;
      },
      (err) => console.log(err)
    );
  }
}
