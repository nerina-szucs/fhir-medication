import { Component, Input, OnInit } from '@angular/core';
import { MedicationService } from 'src/app/shared/medication.service';
import { Medication } from 'src/app/shared/models/medication.model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModifyMedicationComponent } from '../modify/modify-medication.component';
import { MedicationModifyingService } from 'src/app/shared/medication-modifying.service';

@Component({
  selector: 'app-list-medication',
  templateUrl: './list-medication.component.html',
  styleUrls: ['./list-medication.component.scss']
})
export class ListMedicationComponent implements OnInit {
  id: string | undefined;

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
    console.log("BEFORE EDIT");
    console.log(medication.code);
    this.id = medication.id;
    dialogRef.afterClosed().subscribe(async (medication: Medication) => {
      if (medication?.code) {
        console.log(medication.id, medication.code);
        console.log(this.id);
        console.log("AFTER EDIT");
        //var med = new Medication(this.id, medication.code);
        //await this.service2.update('medication', med.id, med);
    }
    })

    console.log("AFTER EDIT");

  }

 // openDialog(medication: Medication): void {
 //   const dialogRef = this.dialog.open(ModifyMedicationComponent, {
 //     data: medication
 //   });
 //   dialogRef.afterClosed().subscribe((medication: Medication) => {
 //     if (medication?.code) {
 //       console.log(medication.code);
 //     }
 //   }, err => {
 //     console.warn(err);
 //   });
 // }
}
