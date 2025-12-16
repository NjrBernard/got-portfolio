import { ChangeDetectorRef, Component, inject, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharactersList} from '../../components/characters-list/characters-list';
import { CharacterService } from '../../shared/services/character';
import { ContinentService } from '../../shared/services/continents';
import { Characters } from '../../shared/models/characters.model';
import { Continents } from '../../shared/models/continents-model';
import { ContinentsList } from '../../components/continents-list/continents-list';
import { NgClass, NgStyle } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';
 
@Component({
  selector: 'app-root',
  imports: [CharactersList, ContinentsList, NgClass, NgStyle],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit, AfterViewInit, OnDestroy {
  // Accès à un élément HTML par sa référence (#searchInput)
  @ViewChild('searchInput') private searchInput!: ElementRef<HTMLInputElement>;
  private charactersService = inject(CharacterService);
  private continentService = inject(ContinentService);
  private cdr : ChangeDetectorRef= inject(ChangeDetectorRef);
  private subscriptions: Subscription[] = [] ;
  protected charactersToGiveToChild!: Characters[];
  protected continentsToGiveToChild!: Continents[];
  protected filteredCharacters!: Characters[];

  //protected isSelected: boolean = false;
  //protected isWarning: boolean = true;

  //protected toggleSelected(): void {
  //  this.isSelected = !this.isSelected;
  //}
  //protected isActive: boolean = false;
  //protected colorCrimson = "whitesmoke";
  // protected isOnline: boolean = false;

  protected isToggled: boolean = false;
  protected toggleColor(): void {
    this.isToggled  = !this.isToggled;
  }

  ngOnInit(): void {
    this.getCharactersInTemplate();
    this.getContinentsInTemplate();
  }

  ngAfterViewInit(): void {
    this.searchInput.nativeElement.focus();
  }

  protected onSearch(term: string): void {
    this.filteredCharacters = this.charactersToGiveToChild.filter((character: Characters) => {
      const fullName = character.fullName ?? '';
      console.log(fullName.toLowerCase().includes(term.toLowerCase()));
      return fullName.toLowerCase().includes(term.toLowerCase());
    })
  }

    private getCharactersInTemplate(): void {
      this.subscriptions.push(this.charactersService.getCharacters().subscribe((charactersFromApi: Characters[])  => {} ));
    this.charactersService.getCharacters().subscribe((charactersFromApi: Characters[])  => {
      this.charactersToGiveToChild = charactersFromApi;
      this.filteredCharacters = charactersFromApi;
      this.cdr.detectChanges();
    })};

    private getContinentsInTemplate(): void {
    this.continentService.getAllContinents().subscribe((continentsFromApi: Continents[]) => {
      this.continentsToGiveToChild = continentsFromApi;
      this.cdr.detectChanges();
    })
};

ngOnDestroy(): void {
  this.subscriptions.forEach((subscription : Subscription) => subscription.unsubscribe());
  
}
}

