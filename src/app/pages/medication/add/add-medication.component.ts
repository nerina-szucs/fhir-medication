import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MedicationService } from 'src/app/shared/medication.service';


@Component({
  selector: 'add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.scss']
})

export class AddMedicationComponent {

  constructor(private service: MedicationService) {}

  form: FormGroup = new FormGroup({
    code: new FormControl(),
    status: new FormControl(),
    manufacturer: new FormControl(),
    form: new FormControl(),
    amount: new FormControl()
  });

  statusesList: string[] = ['active', 'inactive', 'entered-in-error'];

  formsList: string[] = ['powder', 'capsule', 'tablets'];
}