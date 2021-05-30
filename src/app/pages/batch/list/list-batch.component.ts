import { Component, OnInit } from '@angular/core';
import { BatchService } from 'src/app/shared/batch.service';
import { MatDialog } from '@angular/material/dialog';
import { ModifyBatchComponent } from '../modify/modify-batch.component';
import { Batch } from 'src/app/shared/models/batch.model';
import { BatchModifyingService } from 'src/app/shared/batch-modifying.service';

@Component({
  selector: 'app-list-batch',
  templateUrl: './list-batch.component.html',
  styleUrls: ['./list-batch.component.scss']
})
export class ListBatchComponent implements OnInit {

  constructor(private service: BatchService, private service2: BatchModifyingService<Batch>, private dialog: MatDialog) { }

  ngOnInit() {
    this.getBatches();
  }

  batch: any;
  getBatches = () =>
     this.service
     .getBatches()
     .subscribe(res =>(this.batch = res));

 displayedColumns: string[] = ['lotNumber', 'expirationDate', 'delete', 'update'];

 markCompleted = (data: any) => this.service.updateBatch(data);

 deleteBatch = (data: any) => this.service.deleteBatch(data);

openDialog(batch: Batch): void {
  const dialogRef = this.dialog.open(ModifyBatchComponent, {
    data: batch
  });
  dialogRef.afterClosed().subscribe((batch2: Batch) => {
    console.log(batch);
    if (batch?.lotNumber) {
      const ba: Batch = {btid: batch.btid, lotNumber: batch2.lotNumber, expirationDate: batch2.expirationDate,}
      this.service2.update('batch', batch.btid, ba).then(btid => { console.log(btid); });
    }
  }, err => {
    console.warn(err);
  });
}

}
