import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Meal } from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['meal-form.component.scss'],
  templateUrl: './meal-form.component.html'
})
export class MealFormComponent {

  @Output() create = new EventEmitter<Meal>();

  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  });

  constructor(private fb: FormBuilder) { }

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
      console.log('newMeal', newMeal);
      this.create.emit(newMeal);
    }
  }
}