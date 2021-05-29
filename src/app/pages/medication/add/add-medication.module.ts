import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMedicationComponent } from './add-medication.component';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AddMedicationComponent
  ],
  imports: [
    CommonModule,
    FormControl,
    FormGroup,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class AddMedicationModule { }
