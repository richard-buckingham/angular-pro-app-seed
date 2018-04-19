import { Component, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR  } from '@angular/forms';

export const TYPE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WorkoutTypeComponent),
  multi: true
};

@Component({
  selector: 'workout-type',
  providers: [TYPE_CONTROL_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['workout-type.component.scss'],
  templateUrl: './workout-type.component.html'
})
export class WorkoutTypeComponent implements ControlValueAccessor {

  selectors = ['strength', 'endurance'];

  value: string;

  private onTouch: Function;
  private onModelChange: Function;

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  writeValue(value: string): void {
    console.log('value = ', value);
    this.value = value;
  }

  setSelected(selected: string): void {
    console.log('selected = ', selected);
    this.value = selected;
    console.log('updating the reactive form');
    this.onModelChange(selected);
    this.onTouch();
  }
}