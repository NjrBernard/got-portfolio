import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CitiesModel } from '../../shared/models/cities-model';
import { CitiesList } from '../cities-list/cities-list';

@Component({
  selector: 'app-cities',
  imports: [RouterOutlet, CitiesList],
  templateUrl: './cities.html',
  styleUrl: './cities.scss',
})
export class Cities implements OnInit {
  protected currentTitle: string = '';
  protected cities: CitiesModel[] = [];
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private titleService = inject(Title);

  ngOnInit(): void {
    this.getAllCities();
    this.getTitle();
  }
      
private getTitle (): void {
    this.currentTitle = this.titleService.getTitle();
  }

  private getAllCities(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.cities = data['cities'] as CitiesModel[];
      console.log(this.cities);
    });

    
  }
  protected addCity(createdCity: CitiesModel) : void {
  this.cities = [...this.cities, createdCity];
}

}