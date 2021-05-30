import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export interface FHIRtab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  asyncTabs: Observable<FHIRtab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<FHIRtab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Code', content: 'Returns medications for a specific code, e.g. 261000'},
          {label: 'Status', content: 'Returns medications for this status (active / inactive / entered-in-error)'},
          {label: 'Manufacturer', content: 'Returns medications made or sold for this manufacturer'},
          {label: 'Form', content: 'Returns medications for a specific dose form (powder / tablets / capsule)'},
          {label: 'Amount', content: 'Specific amount of the drug in the packaged product. For example, 3 mL, 10mL, etc.'},
          {label: 'Manufacturer', content: 'Returns medications made or sold for this manufacturer'},
          {label: 'Ingredient', content: 'Returns medications for this ingredient reference'},
          {label: 'Ingredient code', content: 'Returns medications for this ingredient code'},
          {label: 'Ingredient strength', content: 'For example, 250 mg per tablet.'},
          {label: 'Batch lot number', content: 'Returns medications in a batch with this lot number'},
          {label: 'Batch expiration date', content: 'Returns medications in a batch with this expiration date.'},
        ]);
      }, 1000);
    });
  }

  ngOnInit(): void {
  }

}
