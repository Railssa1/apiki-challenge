import { Component, inject, OnInit } from '@angular/core';
import { BlogDataService } from '../../services/blog-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-post',
  imports: [],
  templateUrl: './detail-post.html',
  styleUrl: './detail-post.css'
})
export class DetailPost implements OnInit {
  private blogService = inject(BlogDataService);
  private route = inject(ActivatedRoute);

  slug = "";
  data: any;

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get("slug")!;
    this.loadDetailPost(this.slug);
  }

  loadDetailPost(slug: string): void {
    this.blogService.getDetailPost(slug).subscribe({
      next: (resp) => {
        this.data = resp;
      },
      error: (err) => console.log(err)
    });
  }
}
