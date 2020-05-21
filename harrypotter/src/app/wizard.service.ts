import {Injectable} from '@angular/core';
import {Wizard} from './wizard';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  requestWizards = environment.serverUrl + '/api/wizards';

  constructor(private http: HttpClient) {
  }

  getWizards(): Observable<Wizard[]> {
    return this.http.get<Wizard[]>(this.requestWizards);
  }

  editWizard(wizard: Wizard) {
    return this.http.put(this.requestWizards, wizard); // TODO: CHECK IF WORKS WITHOUT HTTP_OPTIONS
  }


}
