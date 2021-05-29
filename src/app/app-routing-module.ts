import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '' , redirectTo:'home',pathMatch:'full'},
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'medication',
    loadChildren: () => import('./pages/medication/medication.module').then(m => m.MedicationModule),
  },
  {
    path: 'ingredient',
    loadChildren: () => import('./pages/ingredient/ingredient.module').then(m => m.IngredientModule),
  },
  {
    path: 'batch',
    loadChildren: () => import('./pages/batch/batch.module').then(m => m.BatchModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
