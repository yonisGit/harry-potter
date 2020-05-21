import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wizard} from './wizard';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  requestSpells = 'http://localhost:8080/api/spells';

  getSpells(): Observable<string[]> {
    return this.http.get<string[]>(this.requestSpells);
  }

  addSpell(spell: string) {
    return this.http.post(this.requestSpells, spell, this.httpOptions);
  }

  // todo: make proper delete... not put.
  deleteSpell(spell: string) {
    return this.http.put(this.requestSpells, spell, this.httpOptions);
  }

  constructor(private http: HttpClient) {
  }
}
