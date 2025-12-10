import { Component } from '@angular/core';
import { Characters } from '../../shared/models/characters.model';

@Component({
  selector: 'app-characters-list',
  imports: [],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
protected newCharacter: Characters = {
    id: 1,
    firstName: 'Nicolas',
    lastName: 'Bernard',
    title: 'GOAT',
    image: '',
    imageUrl: ''
}

protected charactersFromApi: Characters[] = [
  {
    id: 2,
    firstName: 'Martin',
    lastName: 'Ferret',
    family: 'Pieds carrés',
    title: 'Roi',
    image: '',
    imageUrl: ''
  },
  {
    id: 3,
    firstName: 'Xavier',
    lastName: 'Estanove',
    family: 'Linux',
    title: 'Seigneur',
    image: '',
    imageUrl: ''
  }
];
}