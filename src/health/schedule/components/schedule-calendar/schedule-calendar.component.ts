import { Component, Input } from '@angular/core';

@Component({
  selector: 'schedule-calendar',
  styleUrls: ['schedule-calendar.component.scss'],
  template: `
    <div class="calendar">
      <h3>in the schedule calendar component</h3>
      {{ date | json }}
    </div>
  `
})
export class ScheduleCalendarComponent {
  
  @Input() date: Date;
  
  constructor() {}
}