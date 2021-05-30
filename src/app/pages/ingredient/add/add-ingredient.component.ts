import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {

  constructor() { }

  form: FormGroup = new FormGroup({
    item: new FormControl(),
    isActive: new FormControl(),
    strength: new FormControl()
  });

  activeList: boolean[] = [true, false];

  ngOnInit(): void {
  }

}
