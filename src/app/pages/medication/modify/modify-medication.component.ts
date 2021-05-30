import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Medication } from 'src/app/shared/models/medication.model';

@Component({
  selector: 'app-modify-medication',
  templateUrl: './modify-medication.component.html',
  styleUrls: ['./modify-medication.component.scss']
})
export class ModifyMedicationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Medication, public dialogRef: MatDialogRef<ModifyMedicationComponent>) {
    this.form.controls.code.setValue(data.code);
    this.form.controls.status.setValue(data.status);
    this.form.controls.manufacturer.setValue(data.manufacturer);
    this.form.controls.form.setValue(data.form);
    this.form.controls.amount.setValue(data.amount);
  }

  form: FormGroup = new FormGroup({
    code: new FormControl(),
    status: new FormControl(),
    manufacturer: new FormControl(),
    form: new FormControl(),
    amount: new FormControl()
  });

  statusesList: string[] = ['active', 'inactive', 'entered-in-error'];

  formsList: string[] = ['powder', 'capsule', 'tablets'];

  ngOnInit(): void {
  }

}
