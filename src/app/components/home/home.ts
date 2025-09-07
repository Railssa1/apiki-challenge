import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../header/header";
import { Card } from "../card/card";
import { BlogDataService } from '../../services/blog-data.service';
import { ResponseLast10Posts } from '../../models/last-10-posts';

@Component({
  selector: 'app-home',
  imports: [Header, Card],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  private blogService = inject(BlogDataService);

  posts: ResponseLast10Posts = [];

  ngOnInit(): void {
    this.getBlogData();
  }

  getBlogData(): void {
    this.blogService.getLastTenPosts().subscribe({
      next: (resp) => {
        this.posts = resp
      },
      error: (err) => console.log(err)
    })
  }
}
