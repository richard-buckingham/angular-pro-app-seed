import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.services';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

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
      console.log('meals', meals);
      this.store.set('meals', meals);
    });
  
  constructor( 
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService) {}

    get uid() {
      return this.authService.user.uid;
    }

}