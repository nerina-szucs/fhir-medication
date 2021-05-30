import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MedicationAddingService } from 'src/app/shared/medication-adding.service';
import { Medication } from 'src/app/shared/models/medication.model';
import { AddMedicationComponent } from './add/add-medication.component';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.scss']
})
export class MedicationComponent implements OnInit {

  constructor(private service: MedicationAddingService<Medication>, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMedicationComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((medication: Medication) => {
      console.log(medication);
      if (medication?.code) {
        this.service.add('medication', medication).then(id => { console.log(id); });
        this.router.navigateByUrl('/list-medication');
      }
    }, err => {
      console.warn(err);
    });
  }

}
