import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharactersList} from './components/characters-list/characters-list';
import { CharacterService } from './shared/services/character';
import { Characters } from './shared/models/characters.model';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private charactersService = inject(CharacterService);
  protected charactersToGiveToChild!: Characters[];
  protected tableauTest: number[] = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((charactersFromApi: Characters[])  => {
      this.charactersToGiveToChild = charactersFromApi;
    })
}
}