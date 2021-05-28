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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicationIcon,
    IngredientIcon,
    BatchIcon,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'medication-list', component: MedicationComponent},
      {path: 'ingredient-list', component: IngredientComponent},
      {path: 'batch-list', component: BatchComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
