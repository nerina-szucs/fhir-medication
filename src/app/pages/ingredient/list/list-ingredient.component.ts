import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IngredientService } from 'src/app/shared/ingredient.service';
import { ModifyIngredientComponent } from '../modify/modify-ingredient.component';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { IngredientModifyingService } from 'src/app/shared/ingredient-modifying.service';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.scss']
})
export class ListIngredientComponent implements OnInit {

  constructor(private service: IngredientService, private service2: IngredientModifyingService<Ingredient>, private dialog: MatDialog) { }

  ngOnInit() {
    this.getIngredients();
  }

  ingredient: any;
  getIngredients = () =>
     this.service
     .getIngredients()
     .subscribe(res =>(this.ingredient = res));

 displayedColumns: string[] = ['item', 'isActive', 'strength', 'delete', 'update'];

 markCompleted = (data: any) => this.service.updateIngredient(data);

 deleteIngredient = (data: any) => this.service.deleteIngredient(data);

 openDialog(ingredient: Ingredient): void {
  const dialogRef = this.dialog.open(ModifyIngredientComponent, {
    data: ingredient
  });
  dialogRef.afterClosed().subscribe((ingredient2: Ingredient) => {
    console.log(ingredient);
    if (ingredient?.item) {
      const ing: Ingredient = {ingId: ingredient.ingId, item: ingredient2.item, isActive: ingredient2.isActive, strength: ingredient2.strength}
      this.service2.update('ingredient', ingredient.ingId, ing).then(ingId => { console.log(ingId); });
    }
  }, err => {
    console.warn(err);
  });
}
}

