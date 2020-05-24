import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Spell} from '../entities/spell';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  requestSpells = environment.serverUrl + '/api/spells';

  constructor(private http: HttpClient) {
  }

  getSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>(this.requestSpells);
  }

  addSpell(spell: Spell) {
    return this.http.post(this.requestSpells, spell);
  }

  deleteSpell(spell: Spell) {
    return this.http.delete(this.requestSpells + '/' + spell.id);
  }
}
