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
import { ListIngredientComponent } from './pages/ingredient/list/list-ingredient.component';
import { ListBatchComponent } from './pages/batch/list/list-batch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MedicationService } from './shared/medication.service';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicationIcon,
    IngredientIcon,
    BatchIcon,
    NavComponent,
    MedicationComponent,
    IngredientComponent,
    BatchComponent,
    AddMedicationComponent,
    ListMedicationComponent,
    ListIngredientComponent,
    ListBatchComponent
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
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'add-medication', component: AddMedicationComponent},
      {path: 'list-medication', component: ListMedicationComponent},
      {path: 'list-ingredient', component: ListIngredientComponent},
      {path: 'list-batch', component: ListBatchComponent},
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