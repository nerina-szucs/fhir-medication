import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicationComponent } from './medication.component';
import { MatCardModule, MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MedicationComponent,
    MatCardModule,
    MatCard,
    MatIconModule,
    MatButtonModule
  ],
  imports: [
    CommonModule,
    MatCard,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MedicationModule { }
