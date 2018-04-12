import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from 'store';
import { MealsService, Meal } from '../../../shared/services/meals/meals.service';


import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'meals',
  styleUrls: ['meals.component.scss'],
  templateUrl: './meals.component.html'
})
export class MealsComponent implements OnInit, OnDestroy {
  
  meals$: Observable<Meal[]>;
  subscription: Subscription;

  constructor(private mealsService: MealsService,
              private store: Store) {}

  ngOnInit() {
    // kick off the data flow of meals from the MealsService
    console.log('init meals component');
    this.meals$ = this.store.select<Meal[]>('meals');
    this.subscription = this.mealsService.meals$.subscribe();
  }

  ngOnDestroy() {
    console.log('destroy meals component');
    this.subscription.unsubscribe();
  }


}