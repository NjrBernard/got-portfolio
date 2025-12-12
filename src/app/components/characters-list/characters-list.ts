import { Component, Input, OnInit } from '@angular/core';
import { Characters } from '../../shared/models/characters.model';
import {NgClass} from '@angular/common';
import { FullnameEmojiPipe } from '../../shared/pipes/fullname-emoji-pipe';
 

@Component({
  selector: 'app-characters-list',
  imports: [NgClass, FullnameEmojiPipe],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList implements OnInit {
  @Input() public  charactersFromParent!: Characters[];
  protected activeIndex: number = 0;

  protected setActiveIndex(idx: number): void {
    this.activeIndex = idx;
  }

  ngOnInit(): void {
    console.log(this.charactersFromParent);
  }



getFamilyName(character: Characters): string {
  if (!character.family) return '';

  return character.family
    .toLowerCase().replace(/\s+/g, '-');
}
}