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
          {label: 'Medication', content: 'Intro'},
          {label: 'Ingredient', content: 'Content 2'},
          {label: 'Batch', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }

  ngOnInit(): void {
  }

}
