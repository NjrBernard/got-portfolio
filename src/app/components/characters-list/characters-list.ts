import { Component, Input, OnInit } from '@angular/core';
import { Characters } from '../../shared/models/characters.model';
import {NgClass} from '@angular/common';
 

@Component({
  selector: 'app-characters-list',
  imports: [NgClass],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList implements OnInit {
  @Input() public  charactersFromParent!: Characters[];

  ngOnInit(): void {
    console.log(this.charactersFromParent);
  }


getFamilyName(character: Characters): string {
  if (!character.family) return '';

  return character.family
    .toLowerCase()
    .replace(/\s+/g, '-');
}
}