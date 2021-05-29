import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/shared/ingredient.service';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.scss']
})
export class ListIngredientComponent implements OnInit {

  constructor(private service: IngredientService) { }

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
}
