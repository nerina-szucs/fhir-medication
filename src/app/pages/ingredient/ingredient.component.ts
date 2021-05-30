import { Component, OnInit } from '@angular/core';
import { AddIngredientComponent } from './add/add-ingredient.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { IngredientAddingService } from 'src/app/shared/ingredient-adding.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  constructor(private service: IngredientAddingService<Ingredient>, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddIngredientComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((ingredient: Ingredient) => {
      console.log(ingredient);
      if (ingredient?.item) {
        this.service.add('ingredient', ingredient).then(ingId => { console.log(ingId); });
        this.router.navigateByUrl('/list-ingredient');
      }
    }, err => {
      console.warn(err);
    });
  }

}
