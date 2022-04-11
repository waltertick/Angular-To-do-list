import { Todos } from './../models/todos';
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  url: string= "http://localhost:3000/Todos";
  getTodo() {
    return this.http.get<Todos[]>(this.url);
  }
  addTodo(todo: Todos): Observable<Todos> {
    return this.http.post<Todos>(this.url, todo, httpOptions);

  }
}
