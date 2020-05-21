import {Injectable} from '@angular/core';
import {Wizard} from './wizard';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  requestWizards = 'http://localhost:8080/api/wizards';

  getWizards(): Observable<Wizard[]> {
    return this.http.get<Wizard[]>(this.requestWizards);
  }

  editWizard(wizard: Wizard){
    return this.http.post(this.requestWizards, wizard, this.httpOptions); // TODO: CHECK IF WORKS WITHOUT HTTP_OPTIONS
  }

  constructor(private http: HttpClient) {
  }
}
