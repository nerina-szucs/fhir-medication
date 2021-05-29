import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.scss']
})

export class AddMedicationComponent {
  form: FormGroup = new FormGroup({
    code: new FormControl(),
    status: new FormControl(),
    manufacturer: new FormControl(),
    form: new FormControl(),
    amount: new FormControl()
  });
}