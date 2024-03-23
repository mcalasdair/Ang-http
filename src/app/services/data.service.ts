import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

const BE_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);

  constructor() {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${BE_URL}?_limit=10`);
  }
}
