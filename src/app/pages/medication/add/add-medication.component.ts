import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MedicationService } from 'src/app/shared/medication.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Medication } from 'src/app/shared/models/medication.model';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.scss']
})

export class AddMedicationComponent implements OnInit {
  
  constructor() { }

  form: FormGroup = new FormGroup({
    code: new FormControl(),
    status: new FormControl(),
    manufacturer: new FormControl(),
    form: new FormControl(),
    amount: new FormControl()
  });

  statusesList: string[] = ['active', 'inactive', 'entered-in-error'];

  formsList: string[] = ['powder', 'capsule', 'tablets'];

  ngOnInit() {
  }

}
