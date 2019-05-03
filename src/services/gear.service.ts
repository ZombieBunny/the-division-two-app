import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GearService {

  constructor(private http: HttpClient) {
  }

  public creatGear(gear): Observable<any> {
    return this.http.post(environment.apiUrl + 'gear', gear)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        })
      );
  }

  public creatGearAttribbute(gear): Observable<any> {
    return this.http.post(environment.apiUrl + 'gear-attributes', gear)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        })
      );
  }

  public creatGearTalent(gear): Observable<any> {
    return this.http.post(environment.apiUrl + 'gear-talents', gear)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        })
      );
  }

  public getSets(): Observable<any> {
    return this.http.get(environment.apiUrl + 'sets')
      .pipe(
        map(data => {
          console.log(data);
          return data;
        })
      );
  }

  public getAttributes(): Observable<any> {
    return this.http.get(environment.apiUrl + 'gear-attributes')
      .pipe(
        map(data => {
          console.log(data);
          return data;
        })
      );
  }

  public getGearSets(): Observable<any> {
    return this.http.get(environment.apiUrl + 'gear')
      .pipe(
        map(data => {
          console.log(data);
          return data;
        })
      );
  }

  public getGearTalents(): Observable<any> {
    return this.http.get(environment.apiUrl + 'gear-talents')
      .pipe(
        map(data => {
          console.log(data);
          return data;
        })
      );
  }
}
