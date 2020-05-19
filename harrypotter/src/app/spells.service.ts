import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wizard} from './wizard';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  requestSpells = 'http://localhost:8080/harry-potter/spells';

  getSpells(): Observable<string[]> {
    return this.http.get<string[]>(this.requestSpells);
  }

  addSpell(spell: string): Observable<string> {
    return this.http.post<string>(this.requestSpells, spell, this.httpOptions);
  }

  constructor(private http: HttpClient) {
  }
}
