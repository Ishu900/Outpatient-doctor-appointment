import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../app/model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl="http://localhost:8080/user";

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }

  createUser(user:User): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, user);
  }

}
