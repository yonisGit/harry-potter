import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wizard} from './wizard';
import {House} from './house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  requestHouses = 'http://localhost:8080/harry-potter/houses';

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.requestHouses);
  }

  constructor(private http: HttpClient) { }
}
