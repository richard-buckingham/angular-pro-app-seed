import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.services';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

export interface Meal {
  name: string,
  ingredients: string[],
  timestamp: number,
  $key: string,
  $exists: () => boolean
}

@Injectable()
export class MealsService {
  
  // 'meals/uid' is our firebase endpoint
  // note that this.db.list is an observable, that will notify us every time a change occurs
  meals$: Observable<Meal[]> = this.db.list(`meals/${this.uid}`)
    .do( (meals: Meal[]) => {
      console.log('meals has been updated in firebase... ', meals);
      this.store.set('meals', meals);
    });
  
  constructor( 
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService) {}

    get uid() {
      return this.authService.user.uid;
    }

    addMeal(meal: Meal) {
      this.db.list(`meals/${this.uid}`).push(meal);
    }

    updateMeal(key: string, meal: Meal) {
      return this.db.object(`meals/${this.uid}/${key}`).update(meal);
    }

    removeMeal(key: string) {
      return this.db.list(`meals/${this.uid}`).remove(key);
    }

    getMeal(key: string) {
      if (!key) return Observable.of({}); // this empty object is used to alter some text in the html
      return this.store.select<Meal[]>('meals')
        .filter(Boolean)
        .map(meals => meals.find((meal: Meal) => meal.$key === key));
    }

}