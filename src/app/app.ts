import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharactersList} from './components/characters-list/characters-list';
import { CharacterService } from './shared/services/character';
import { ContinentService } from './shared/services/continents';
import { Characters } from './shared/models/characters.model';
import { Continents } from './shared/models/continents-model';
import { ContinentsList } from './components/continents-list/continents-list';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersList, ContinentsList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private charactersService = inject(CharacterService);
  private continentService = inject(ContinentService);
  private cdr : ChangeDetectorRef= inject(ChangeDetectorRef);
  protected charactersToGiveToChild!: Characters[];
  protected continentsToGiveToChild!: Continents[];


  protected filteredCharacters!: Characters[];

  ngOnInit(): void {
    this.getCharactersInTemplate();
    this.getContinentsInTemplate();
  }

  protected onSearch(term: string): void {
    this.filteredCharacters = this.charactersToGiveToChild.filter((character: Characters) => {
      const fullName = character.fullName ?? '';
      console.log(fullName.toLowerCase().includes(term.toLowerCase()));
      return fullName.toLowerCase().includes(term.toLowerCase());
    })
  }

    private getCharactersInTemplate(): void {
    this.charactersService.getCharacters().subscribe((charactersFromApi: Characters[])  => {
      this.charactersToGiveToChild = charactersFromApi;
      this.filteredCharacters = charactersFromApi;
      this.cdr.detectChanges();
    })}
    private getContinentsInTemplate(): void {
    this.continentService.getAllContinents().subscribe((continentsFromApi: Continents[]) => {
      this.continentsToGiveToChild = continentsFromApi;
      this.cdr.detectChanges();
    })
}
}

