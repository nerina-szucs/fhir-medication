import { Component, OnInit } from '@angular/core';
import { MedicationService } from 'src/app/shared/medication.service';

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

  medication: any;
   getMedications = () =>
      this.service
      .getMedications()
      .subscribe(res =>(this.medication = res));

  displayedColumns: string[] = ['code', 'status', 'manufacturer', 'form', 'amount', 'delete', 'update'];

  markCompleted = (data: any) => this.service.updateMedication(data);

  deleteMedication = (data: any) => this.service.deleteMedication(data);
}
