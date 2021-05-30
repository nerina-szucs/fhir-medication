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

  constructor(@Inject(MAT_DIALOG_DATA) public data: Medication, public dialogRef: MatDialogRef<ModifyMedicationComponent>) { }

  form: FormGroup = new FormGroup({
    code: new FormControl(this.data.code),
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
