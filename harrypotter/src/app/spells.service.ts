import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wizard} from './wizard';
import {Spell} from './spell';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  requestSpells = 'http://localhost:8080/api/spells';

  getSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>(this.requestSpells);
  }

  addSpell(spell: Spell) {
    return this.http.post(this.requestSpells, spell);
  }

  deleteSpell(spell: Spell) {
    return this.http.delete(this.requestSpells + '/' + spell.id);
  }

  constructor(private http: HttpClient) {
  }
}
