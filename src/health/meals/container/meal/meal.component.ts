import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'meal',
  styleUrls: ['meal.component.scss'],
  templateUrl: './meal.component.html'
})
export class MealComponent implements OnInit, OnDestroy {
  
  meal$: Observable<Meal>;
  subscription: Subscription;

  constructor(private mealsService: MealsService, 
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    // subscribe to the meals list    s
    this.subscription = this.mealsService.meals$.subscribe();

    this.meal$ = this.route.params
      .switchMap(params => {
        console.log('params = ', params);
        return this.mealsService.getMeal(params.id);
      })
  }

  ngOnDestroy()  {
    this.subscription.unsubscribe();
  }

  async addMeal(meal: Meal) {
    console.log('meal', meal);
    await this.mealsService.addMeal(meal);
    this.router.navigate(['meals'])
  }

  async updateMeal(event: Meal) {
    const key = this.route.snapshot.params.id;
    await this.mealsService.updateMeal(key, event);
    this.router.navigate(['meals'])    
  }

  async removeMeal(event: Meal) {
    const key = this.route.snapshot.params.id;
    await this.mealsService.removeMeal(key);
    this.router.navigate(['meals'])    
  }

}