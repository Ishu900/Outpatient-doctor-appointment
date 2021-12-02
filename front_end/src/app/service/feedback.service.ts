import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../model/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private baseUrl="http://localhost:8080/feedback";
  constructor(private httpClient: HttpClient) { }

  createFeedback(feedback:Feedback): Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}`, feedback);
  }


  getFeedbackList(): Observable<Feedback[]>{
    return this.httpClient.get<Feedback[]>(`${this.baseUrl}`);
  }
  getFeedbackById(id: number): Observable<Feedback>{
    return this.httpClient.get<Feedback>(`${this.baseUrl}/${id}`);
  }
  updateFeedback(id: number, feedback: Feedback): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`,feedback);
  }

  deleteFeedback(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
