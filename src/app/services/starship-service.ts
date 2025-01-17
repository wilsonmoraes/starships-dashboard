import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  private baseUrl = 'http://127.0.0.1:5000/api';

  constructor(private http: HttpClient) {
  }

  getManufacturers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/manufacturers`);
  }

  getStarships(manufacturerId?: string): Observable<any> {
    const url = manufacturerId
      ? `${this.baseUrl}/starships?manufacturer_id=${manufacturerId}`
      : `${this.baseUrl}/starships`;
    return this.http.get(url);
  }
}
