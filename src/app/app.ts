import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharactersList} from './components/characters-list/characters-list';
import { CharacterService } from './shared/services/character';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private charactersService = inject(CharacterService);
  ngOnInit(): void {console.log('Tout est ok');}
}
