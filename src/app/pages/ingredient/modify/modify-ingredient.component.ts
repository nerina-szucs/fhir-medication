import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-ingredient',
  templateUrl: './modify-ingredient.component.html',
  styleUrls: ['./modify-ingredient.component.scss']
})
export class ModifyIngredientComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Ingredient, public dialogRef: MatDialogRef<ModifyIngredientComponent>) {
    this.form.controls.item.setValue(data.item);
    this.form.controls.isActive.setValue(data.isActive);
    this.form.controls.strength.setValue(data.strength);
  }

  form: FormGroup = new FormGroup({
    item: new FormControl(),
    isActive: new FormControl(),
    strength: new FormControl()
  });

  activeList: boolean[] = [true, false];

  ngOnInit(): void {
  }

}
