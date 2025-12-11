import { Component, Input } from '@angular/core';
import { Continents } from '../../shared/models/continents-model';

@Component({
  selector: 'app-continents-list',
  imports: [],
  templateUrl: './continents-list.html',
  styleUrl: './continents-list.scss',
})
export class ContinentsList {
  @Input () public continentsFromParent!: Continents[];

  ngOnInit(): void {
    console.log(this.continentsFromParent);
  }
}
