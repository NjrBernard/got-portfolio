import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Continents } from '../models/continents-model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  private continentsUrl: string = environment.apiUrl;
  private httpClient = inject(HttpClient);

  public getAllContinents() : Observable<Continents[]> {
    return this.httpClient.get<Continents[]>(this.continentsUrl + '/Continents');
  }
}
