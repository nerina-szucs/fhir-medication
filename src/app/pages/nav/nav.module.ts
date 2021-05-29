import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { IngredientIcon } from 'src/app/icons/icon-ingredient';



@NgModule({
  declarations: [
    NavComponent,
    IngredientIcon
  ],
  imports: [
    CommonModule,
    IngredientIcon
  ]
})
export class NavModule { }
