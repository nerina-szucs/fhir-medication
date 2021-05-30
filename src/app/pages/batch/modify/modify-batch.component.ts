import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-batch',
  templateUrl: './modify-batch.component.html',
  styleUrls: ['./modify-batch.component.scss']
})
export class ModifyBatchComponent implements OnInit {

  constructor() { }

  form: FormGroup = new FormGroup({
    lotNumber: new FormControl(),
    expirationDate: new FormControl()
  });


  ngOnInit(): void {
  }

}
