import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl="http://localhost:8080/doctor";
  constructor(private httpclient: HttpClient) { }


  createDoctor(doctor:Doctor): Observable<any>{
    return this.httpclient.post<any>(`${this.baseUrl}`, doctor);
  }


  getDoctorList(): Observable<Doctor[]>{
    return this.httpclient.get<Doctor[]>(`${this.baseUrl}`);
  }
  getDoctorById(id: number): Observable<Doctor>{
    return this.httpclient.get<Doctor>(`${this.baseUrl}/${id}`);
  }
  updateDoctor(id: number, doctor: Doctor): Observable<Object>{
    return this.httpclient.put(`${this.baseUrl}`,doctor);
  }

  deleteDoctor(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }
}
