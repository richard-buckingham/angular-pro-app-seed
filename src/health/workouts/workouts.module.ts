import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { WorkoutsComponent } from './container/workouts/workouts.component';

// components

// define the routes
export const ROUTES: Routes = [
  { path: '', component: WorkoutsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [WorkoutsComponent],
  providers: []
})
export class WorkoutsModule {}