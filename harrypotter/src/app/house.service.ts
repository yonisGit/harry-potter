import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from './../environments/environment';
import {House} from './house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  requestHouses = environment.serverUrl + '/api/houses';

  constructor(private http: HttpClient) {
  }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.requestHouses);
  }
}
