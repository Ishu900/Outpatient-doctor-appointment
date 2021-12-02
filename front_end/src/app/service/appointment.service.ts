import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl="http://localhost:8080/appointment";
  constructor(private httpClient: HttpClient) { }

  createAppointment(appointment:Appointment): Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}`, appointment);
  }


  getAppointmentList(): Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }
  getAppointmentById(id: number): Observable<Appointment>{
    return this.httpClient.get<Appointment>(`${this.baseUrl}/${id}`);
  }
  updateAppointment(id: number, appointment: Appointment): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`,appointment);
  }

  deleteAppointment(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
