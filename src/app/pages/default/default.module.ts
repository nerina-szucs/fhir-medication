import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule
  ]
})
export class DefaultModule { }
