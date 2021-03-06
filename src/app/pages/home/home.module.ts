import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavComponent } from '../nav/nav.component';
import { DefaultComponent } from '../default/default.component';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule
  ]
})
export class HomeModule { }
