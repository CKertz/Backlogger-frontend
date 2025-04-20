import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameEntry } from './models/GameEntry';

@Injectable({
  providedIn: 'root'
})
export class GameEntryService {
  constructor(private http: HttpClient) {}

  getEntries(): Observable<GameEntry[]> {
    return this.http.get<GameEntry[]>('http://localhost:8080/gameEntry/all'); 
  }
}