import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Question } from '../models/question';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  
  constructor(private http:HttpClient) { }

  getConfig(): Observable<Question[]> {
    return this.http.get<Question[]>(environment.configUrl);
  }
}
