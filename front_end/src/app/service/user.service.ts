import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

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
    return this.httpClient.post("http://localhost:8080/registeruser", user);
  }

  public loginUserFromRemote(user : User): Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/login", user)
  }

  public registerUserFromRemote(user : User):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/registeruser", user)
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object>{
  return this.httpClient.put(`${this.baseUrl}`,user);
}

deleteUser(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseUrl}/${id}`);
}

}
