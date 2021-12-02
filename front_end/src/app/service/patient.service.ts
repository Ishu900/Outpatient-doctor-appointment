import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl="http://localhost:8080/patient";
  constructor(private httpclient: HttpClient) { }


  createPatient(patient:Patient): Observable<any>{
    return this.httpclient.post<any>(`${this.baseUrl}`, patient);
  }
  getPatientList(): Observable<Patient[]>{
    return this.httpclient.get<Patient[]>(`${this.baseUrl}`);
  }
  getPatientById(id: number): Observable<Patient>{
    return this.httpclient.get<Patient>(`${this.baseUrl}/${id}`);
  }
  updatePatient(id: number, doctor: Patient): Observable<Object>{
    return this.httpclient.put(`${this.baseUrl}`,doctor);
  }

  deletePatient(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }
}
