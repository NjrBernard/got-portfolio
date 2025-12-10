import { Component, Input } from '@angular/core';
import { Characters } from '../../shared/models/characters.model';

@Component({
  selector: 'app-characters-list',
  imports: [],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  @Input() public  charactersFromParent!: Characters[];
  @Input() public tableauTest!: number[];

  ngOnInit(): void {
    console.log(this.charactersFromParent);
    console.log(this.tableauTest);
  }
}