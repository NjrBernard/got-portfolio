import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CitiesModel } from '../../shared/models/cities-model';
import { HoverHighlight } from '../../shared/directives/hover-highlight';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cities-list',
  imports: [HoverHighlight, ReactiveFormsModule],
  templateUrl: './cities-list.html',
  styleUrl: './cities-list.scss',
})
export class CitiesList {
  @Input () citiesFromParent: CitiesModel [] = [];
  @Output () cityCreated = new EventEmitter<CitiesModel>();

  protected displayCityForm: boolean = false;

  protected cityForm = new FormGroup ({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    inhabitants: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    typicalDish: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    currency: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    flag: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
  });

  protected addCity() {
    if (this.cityForm.invalid) {
      this.cityForm.markAllAsTouched();
      return; 
    }
    const values = this.cityForm.value;
    const newCity: CitiesModel = {
      id: Date.now(),
      name: values.name as string,
      inhabitants: values.inhabitants as number,
      typicalDish: values.typicalDish as string,
      currency: values.currency as string,
      flag: values.flag as string,
  }
  this.cityCreated.emit(newCity);
  this.cityForm.reset();
}

protected displayAddCityForm(): void {
this.displayCityForm = !this.displayCityForm;
}    
}