import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../header/header";
import { Card } from "../card/card";
import { BlogDataService } from '../../services/blog-data.service';
import { ResponseLast10Posts } from '../../models/last-10-posts';
import { ButtonLoad } from "../button-load/button-load";

@Component({
  selector: 'app-home',
  imports: [Header, Card, ButtonLoad],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  private blogService = inject(BlogDataService);
  pages = 0;
  currentPage = 2;
  showButton = true;

  posts: ResponseLast10Posts = [];

  ngOnInit(): void {
    this.getBlogData();
  }

  getBlogData(): void {
    this.blogService.getLastTenPosts().subscribe({
      next: (resp) => {
        this.posts = resp.body;
        this.pages = resp.headers.get('X-WP-TotalPages');
      },
      error: (err) => console.log(err)
    });
  }

  onLoadMore(): void {
    if (this.currentPage < this.pages) {
      this.currentPage++;
    } else {
      this.showButton = false;
    }

    const query = `&page=${this.currentPage}`;
    this.blogService.getLastTenPosts(query).subscribe({
      next: (resp) => {
        resp.body.forEach((post) => this.posts.push(post))
      },
      error: (err) => console.log(err)
    });
  }
}
