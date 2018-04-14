import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'meal',
  styleUrls: ['meal.component.scss'],
  templateUrl: './meal.component.html'
})
export class MealComponent {
  
  constructor(private mealsService: MealsService, private router: Router) {}

  async addMeal(meal: Meal) {
    console.log('meal', meal);
    await this.mealsService.addMeal(meal);
    this.router.navigate(['meals'])
  }
}