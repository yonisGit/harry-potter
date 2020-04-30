import {Injectable} from '@angular/core';
import {Wizard} from './wizard';
import {WIZARDS} from './mock-wizards';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  getWizards(): Observable<Wizard[]> {
    return of(WIZARDS);
  }

  constructor() {
  }
}
