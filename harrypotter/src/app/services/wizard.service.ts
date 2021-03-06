import {Injectable} from '@angular/core';
import {Wizard} from '../entities/wizard';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

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

  getWizardsByHouseId(houseId: number): Observable<Wizard[]> {
    return this.http.get<Wizard[]>(this.requestWizards + '/' + houseId);
  }

  addWizard(wizard: Wizard) {
    return this.http.post(this.requestWizards, wizard);
  }

  editWizard(wizard: Wizard) {
    return this.http.put(this.requestWizards, wizard);
  }

  deleteWizard(wizard: Wizard) {
    return this.http.delete(this.requestWizards + '/' + wizard.id);
  }
}
