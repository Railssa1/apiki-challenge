import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseLast10Posts } from '../models/last-10-posts';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  private endpoint = "https://blog.apiki.com/wp-json/wp/v2/";
  private http = inject(HttpClient);

  getLastTenPosts(): Observable<ResponseLast10Posts> {
    return this.http.get<ResponseLast10Posts>(`${this.endpoint}/posts?_embed&categories=518`);
  }


}
