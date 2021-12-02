import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';
import { Availabledates } from '../model/availabledates';

@Injectable({
  providedIn: 'root'
})
export class AvailabledatesService {
  private baseUrl="http://localhost:8080/availdates";
  constructor(private httpClient: HttpClient) { }

  createAvailabledates(availableDates:Availabledates): Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}`, availableDates);
  }


  getAvailabledatesList(): Observable<Availabledates[]>{
    return this.httpClient.get<Availabledates[]>(`${this.baseUrl}`);
  }
  getAvailabledatesById(id: number): Observable<Availabledates>{
    return this.httpClient.get<Availabledates>(`${this.baseUrl}/${id}`);
  }
  updateAvailabledates(id: number, availableDates: Availabledates): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`,availableDates);
  }

  deleteAvailabledates(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
