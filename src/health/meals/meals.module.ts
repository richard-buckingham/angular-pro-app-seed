import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// shared modules
import { SharedModule } from '../shared/shared.module';

// containers
import { MealsComponent } from './container/meals/meals.component';
import { MealComponent } from './container/meal/meal.component';

// components

// define the routes
export const ROUTES: Routes = [
  { path: '', component: MealsComponent },
  { path: 'new', component: MealComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    MealsComponent,
    MealComponent
  ],
  providers: []
})
export class MealsModule {}