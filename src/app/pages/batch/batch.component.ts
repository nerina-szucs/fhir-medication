import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BatchAddingService } from 'src/app/shared/batch-adding.service';
import { Batch } from 'src/app/shared/models/batch.model';
import { AddBatchComponent } from './add/add-batch.component';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  constructor(private service: BatchAddingService<Batch>, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBatchComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((batch: Batch) => {
      console.log(batch);
      if (batch?.lotNumber) {
        this.service.add('batch', batch).then(btid => { console.log(btid); });
        this.router.navigateByUrl('/list-batch');
      }
    }, err => {
      console.warn(err);
    });
  }

}
