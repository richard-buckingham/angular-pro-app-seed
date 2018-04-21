import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['list-item.component.scss'],
  templateUrl: './list-item.component.html'
})
export class ListItemComponent {
  
  toggled = false;

  @Input() item: any;

  @Output() remove = new EventEmitter<any>();

  constructor() {}

  getRoute(item: any): any[] {
    const urlFragment = item.ingredients ? 'meals' : 'workouts';
    console.log('urlFragment = ', urlFragment);
    const route: any[] = [`../${urlFragment}`, item.$key];
    console.log('getting the route. route = ', route);
    return route;
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  removeItem() {
    this.remove.emit(this.item);
  }
}