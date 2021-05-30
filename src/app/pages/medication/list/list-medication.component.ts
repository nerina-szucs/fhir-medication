import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MedicationService } from 'src/app/shared/medication.service';
import { Medication } from 'src/app/shared/models/medication.model';
import { ModifymedicationComponent } from '../modify/modifymedication.component';

@Component({
  selector: 'app-list-medication',
  templateUrl: './list-medication.component.html',
  styleUrls: ['./list-medication.component.scss']
})
export class ListMedicationComponent implements OnInit {

  constructor(private service: MedicationService) { }

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
}
