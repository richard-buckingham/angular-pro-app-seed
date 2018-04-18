import { Component, OnChanges, SimpleChanges, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Meal } from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['meal-form.component.scss'],
  templateUrl: './meal-form.component.html'
})
export class MealFormComponent implements OnChanges {

  toggled: boolean = false;
  exists: boolean = false;

  @Input() meal: Meal;

  @Output() create = new EventEmitter<Meal>();
  @Output() update = new EventEmitter<Meal>();
  @Output() remove = new EventEmitter<Meal>();

  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  });

  constructor(private fb: FormBuilder) { }

  // this event occurs when any input changes
  ngOnChanges(changes: SimpleChanges) {
    if (this.meal && this.meal.name) {

      this.exists = true;

      // remove any existing ingredients
      this.emptyIngredients();

      // populate form values
      const value: Meal = this.meal;
      // Note: patchValue does not update a formArray
      this.form.patchValue(value);

      // populate the ingredients formarray
      if (value.ingredients) {
        for (const item of value.ingredients) {
          this.ingredients.push(new FormControl(item));
        }
      }
    }
  }

  emptyIngredients(): void {
    while (this.ingredients.controls.length) {
      this.ingredients.removeAt(0);
    }
  }


  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray
  }

  get nameRequiredError(): boolean {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    )
  }

  addIngredient() {
    this.ingredients.push(new FormControl(''));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  createMeal() {
    if (this.form.valid) {
      const newMeal = <Meal>this.form.value;
      //console.log('newMeal', newMeal);
      this.create.emit(newMeal);
    }
  }

  updateMeal() {
    if (this.form.valid) {
      const newMeal = <Meal>this.form.value;
      this.update.emit(newMeal);
    }
  }

  removeMeal() {
    const newMeal = <Meal>this.form.value;
    this.remove.emit(newMeal);
  }

  toggle(): void {
    this.toggled = !this.toggled;
  }
}