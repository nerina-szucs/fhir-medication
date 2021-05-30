import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.scss']
})
export class AddBatchComponent implements OnInit {

  constructor() { }

  form: FormGroup = new FormGroup({
    lotNumber: new FormControl(),
    expirationDate: new FormControl()
  });

  ngOnInit(): void {
  }

}
