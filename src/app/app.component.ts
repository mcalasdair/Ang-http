import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private dataService = inject(DataService);
  posts$!: Observable<Post[]>;

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.posts$ = this.dataService.getPosts();
  }
}
