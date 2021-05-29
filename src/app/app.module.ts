import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MedicationIcon } from './icons/icon-medication';
import { IngredientIcon } from './icons/icon-ingredient';
import { BatchIcon } from './icons/icon-batch';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './pages/nav/nav.component';
import { RouterModule } from '@angular/router';
import { MedicationComponent } from './pages/medication/medication.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { BatchComponent } from './pages/batch/batch.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { AddMedicationComponent } from './pages/medication/add/add-medication.component';
import { ListMedicationComponent } from './pages/medication/list/list-medication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MedicationService } from './shared/medication.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicationIcon,
    IngredientIcon,
    BatchIcon,
    NavComponent,
    MedicationComponent,
    AddMedicationComponent,
    ListMedicationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'add-medication', component: AddMedicationComponent},
      {path: 'list-medication', component: ListMedicationComponent},
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'medication-list', component: MedicationComponent},
      {path: 'ingredient-list', component: IngredientComponent},
      {path: 'batch-list', component: BatchComponent}
    ]),
  ],
  providers: [MedicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }