import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl="http://localhost:8080/admin";
  constructor(private httpClient: HttpClient) { }

  createAdmin(admin:Admin): Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}`, admin);
  }


  getAdminList(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseUrl}`);
  }
  getAdminById(id: number): Observable<Admin>{
    return this.httpClient.get<Admin>(`${this.baseUrl}/${id}`);
  }
  updateAdmin(id: number, admin: Admin): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`,admin);
  }

  deleteAdmin(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
