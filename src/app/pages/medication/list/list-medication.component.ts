import { Component, Input, OnInit } from '@angular/core';
import { MedicationService } from 'src/app/shared/medication.service';
import { Medication } from 'src/app/shared/models/medication.model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModifyMedicationComponent } from '../modify/modify-medication.component';
import { MedicationModifyingService } from 'src/app/shared/medication-modifying.service';
import { MedicationComponent } from '../medication.component';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-list-medication',
  templateUrl: './list-medication.component.html',
  styleUrls: ['./list-medication.component.scss']
})
export class ListMedicationComponent implements OnInit {

  constructor(private service: MedicationService, private service2: MedicationModifyingService<Medication>, private dialog: MatDialog) { }

  ngOnInit() {
    this.getMedications();
  }

//  create(medication: Medication){
//    this.service.createMedication(medication);
//}

  medication: any;
   getMedications = () =>
      this.service
      .getMedications()
      .subscribe(res =>(this.medication = res));

  displayedColumns: string[] = ['code', 'status', 'manufacturer', 'form', 'amount', 'delete', 'update'];

  deleteMedication = (data: any) => this.service.deleteMedication(data);

  openDialog(medication: Medication): void {
    const dialogRef = this.dialog.open(ModifyMedicationComponent, {
      data: medication
    });
    dialogRef.afterClosed().subscribe((medication2: Medication) => {
      console.log(medication);
      if (medication?.code) {
        const med: Medication = {id: medication.id, code: medication2.code, status: medication2.status, manufacturer: medication2.manufacturer, form: medication2.form, amount: medication2.amount}
        this.service2.update('medication', medication.id, med).then(id => { console.log(id); });
      }
    }, err => {
      console.warn(err);
    });
  }
}
