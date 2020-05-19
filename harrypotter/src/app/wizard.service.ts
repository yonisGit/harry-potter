import {Injectable} from '@angular/core';
import {Wizard} from './wizard';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  requestWizards = 'http://localhost:8080/harry-potter/wizards';

  getWizards(): Observable<Wizard[]> {
    return this.http.get<Wizard[]>(this.requestWizards);
  }

  // updateWizard(wizard: Wizard): Observable<Wizard> {
  //   return this.http.post(this.requestWizards,wizard);
  // }

  addWizard(wizard: Wizard): Observable<Wizard> {
    return this.http.post<Wizard>(this.requestWizards, wizard, this.httpOptions);
  }

  constructor(private http: HttpClient) {
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  }
}
