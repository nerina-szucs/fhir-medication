import { Component, OnInit } from '@angular/core';
import { BatchService } from 'src/app/shared/batch.service';

@Component({
  selector: 'app-list-batch',
  templateUrl: './list-batch.component.html',
  styleUrls: ['./list-batch.component.scss']
})
export class ListBatchComponent implements OnInit {

  constructor(private service: BatchService) { }

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

}
