import {Injectable} from '@angular/core';
import {Wizard} from './wizard';
import {WIZARDS} from './mock-wizards';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  requestHouses = 'http://localhost:8080/harry-potter/wizards';

  getWizards(): Observable<Wizard[]> {
    return this.http.get<Wizard[]>(this.requestHouses);
  }

  constructor(private http: HttpClient) {
  }
}
