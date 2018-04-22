import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable'

import { Store } from 'store';

@Injectable()
export class ScheduleService {
  
  // initialise our calendar with a data
  private date$ = new BehaviorSubject<Date>(new Date());
  

  // when date$ changes,  
  schedule$: Observable<any[]> = this.date$
      .do((next: any) => {
        console.log('updating the date in the store, date = ', next);
        this.store.set('date', next);
      }); 

  constructor(private store: Store) {}


}