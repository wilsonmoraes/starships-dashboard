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

  getStarships(manufacturerId?: string, page: number = 1, limit: number = 10): Observable<any> {
    let url = `${this.baseUrl}/starships?page=${page}&limit=${limit}`;
    if (manufacturerId) {
      url += `&manufacturer_id=${manufacturerId}`;
    }
    return this.http.get(url);
  }

  getStarshipDetails(starshipId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/starships/${starshipId}`);
  }
}
